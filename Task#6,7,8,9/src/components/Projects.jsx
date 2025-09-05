import React from "react";
import Landing from "/src/assets/photos/landingPhoto.png";
import ContactForm from "/src/assets/photos/contactform-reactjs.netlify.app_ (1).png";

const Projects = () => {
  const projectData = [
    {
      id: "1",
      title: "landing Page-VastuSpaze",
      description:
        "A modern React js based portfolio website for showcasing home renovation and interior design services.",
      link: "https://vastuspaze-react.netlify.app/",
      imgSrc: Landing,
    },
    {
      id: "2",
      title: "Contact Form",
      description: "A simple and responsive React contact form.",
      link: "https://contactform-reactjs.netlify.app/",
      imgSrc: ContactForm,
    },
  ];

  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">My Work</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {projectData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg break-inside-avoid">
              <img
                src={project.imgSrc}
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 m-8 p-8 text-black backdrop-blur-md">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="max-w-xs text-lg">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
