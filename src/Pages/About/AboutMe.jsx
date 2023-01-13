import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { dataabout, skills } from "../Content";
import "./about.css";

const AboutMe = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate">
      <Helmet>
        <title> {"About | Vivek Kumar"}</title>
      </Helmet>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col w-full justify-start md:w-auto md:mx-12  gap-5 md:gap-0 md:my-12  "
      >
        <motion.div
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
          className="flex mx-5 md:w-full w-auto my-10  flex-col"
        >
          <motion.h1
            variants={item}
            className="text-4xl  font-bold font-marcellus "
          >
            About Me
            <hr className="h-px my-8 w-[350px] bg-gray-200 border-0 dark:bg-gray-700" />
          </motion.h1>
        </motion.div>
        <section className="flex w-auto text-justify md:justify-start items-center font-marcellus flex-col mx-6 md:mx-12 gap-5  md:my-12 ">
          {/* <div className="flex w-full text-justify justify-start items-center font-marcellus flex-col md:flex-row mx-6  md:w-auto md:mx-12  gap-5 md:gap-0 md:my-12 "> */}
          {/* <div className="flex  items-center flex-col md:flex-row"> */}
          <div className="flex items-center w-full justify-start my-5 flex-col md:flex-row">
            <h3 className="md:w-1/2 md:py-2 py-5 mx-12 px-5 text-2xl capitalize">
              {dataabout.title}
            </h3>
            <p className="mx-5 md:mx-12 text-sm md:text-lg w-full flex ">
              {dataabout.aboutme}
            </p>
          </div>

          {/* <div className="flex w-full text-justify justify-start items-center font-marcellus flex-col md:flex-row mx-6  md:w-auto md:mx-12  gap-5 md:gap-0 md:my-12 "> */}
          <div className="flex items-center w-full justify-around my-5 flex-col md:flex-row">
            <h3 className="md:w-1/2 md:py-2 py-5  mx-12 px-5 text-2xl capitalize">
              Skills
            </h3>

            <div className="flex flex-col justify-end mx-12 w-full ">
              {skills.map((data, i) => {
                return (
                  <div key={i} className="">
                    <h3 className=" progress-title mb-1 text-base font-medium dark:text-white">
                      {data.name}
                    </h3>
                    <div className="progress w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="progress-bar bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: `${data.value}` }}
                      >
                        <div className="progress-value">{data.level}</div>
                      </div>
                    </div>
                    {/* <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${data.value}` }}
                      >
                        <div className="progress-value">{data.value}</div>
                      </div>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
