import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Explore = () => {
  return (
    <>
    <section className="notFound">
        <div className="container">
          <img src="/sorry.png" alt="Sorry" />
          <h1>We will get back to you Soon!</h1>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Explore
