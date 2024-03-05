import React from "react";
import TODO1 from "../assets/portfolio/TODO1.png";
import Bookstore from "../assets/portfolio/Bookstore.png";
import Genius from "../assets/portfolio/Genius.png";
import Nftland from "../assets/portfolio/Nftland.png";
import Ebike from "../assets/portfolio/Ebike.png";
import CurrencyCon from "../assets/portfolio/CurrencyCon.png";
import AiImage from "../assets/portfolio/AiImage.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: AiImage,
      demo: "https://ai-image-generator-alpha-eight.vercel.app/",
      code: "https://github.com/Amankumar977/Ai-image-generator",
    },
    {
      id: 2,
      src: TODO1,
      demo: "https://todoapplicationam.netlify.app/",
      code: "https://github.com/Amankumar977/5Websites/tree/main/ToDO",
    },
    {
      id: 3,
      src: Bookstore,
      demo: "https://book-management-front.vercel.app/",
      code: "https://github.com/Amankumar977/Full-Stack/tree/main/BookStore",
    },
    {
      id: 4,
      src: Genius,
      demo: "https://geniusclone15.netlify.app/",
      code: "https://github.com/Amankumar977/Geniusclone",
    },
    {
      id: 5,
      src: CurrencyCon,
      demo: "https://currencyconvetorin.netlify.app/",
      code: "https://github.com/Amankumar977/currencyCon",
    },
    {
      id: 6,
      src: Ebike,
      demo: "https://ebike45.netlify.app/",
      code: "https://github.com/Amankumar977/5Websites/tree/main/Bike",
    },
    {
      id: 7,
      src: Genius,
      demo: "https://geniusclone15.netlify.app/",
      code: "https://github.com/Amankumar977/Geniusclone",
    },
    {
      id: 8,
      src: Nftland,
      demo: "https://nftlandcrypto.netlify.app/",
      code: "https://github.com/Amankumar977/5Websites/tree/main/Nftland",
    },
    {
      id: 9,
      src: Ebike,
      demo: "https://ebike45.netlify.app/",
      code: "https://github.com/Amankumar977/5Websites/tree/main/Bike",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-[100%] ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl md:text-5xl  font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
