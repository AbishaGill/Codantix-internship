import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div className="mx-auto max-w-4xl text-center mt-6 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-zinc-50 to-purple-700 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 flex flex-col gap-4 sm:gap-6 rounded-2xl bg-gray-400 p-4 sm:p-6 lg:p-8 shadow-lg w-full sm:w-[90%] md:w-[80%]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-lg p-3 sm:p-4 text-black bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-lg p-3 sm:p-4 text-black bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-lg p-3 sm:p-4 text-black bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="rounded-lg bg-[#02091F] px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl font-bold text-center"
        >
          <span className="bg-gradient-to-r from-zinc-50 to-purple-700 bg-clip-text text-transparent">
            Send Message
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
