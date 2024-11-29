import React from "react";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: "/html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "/css.jpg",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "/bootstrap.png",
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: "/tailwind.png",
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: "/js.png",
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: "/jquery.png",
      title: "JQUERY",
      style: "shadow-blue-900",
    },
    {
      id: 7,
      src: "/react.png",
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: "/redux.png",
      title: "REDUX",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: "/github.png",
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: "/mongodb.png",
      title: "MONGODB",
      style: "shadow-green-400"
    },
    {
      id: 11,
      src: "/express.png",
      title: "EXPRESS",
      style: "shadow-gray-600"
    },
    {
      id: 12,
      src: "/node.png",
      title: "NODE",
      style: "shadow-green-600"
    },



  ];

  return (
    <div
      name="Skills"
      className="w-full h-full bg-gradient-to-b from-black via-black bg-[#7c9da6] "
    >
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl mt-16 font-bold border-b-4 border-gray-500 p-2 inline my-4">
            Skills
          </p>
        </div>

        <div className="w-full h-[100vh] grid grid-cols-2 sm:grid-cols-3 gap-12 text-center px-4 py-8 sm:px-8">
          {skill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "flex items-center justify-center w-8 h-8 shadow-md hover:scale-125 duration-500 py-2 rounded-sm border-black" +
                " " +
                style
              }
            >
              <img
                src={src}
                alt={title}
                className="w-35 mx-auto"
                style={{ backgroundColor: "black" }}
              />
              <p className="mt-8">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
