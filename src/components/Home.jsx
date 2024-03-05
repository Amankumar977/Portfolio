import React from "react";
import second from "../assets/MyPhoto.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via to-gray-800 pt-20 md:pt-0">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
       px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl  md:text-5xl  py-5 font-bold text-white">
            I'm a full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience of building and desgining software. Currently, I
            love to work on web application using technologies like React,
            Tailwind, NodeJS, Express JS, GitHub .
          </p>
          <div>
            <Link to="Portfolio" duration={500} smooth>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                PortFolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={second}
            alt="Aman's Image"
            className="rounded-2xl mx-auto w-2/3  md:w-[50rem] mb-2  md:-ml-0 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
