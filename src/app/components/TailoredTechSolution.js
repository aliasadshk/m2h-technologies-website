/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const TailoredTechSolution = () => {
  const features = [
    {
      iconColor: "bg-purple-600",
      title: "Custom Tailored:",
      description: "Every solution is crafted to fit your unique business requirements.",
    },
    {
      iconColor: "bg-yellow-500",
      title: "Technology Driven:",
      description: "Leveraging the latest in AI and machine learning to keep you ahead.",
    },
    {
      iconColor: "bg-red-400",
      title: "Client-Centric:",
      description: "Your vision and goals guide our development process.",
    }
  ];

  return (
    <div className="bg-[#EEEDF2] text-[#1B112B] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Lottie Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <DotLottieReact
            src="https://lottie.host/4d55f864-faa7-4321-8d26-e8466497cb1e/tjlqjtvWhd.lottie"
            autoplay
            loop
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tailored Tech Solutions</h2>
          <p className="text-lg mb-6 font-size-[1.125rem] line-height-[1.78]">
            At M2H Technologies, we harness cutting-edge technology to develop web and mobile 
            applications that drive business success. With a focus on custom software development, 
            SaaS services, and AI-powered automations, we deliver solutions that not only meet — but 
            <span className="font-bold"> exceed</span> our clients' expectations.
          </p>

          <div className="space-y-6 mt-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`${feature.iconColor} rounded-full p-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold Eudoxussans, sans-serif">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TailoredTechSolution;
