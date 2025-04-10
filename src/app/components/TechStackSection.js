'use client';

import { motion } from 'framer-motion';

const logos = [
  {
    alt: 'Shopify',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd36a19_Logo%2018.webp'
  },
  {
    alt: 'Mailchimp',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd3689d_Logo%2016.avif'
  },
  {
    alt: 'Slack',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd36a23_Logo%202.webp'
  },
  {
    alt: 'Salesforce',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd3689c_Logo%2023.avif'
  },
  {
    alt: 'Zapier',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd36a15_Logo%209.webp'
  },
  {
    alt: 'Dropbox',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd368a0_Logo%208.avif'
  },
  {
    alt: 'HubSpot',
    src: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/6656f64e414ecbdcbdd36a1a_Logo%2020.webp'
  }
];

const TechStackSection = () => {
  return (
    <section className="bg-[#ECEAF5] py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Logos */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-full p-4 shadow-md w-[70px] h-[70px] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B112B]">
            Still unsure which tech stack is the right one?
          </h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Talk to our experts and find out exactly how our tailored services can address your specific needs.
            Booking a discovery call is just the beginning of our journey to success together.
          </p>
          <button className="bg-[#1B112B] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
            Book a Call Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
