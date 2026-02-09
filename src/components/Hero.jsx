import profileImg from "../assets/my_photo.jpg";

function Hero({ name, role, description }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">{name}</span>
        </h1>
        <h2>{role}</h2>
        <p>{description}</p>
        <div className="hero-buttons">
          <a href="/about" className="btn">About Me</a>
          <a href="/contact" className="btn btn-outline">Contact</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt={name} />
      </div>
    </section>
  );
}

export default Hero;
