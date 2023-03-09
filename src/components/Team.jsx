import React from "react";
import { motion } from "framer-motion";
import stock1 from "../assets/images/stock1.jpg";
import stock2 from "../assets/images/stock2.jpg";
import stock3 from "../assets/images/stock3.jpg";
import stock4 from "../assets/images/stock4.jpg";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Team = ({ info }) => {
  return (
    <section
      className="w-full bg-white mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="team"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-16 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                {info.aboutTitle}
              </h2>
            </div>
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 ">
              <h1 className="section-title text-center">
                The Team Behind Ukpasia
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
