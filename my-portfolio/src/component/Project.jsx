import React from "react";
import "../cssFile/project.scss";
import foodImage from "../assets/projectImages/fooe-image1.jpg";
import imdbImage from "../assets/projectImages/images.jpeg";
import movieTicket from "../assets/projectImages/movie-ticket.png";
import weatherImage from "../assets/projectImages/images (1).jpeg";
import brandImage from "../assets/projectImages/fooe-image1.jpg";
import photographicImage from "../assets/projectImages/photgenic3.jpg";
const projects = [
  {
    title: "Imdb-clone",
    description:
      "A React.js, Vite, and TailwindCSS-based IMDb clone with a watchlist feature. Users can add and remove movies from their watchlist, which is organized by genres.",

    image: imdbImage,
    githubLink: "https://github.com/Ashit-Negi/imdb-clone",
    liveLink: "https://ashit-negi.github.io/imdb-clone/",
  },
  {
    title: "Food-App",
    description: "This is my project 1",
    image: foodImage,
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Movie-ticket-app",
    description: "This is my project 1",
    image: movieTicket,
    githubLink: "https://github.com/Ashit-Negi/BookMyShow-Clone",
    liveLink: "https://bookmyshow-clone-c4rs.onrender.com",
  },
  {
    title: "Wheather-App",
    description:
      "A dynamic Weather App that fetches real-time weather data using WeatherAPI. It displays temperature, humidity, wind speed, and weather icons based on conditions, with a sleek gradient UI and responsive design",
    image: weatherImage,
    githubLink: "https://github.com/Ashit-Negi/WEATHER-APP",
    liveLink: "https://ashit-negi.github.io/WEATHER-APP/",
  },
  {
    title: "Photographic-App",
    description:
      "A custom-built photographic portfolio app designed, showcasing their photography work in a clean, professional layout. The app features easy navigation, photo galleries, and a sleek design to highlight their best shots.",
    image: photographicImage,
    githubLink: "https://github.com/Ashit-Negi/photos-apps",
    liveLink: "https://ashit-negi.github.io/photos-apps/#/",
  },
  {
    title: "Brand-App",
    description: "This is my project 1",
    image: brandImage,
    githubLink: "",
    liveLink: "",
  },
];
function Project() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener no referrer"
              >
                {" "}
                GitHub{" "}
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener no referrer"
              >
                {" "}
                Live Project{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
