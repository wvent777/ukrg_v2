import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { UkLogo } from "../assets/logos/UkLogo";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <UkLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                Ukpasia
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2 ">
            <a
              className="navbar-link hover:text-customPrimary"
              href="buy"
              aria-label="Buy"
            >
              Buy
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="rent"
              aria-label="Rent"
            >
              Rent
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="sell"
              aria-label="Sell"
            >
              Sell
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="#about"
              aria-label="About"
            >
              About Us
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="#agents"
              aria-label="Agents"
            >
              Agents
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="#feedback"
              aria-label="Feedback"
            >
              Feedback
            </a>
            <a
              className="navbar-link hover:text-customPrimary"
              href="#FAQ"
              aria-label="FAQ"
            >
              FAQ
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customSecondary  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="https://ukpasia.realtymx.com/admin"
              target="_blank"
              aria-label="Agent Login"
            >
              Agent Portal
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              <a
                className="navbar-link hover:text-customSecondary"
                href="buy"
                onClick={() => setIsOpen(false)}
                aria-label="Buy"
              >
                Buy
              </a>
              <a
                className="navbar-link hover:text-customSecondary"
                href="rent"
                onClick={() => setIsOpen(false)}
                aria-label="Rent"
              >
                Rent
              </a>
              <a
                className="navbar-link hover:text-customSecondary"
                href="sell"
                onClick={() => setIsOpen(false)}
                aria-label="Sell"
              >
                Sell
              </a>
              <a
                className="navbar-link hover:text-customSecondary"
                href="#about"
                onClick={() => setIsOpen(false)}
                aria-label="About"
              >
                About
              </a>
              <a
                className="navbar-link hover:text-customSecondary"
                href="#FAQ"
                onClick={() => setIsOpen(false)}
                aria-label="FAQ"
              >
                FAQ
              </a>
              <a
                className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="#"
                target="_blank"
              >
                Agent Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
