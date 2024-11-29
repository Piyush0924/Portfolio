import React, { useState } from "react";


const projectData = [
  {
    id: 1,
    // 
    src:"/cryptofrontdashboard.png",
    l: "https://github.com/Piyush0924/cryptofrontdashboard",
    href: "https://cryptofrontdashboard.vercel.app/",
    details: "This is a Crypto currency dashboard project that shows price charts, calculates exchange rates, and displays a list of top cryptocurrencies according to their market cap. It is created with React and Redux JavaScript libraries, styled components, and utilizes CoinGecko's API for information.",
  },
  {
    id: 2,
    // src: bookmyshow,
    src:"/bookmyshow.jpg",
    l: "https://github.com/sumit-nagrikar/cinebuzz",
    href: "https://cinebuzzz.netlify.app/",
    details: "Our project, CineBuzz, addresses these issues by providing a modern, user-friendly platform where users can easily browse movies, check showtimes, and book tickets online.",
  }, {
    id: 3,
    // the entertainment app
    src:"/TheEntertainmentApp.png",
    l: "https://github.com/Piyush0924/The-Entertainment-App",
    href: "https://mirajshow.netlify.app/",
  
    details: "The Entertainment App is designed for movie and TV lovers to easily find and save their favorite content. **Why is it useful?** It helps users quickly discover new shows and movies, streamlining their search for great entertainment. **How is it useful?** With an easy-to-use interface, it allows users to bookmark their favorites and get personalized recommendations, making their viewing experience smoother and more enjoyable"
  }, 
  // {
  //   id: 4,
  //   src:"/E-commerce",
  //   l: "https://github.com/sumit-nagrikar/cinebuzz.git",
  //   href: "https://cinebuzzz.netlify.app/",
  //   details: "Our project, CineBuzz, addresses these issues by providing a modern, user-friendly platform where users can easily browse movies, check showtimes, and book tickets online.",
  // },
 
];

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  const handleProjectClick = (details) => {
    setProjectDetails(details);
  };

  return (
    <div
      name="Projects"
      className="w-full h-full bg-gradient-to-b from-black via-black to-black-800 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center ">
        <div>
          <p className="text-4xl  font-bold  border-b-4 border-gray-500 p-2 inline my-8">
            Projects
          </p>
          <p className="py-6">Here are some of my major projects</p>
        </div>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
          {projectData.map(({ id, src, href, details,l }) => (
            <div
              key={id}
              className="shadow-md hover:scale-125 duration-500 py-2 rounded-lg border-black "
            >
              {projectDetails === details ? (
                <div>
                  <p>{details}<br></br>
                 <a href={l}> Read more..</a></p>
                  <button onClick={() => setProjectDetails(null)}>Close</button>
                </div>
              ) : (
                <div>
                  <img src={src} alt="" className="w-60 mx-auto" />
                  <p className="flex items-center justify-center ">
                  <button className=" mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                      <a
                        href={href}
                        className=" justify-between items-center w-full text-white space-x-2"
                      >
                        View
                      </a>
                    </button>
                    <button
                      className="mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center "
                      onClick={() => handleProjectClick(details)}
                    >
                      Details
                    </button>
                
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;