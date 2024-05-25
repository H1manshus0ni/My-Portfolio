import React from "react";

function HeroSection() {
  return (
    <div
      id="hero"
      className="hero-section bg-cover bg-center flex items-center justify-center"
      style={{
        height: "95vh",
      }}
    >
      <div className="container text-left">
        <div className="content">
          <h1 className="title text-4xl md:text-6xl mb-3 md:mb-5 font-semibold dark:text-white">
            Hi, I'm <span className="text-yellow-400 ">HIMANSHU SONI</span>
          </h1>
          <a
            href="#works"
            className="cta-btn inline-block px-8 py-3 border border-transparent text-lg md:text-xl font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 mb-4 mx-4 "
          >
            Explore Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1d0SckZl3gSlRv2QsEqwE_zVa2Gfm3p7O/view?usp=sharing"
            target="_blank"
            className="cta-btn inline-block px-8 py-3 border border-transparent text-lg md:text-xl font-medium rounded-md text-white bg-green-500 hover:bg-green-700 mb-4 mx-4 "
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
