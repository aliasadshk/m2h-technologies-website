'use client'
import { motion } from "framer-motion";

const DesignedForSuccess = () => (
  <section className="px-6 md:px-20 py-20 bg-[#1B112B] text-white">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Designed for Success
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Whether you’re a startup or scaling up, our solutions adapt to your growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Rapid Development", desc: "Get your product to market faster." },
          { title: "Agile Collaboration", desc: "Stay in the loop with transparent workflows." },
          { title: "End-to-End Services", desc: "From design to deployment, we cover it all." }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#2A1D3E] p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-lime-400">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default DesignedForSuccess;
