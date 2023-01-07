import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Buttons from "../../Components/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
        <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
              <h1 class="text-4xl font-bold">Get in touch</h1>
              <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div class="space-y-4">
                <p class="flex items-center">
                  <FontAwesomeIcon
                    className="w-5 h-5 mr-2 sm:mr-6"
                    icon={faLocation}
                  />
                  <span>
                    1452, 2nd Floor, Punjabi Maholla, Delhi <br /> New Delhi,
                    India
                  </span>
                </p>
                <p class="flex items-center">
                  <FontAwesomeIcon
                    className="w-5 h-5 mr-2 sm:mr-6"
                    icon={faPhone}
                  />
                  <span>+91-7088980706</span>
                </p>
                <p class="flex items-center">
                  <FontAwesomeIcon
                    className="w-5 h-5 mr-2 sm:mr-6"
                    icon={faEnvelope}
                  />
                  <span>vivekumar2003bsr@gmail.com</span>
                </p>
              </div>
            </div>
            <form
              novalidate=""
              class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            >
              <label class="block">
                <span class="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="Vivek Kumar"
                  class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800"
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </label>
              <label class="block">
                <span class="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="Vivek@gmail.com"
                  class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800"
                />
              </label>
              <label class="block">
                <span class="mb-1">Message</span>
                <textarea
                  rows="3"
                  class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800"
                  spellcheck="false"
                  data-ms-editor="true"
                ></textarea>
              </label>
              <Buttons type={"button"} title={"Submit"} />
            </form>
          </div>
        </section>
      </motion.div>
      <h1 className="flex mx-20 text-red-500 text-lg  items-center">
        <FontAwesomeIcon
          className="w-5 h-5 mr-2  sm:mr-6"
          icon={faCircleExclamation}
        />
        The function of this page is not in use!!!
      </h1>
    </motion.div>
  );
};

export default Contact;
