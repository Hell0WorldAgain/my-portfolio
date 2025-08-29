import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ImageBox = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src="/images/home/creative/creative_img_1.png"
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hi! I'm Abhishek, a Frontend Developer with practical experience in creating high-performance, scalable, and responsive web applications.
            <br/><br/>
            Skilled in modern web technologies and frameworks, I actively broaden my expertise to remain ahead in the ever-evolving tech landscape. I excel in team-oriented settings and am always eager to take on new challenges.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-sky-500 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700 text-xl">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
