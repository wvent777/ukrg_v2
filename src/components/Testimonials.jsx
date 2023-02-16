import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Why People Choose Us
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "It has been a pleasure working with Ede during our NYC apartment
              hunt. Ede did a great job keeping us informed, showing us quality
              apartments, and advocating for us in the application process. I
              really appreciate all the help he provided in navigating the
              confusing process that can be the NYC summer rental market. He
              truly went above and beyond in his service. I would highly
              recommend going to Ede if you are looking for a caring agent who
              will do the best for his clients."
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial1} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium pt-2">
                  Arushi G.
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "Nicholas was very helpful in finding us an apartment. It was an
              easy going process with no stress involved which is hard to find
              in NYC. He was their to answer any questions we had along the way.
              I have nothing but good things to say about my experience. Can not
              wait to move into my new building!"
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial2} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium pt-2">
                  Olivia D.
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "Nicholas, a terrific realtor, was a pleasure to work with. He was
              not only professional and understanding, but he also answered all
              of my inquiries without hesitation. Given how soon I needed an
              apartment, he accommodated my last-minute requirements swiftly and
              was always accommodating. Nicholas was also very easy to work with
              because he was pleasant, clear, and transparent. I would utilize
              his services again and would suggest him to anyone! Thank you so
              much, Nicholas, for all of your assistance."
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial3} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium pt-2">
                  Chris C.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
