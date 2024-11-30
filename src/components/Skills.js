import React from "react";

const Skills = () => {
  const skill = [
    { id: 1, src: "/html.png", title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: "/css.jpg", title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: "/bootstrap.png", title: "BOOTSTRAP", style: "shadow-purple-500" },
    { id: 4, src: "/tailwind.png", title: "TAILWIND", style: "shadow-sky-400" },
    { id: 5, src: "/js.png", title: "JAVASCRIPT", style: "shadow-yellow-500" },
    { id: 6, src: "/jquery.png", title: "JQUERY", style: "shadow-blue-900" },
    { id: 7, src: "/react.png", title: "REACT", style: "shadow-blue-600" },
    { id: 8, src: "/redux.png", title: "REDUX", style: "shadow-purple-500" },
    { id: 9, src: "/github.png", title: "GITHUB", style: "shadow-gray-400" },
    { id: 10, src: "/mongodb.png", title: "MONGODB", style: "shadow-green-400" },
    { id: 11, src: "/express.png", title: "EXPRESS", style: "shadow-gray-600" },
    { id: 12, src: "/node.png", title: "NODE", style: "shadow-green-600" },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen bg-gradient-to-b from-black via-black bg-[#7c9da6]"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="mt-40"> {/* Adjust title position */}
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 px-8 py-12 mt-10 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center w-40 h-40 shadow-md hover:scale-110 duration-500 rounded-sm ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 h-20"
                style={{ backgroundColor: "black" }}
              />
              <p className="mt-4 text-center text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
