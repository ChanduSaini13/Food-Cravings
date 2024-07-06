import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">

            Experience the vibrant flavors of our vegetarian cuisine! Our menu is packed with fresh, locally-sourced ingredients, offering delicious and nutritious dishes for every palate. Enjoy hearty mains, vibrant salads, and indulgent desserts that celebrate the best of plant-based eating. Treat yourself to meals that are both healthy and flavorful!
            </p>
            <Link to={"/explore"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
