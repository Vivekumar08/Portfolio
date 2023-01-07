import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Buttons from "../Components/Buttons/Buttons";

const NotFound = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      ref={ref}
      animate={control}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
      className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Buttons path={"/"} title={"Back to homepage"} />
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
