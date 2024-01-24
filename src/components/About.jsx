import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-4">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-8xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I'm a MERN Stack Developer with 1 year of practical experience.
          My journey started with a BCOM Hons degree, but exploring ECommerce
          unveiled the internet's potential. Captivated by technology, I pivoted
          into web development. Now, as a committed full-stack developer, I
          proficiently use the MERN stack to build dynamic web applications.
        </p>
        <br />
        <p className="text-xl">
          My path underscores a passion for continual learning and a dedication
          to delivering inventive solutions. This progression has refined my
          skills, shaping me into a dynamic force in the ever-evolving field of
          web development.
        </p>
      </div>
    </div>
  );
};

export default About;
