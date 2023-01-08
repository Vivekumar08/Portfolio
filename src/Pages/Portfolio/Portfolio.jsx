import React from "react";
import { Helmet } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

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
        className="flex md:flex-row w-full md:w-auto md:mx-12 flex-col-reverse gap-5 md:gap-0 items-center md:my-12 align-middle "
      >
        Portfolio
        <div>
          <h1 className="flex mx-20 text-red-500 text-lg  items-center">
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
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
