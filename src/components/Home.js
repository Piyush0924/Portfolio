import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { TypeWriter } from "./TypeWriter"; // Assuming TypeWriter is default exported
import SocialLinks from "./SocialLinks"; // Assuming SocialLinks is default exported

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-[#7c9da6] text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <img
          src="/photo.jpg" 
          alt="Profile"
          className="w-40 h-40 border-2 border-white"
        />
          <h2 className="text-4xl sm:text-7xl font-semibold text-white my-4">
            I'm a Full Stack Web Developer (MERN)
          </h2>
          <p className="text-3xl font-medium text-white my-4">
            <TypeWriter text="Your meeting with Piyush's Portfolio" delay={90} />
          </p>
          <div>
            <a
              href={process.env.PUBLIC_URL + '/piyush.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit  my-2 px-4 py-3 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-125 duration-200"
            >
              Resume
              <span className="ml-2">
                <MdDownloadForOffline size={20} />
              </span>
            </a>
          </div>
          <SocialLinks /> {/* Include SocialLinks component here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
