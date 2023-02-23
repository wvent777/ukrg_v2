import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { UkLogo } from "../assets/logos/UkLogo";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <UkLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Ukpasia Realty Group
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                750 Lexington Avenue 9th Fl • New York, NY 10022 • (914)
                984-8263 • Contact@UkpasiaRealty.com
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customPrimary rounded-xl"
                  href="https://www.facebook.com/UkpasiaRealty"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customPrimary rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customPrimary rounded-xl"
                  href="https://www.instagram.com/ukpasiarealty/?hl=en"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Services</h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Homes For Sale
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Homes For Rent
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      List With Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Our Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Refer a Friend
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      Fair Housing Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-customPrimary"
                      href="#"
                      aria-label=""
                    >
                      DMCA Notice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; Copyright © 2023 Ukpasia Realty Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
