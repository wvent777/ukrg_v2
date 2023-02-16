import { useState } from "react";
import { motion } from "framer-motion";

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title="Why do I need a real estate agent?"
                content="A real estate salesperson is more than just a “sales person.”
                They act on your behalf as your agent, providing you with advice and guidance and doing a job – helping you buy or sell a home.
                 While it is true they get paid for what they do, so do other professions that provide advice, guidance, and have a service to sell
                 –such as Certified Public Accountants and Attorneys

                The Internet has opened up a world of information that wasn&rsquo;t previously available to homebuyers and seller. 
                The data on listings available for sale is almost current – but not quite. There are times when you need the most 
                current information about what has sold or is for sale, and the only way to get that is with an agent.
                
                If you&rsquo;re selling a home, you gain access to the most buyers by being listed in the Multiple Listing Service. 
                Only a licensed real estate agent who is a member of your local MLS can get you listed there – which then gets you automatically 
                listed on some of the major real estate web sites. If you&rsquo;re buying or selling a home, the MLS is your agent&rsquo;s best tool.
                
                However, the role of an agent has changed in the last couple of years. In the past, agents were the only way home buyers and sellers
                 could access information. Now agents are evolving. Because today&rsquo;s home buyers and sellers are so much better informed than in 
                 the past, expertise and ability are becoming more important.
                
                The real estate agent is becoming more of a “guide” than a “salesperson” — your personal representative in buying or selling a home.."
                defaultOpen
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="What is the difference between a real estate agent and a real estate broker?"
                content="Most states require real estate sales professionals to be licensed by the state, so that they can control education
                 and experience requirements and have a central authority to resolve consumer problems.

                The terminology used to identify real estate professionals varies a little from state to state. Brokers are generally required 
                to have more education and experience than real estate salespersons or agents.
                
                The person you normally deal with is a real estate agent or salesperson. The salesperson is licensed by the state, but must work 
                for a broker. All listings are placed in the broker&rsquo;s name, not the salesperson&rsquo;s.
                
                A broker can deal directly with home buyers and sellers, or can have a staff of salespersons or agents working for him or her."
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title=" I have a family friend who is a Realtor. I like her and she is a help but she gives me one price to sell my home for and I think it is too low. So I called another agent who suggested a price more in line with my expectations. Who do I choose?"
                content="You might want to consult a couple more Realtors on the market value of your home. Most of the estimates should be in the same ballpark.

                It could be that your friend is being more honest with you about the value of your home and the other Realtor gave you a higher number because he already knew you expected it. This is called “Buying a Listing” and is the subject of an article on our web site.
                
                Or it could simply be that your friend is a good friend, but not that great of a real estate agent.
                
                Mixing business and friendships is always risky to the friendship. On the other hand, if your friend is truly competent and was providing wise advice, she may be offended if you ignore the advice and choose another agent."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
