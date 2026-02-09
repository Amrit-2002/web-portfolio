import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSending(true);

      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || "YOUR_AUTOREPLY_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // 1. Send Admin Email (to you)
      const sendAdminEmail = emailjs.sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      });

      // 2. Send Auto-Reply Email (to sender)
      // Only attempt if we have an ID for it
      const sendAutoReply = autoReplyTemplateID
        ? emailjs.send(serviceID, autoReplyTemplateID, {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }, {
          publicKey: publicKey,
        })
        : Promise.resolve();

      Promise.all([sendAdminEmail, sendAutoReply])
        .then(
          () => {
            console.log("SUCCESS!");
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setSending(false);
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            console.log("FAILED...", error);
            setErrors({ submit: "Failed to send message. Please try again later." });
            setSending(false);
          }
        );
    }
  }

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            Feel free to reach out for opportunities, collaborations, or just a
            friendly chat 👋
          </p>
        </div>

        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={sending}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={sending}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={sending}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>

          {errors.submit && <p className="error">{errors.submit}</p>}
          {submitted && (
            <p className="success">Message sent successfully! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
