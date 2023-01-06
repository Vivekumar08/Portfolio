import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../Content";
import { Link } from "react-router-dom";
import path from "../../assets/image/image.jpeg";

function Home() {
  return (
    <div>
      <Helmet>
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="flex items-center h-fit align-middle mx-12 justify-around">
        <div className="flex justify-center mx-5  text-justify">
          <div className="justify-items-center  text-justify ">
            <div className="intro  text-justify">
              <h2 className="mb-1 text-4xl">{introdata.title}</h2>
              <h1 className=" mb-2 font-marcellus text-4xl">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                    delay: 200,
                  }}
                />
              </h1>
              <p className="mb-2 font-Chivo mt-4 pt-4  w-auto">
                Effective team player with excellent analytical skills, and
                training potential. Problem-solving and communication skills.
                Work Experience with Python, MERN and MATLAB. Familiar with
                statistical concepts such as probability and hypothesis testing
                and a good hand with a probability distribution and numbers,
                Linear Algebra, and Complex Analysis.
              </p>
              <div className="flex justify-start gap-40 pb-5 mt-2 pt-4  font-marcellus ">
                <Link
                  to="/portfolio"
                  className="port_btn   p-2 px-4 rounded-md"
                >
                  <div id="button_p" className=" ">
                    My Portfolio
                  </div>
                </Link>
                <Link to="/contact" className="p-2  px-4 rounded-md">
                  <div id="button_h" className="">
                    Contact Me
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={path}
          style={{
            filter: "drop-shadow(21px 11px 8px #004C4C)",
          }}
          alt="founder"
          className="rounded-xl   md:h-full md:w-[840px] ml-5"
        />
      </div>
      <div className="blob"></div>
    </div>
  );
}

export default Home;
