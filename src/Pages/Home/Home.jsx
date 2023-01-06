import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../Content";
import { Link } from "react-router-dom";
import path from "../../assets/image/image.jpeg";
import { motion } from "framer-motion";

function Home() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div initial="initial" animate="animate">
      <Helmet>
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="flex md:flex-row w-full md:w-auto md:mx-12 flex-col-reverse gap-5 md:gap-0 items-center md:my-12 align-middle "
      >
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
              <p className="mb-2 font-Chivo mt-4 pt-4 p-2 w-[480px]">
                Effective team player with excellent analytical skills, and
                training potential. Problem-solving and communication skills.
                Work Experience with Python, MERN and MATLAB. Familiar with
                statistical concepts such as probability and hypothesis testing
                and a good hand with a probability distribution and numbers,
                Linear Algebra, and Complex Analysis.
              </p>
              <div className="flex justify-start gap-40 w-full pb-5 mt-2 pt-4  font-marcellus ">
                <Link to="/portfolio" className="btn-neon rounded-md  p-2 px-6 ">
                  My Portfolio
                  <svg height="50" width="180">
                    <polyline points="0,0 180,0 180,50 0,50 0,00"></polyline>
                  </svg>
                </Link>
                <Link to="/contact" className=" p-2 btn-neon  px-6 rounded-md">
                  Contact Me
                  <svg height="50" width="180">
                    <polyline points="0,0 180,0 180,50 0,50 0,00"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ rotate: [0, 360], scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            src={path}
            style={{
              filter: "drop-shadow(21px 11px 8px #004C4C)",
            }}
            className="rounded-2xl p-2 md:p-0 w-full h-full md:h-auto md:w-full "
            alt="founder"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
