import React from "react";
import { Helmet } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { dataportfolio } from "../Content";

const Portfolio = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <motion.div initial="initial" animate="animate">
      <Helmet>
        <title> {"Portfolio"}</title>
      </Helmet>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="flex  justify-center md:w-auto md:mx-12  gap-5 md:gap-0 md:my-12  "
      >
        <div className="flex mx-5 my-10  flex-col">
          <h1 className="text-4xl  font-bold ">
            Portfolio
            <hr className="h-px my-8 w-[350px] bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
          <div className="grid md:grid-cols-3 gap-5 ml-auto mr-auto">
            {dataportfolio.map((name, index) => {
              return (
                <div key={index} className="flex mx-5 h-[280px] flex-col">
                  <div className="relative overflow-hidden rounded-md bg-no-repeat bg-cover max-w-xs">
                    <img
                      //   src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                      src={name.img}
                      className="max-w-xs hover:scale-110  transition duration-300 ease-in-out"
                      alt={name.desctiption}
                    />
                  </div>
                  <div className="content">
                    <p>{name.title}</p>
                    <a href={name.link}>view project</a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-20">
            <h1 className="flex mx-20  text-red-500 text-lg  items-center">
              <FontAwesomeIcon
                className="w-5 h-5 mr-2  sm:mr-6"
                icon={faCircleExclamation}
              />
              The function of this page is not in use!!!
            </h1>
            <h1 className="flex mx-20 text-red-500 text-lg  items-center">
              Try Again Later
            </h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
