import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <Helmet>
        <title> {"Contact Me"}</title>
      </Helmet>
      <motion.div
        // variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="flex md:flex-row w-full md:w-auto md:mx-12 flex-col-reverse gap-5 md:gap-0 items-center md:my-12 align-middle "
      >
        Contact
      </motion.div>
    </motion.div>
  );
};

export default Contact;
