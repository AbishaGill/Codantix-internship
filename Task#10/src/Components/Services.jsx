import React from "react";
import { SERVICES_CONTENT } from "../constants";

const Services = () => {
  return (
    // Section wrapper for all services
    <section
      className="max-w-7xl mx-auto border-b-2 border-gray-300"
      id="services"
    >
      <div className="my-20">
        {/* Section heading */}
        <h2 className="text-xl lg:3xl tracking-tight text-center uppercase mb-20">
          Our Home Renovation Services
        </h2>

        {/* Loop through all services from SERVICES_CONTENT */}
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            {/* Service Image (left side by default, right side for odd index) */}
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Service Text (title + description) */}
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "pr-12"
              }`}
            >
              {/* Service Title */}
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
