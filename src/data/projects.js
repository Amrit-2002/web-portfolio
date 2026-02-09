const projects = [
  {
    id: "log-tracker",
    title: "Log Tracker",
    description: "SaaS-style task and bug management system with secure authentication, RBAC, and operational reporting.",
    tech: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Amrit-2002/log-tracker",
    live: "#",
    features: [
      "Secure user authentication and authorization with Role-Based Access Control (RBAC).",
      "Comprehensive task and bug tracking workflows with priority and status management.",
      "Operational reporting with advanced filtering, sorting, and Excel export capabilities.",
      "RESTful API design ensuring scalable and maintainable backend architecture.",
      "Responsive user interface for seamless management on various devices."
    ]
  },
  {
    id: "quickshare",
    title: "QuickShare",
    description: "Secure file sharing platform with email integration and high-performance file handling.",
    tech: ["Node.js", "MongoDB", "Express.js", "HTML/CSS"],
    github: "https://github.com/Amrit-2002/Quick-Share-Front-end",
    live: "https://amrit-2002.github.io/Quick-Share-Front-end/",
    features: [
      "Secure file uploads with automatic unique link generation for easy sharing.",
      "Integrated email service allowing direct file sharing from the platform.",
      "High-performance file handling optimized for speed and reliability.",
      "Clean and intuitive user interface for a seamless file-sharing experience.",
      "Backend API abstractions designed for security and scalability."
    ]
  },
  {
    id: "solar-forecast",
    title: "Solar Irradiation Forecast",
    description: "Deep learning research improving solar energy forecasting using CNN-BiLSTM-Attention models.",
    tech: ["Python", "TensorFlow/Keras", "Deep Learning"],
    github: "https://shorturl.at/Lxfod",
    live: "https://shorturl.at/Lxfod",
    features: [
      "Hybrid Deep Learning model combining CNN, BiLSTM, and Attention mechanisms.",
      "Enhanced solar irradiance forecasting accuracy compared to traditional models.",
      "Analysis of spatial and temporal dependencies in weather data.",
      "Published research contributing to the field of renewable energy forecasting.",
      "Implementation of advanced data preprocessing and model evaluation techniques."
    ]
  },
  {
    id: "notes-management",
    title: "Notes Management",
    description: "Comprehensive notes management application.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Amrit-2002/notes-management",
    live: "#",
    features: [
      "Create, read, update, and delete (CRUD) operations for personal notes.",
      "User-friendly interface built with React for a responsive experience.",
      "Secure backend with Node.js and MongoDB for data persistence.",
      "Search and filter functionality to quickly find specific notes.",
      "Scalable architecture suitable for adding collaborative features in the future."
    ]
  },
  {
    id: "oneboard",
    title: "OneBoard",
    description: "Digital whiteboard application for real-time collaboration.",
    tech: ["React", "Canvas API"],
    github: "https://github.com/Amrit-2002/oneBoard",
    live: "#",
    features: [
      "Real-time drawing and collaboration capabilities using the Canvas API.",
      "Interactive toolbar with various tools like pen, eraser, and shapes.",
      "Responsive design ensuring usability across different screen sizes.",
      "Smooth drawing experience with optimized rendering performance.",
      "Potential for future extensions like saving boards or sharing sessions."
    ]
  },
  {
    id: "e-shopping",
    title: "E-Shopping Website",
    description: "Fully functional e-commerce frontend interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amrit-2002/E-Shopping-website",
    live: "#",
    features: [
      "Modern and responsive product listing and detail pages.",
      "Interactive shopping cart functionality with dynamic total calculation.",
      "Clean navigation and user-friendly layout for an optimal shopping experience.",
      "Implementation of core e-commerce features using pure JavaScript.",
      "Cross-browser compatibility ensuring consistent look and feel."
    ]
  },
  {
    id: "loan-prediction",
    title: "Loan Prediction System",
    description: "Machine learning model to predict loan approval status based on applicant data.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/Amrit-2002/loan_prediction_system",
    live: "#",
    features: [
      "Predictive model trained on historical loan data to assess eligibility.",
      "Data preprocessing pipeline handling missing values and categorical variables.",
      "Evaluation of various algorithms to select the best performing model.",
      "Insightful data visualization to understand key factors influencing approvals.",
      "Deployable model architecture for integration into banking systems."
    ]
  },
  {
    id: "laptop-price",
    title: "Laptop Price Prediction",
    description: "Price prediction model for laptops based on technical specifications.",
    tech: ["Python", "Scikit-learn"],
    github: "https://github.com/Amrit-2002/Laptop_price_prediction",
    live: "#",
    features: [
      "Regression model to estimate laptop prices based on specs like RAM, CPU, and storage.",
      "Feature engineering to extract meaningful insights from raw specifications.",
      "High accuracy achieved through hyperparameter tuning and model selection.",
      "User-friendly interface (if applicable) or API for price estimation.",
      "Analysis of market trends and component valuation."
    ]
  },
  {
    id: "flipkart-clone",
    title: "Flipkart Clone",
    description: "Responsive clone of the Flipkart e-commerce website.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amrit-2002/Flipkart",
    live: "#",
    features: [
      "Pixel-perfect replication of the Flipkart homepage and product pages.",
      "Responsive design adapting seamlessly to mobile, tablet, and desktop views.",
      "Interactive elements like sliders, carousels, and hover effects.",
      "Demonstration of advanced CSS layout techniques and JavaScript DOM manipulation.",
      "Focus on visual fidelity and user interface consistency."
    ]
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    description: "Classic interactive Tic-Tac-Toe game.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Amrit-2002/Tic-Tac-Toe-game",
    live: "#",
    features: [
      "Interactive game board with real-time status updates (winner, draw, next turn).",
      "History tracking allowing players to jump back to previous moves.",
      "Clean and minimal user interface built with React components.",
      "Logic implementation for determining win conditions and game states.",
      "Reset functionality to quickly start a new game."
    ]
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecasting application.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap"],
    github: "https://github.com/Amrit-2002/Weather-App",
    live: "#",
    features: [
      "Real-time weather data fetching using the OpenWeatherMap API.",
      "City search functionality to check weather conditions globally.",
      "Display of key metrics like temperature, humidity, wind speed, and conditions.",
      "Dynamic background changes based on current weather conditions (optional).",
      "Responsive layout for easy access on mobile devices."
    ]
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description: "Console-based system for hotel booking and management.",
    tech: ["C++", "DSA", "OOPS"],
    github: "https://github.com/Amrit-2002/Hotel-Management-System",
    live: "#",
    features: [
      "Console interface for managing room bookings and customer details.",
      "menu-driven system for easy navigation and operation.",
      "Implementation of OOP concepts like classes, inheritance, and encapsulation.",
      "Efficient data handling using Data Structures and Algorithms.",
      "Features for food ordering and bill calculation."
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Personal portfolio website showcasing skills and projects.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/Amrit-2002/Portfolio",
    live: "#",
    features: [
      "Modern and responsive design showcasing professional profile and work.",
      "Dynamic routing for smooth navigation between sections (About, Projects, etc.).",
      "Interactive elements and animations for an engaging user experience.",
      "Component-based architecture using React for maintainability.",
      "Fast loading times and optimized performance using Vite."
    ]
  },
];

export default projects;
