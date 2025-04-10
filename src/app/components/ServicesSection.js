'use client';
import React from 'react';
import { Rocket, Code, Smartphone, Settings, Bot, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: <Rocket size={30} className="text-purple-400" />,
    title: 'MVP Development',
    desc: 'We specialize in building Minimum Viable Products that help you validate your business idea quickly and efficiently.',
  },
  {
    icon: <Code size={30} className="text-yellow-400" />,
    title: 'Web Development',
    desc: 'Our team creates robust and scalable web applications tailored to your business needs.',
  },
  {
    icon: <Smartphone size={30} className="text-red-400" />,
    title: 'Mobile Application Development',
    desc: 'We develop intuitive and engaging mobile apps for both iOS and Android platforms.',
  },
  {
    icon: <Settings size={30} className="text-purple-400" />,
    title: 'Internal Tools',
    desc: 'Enhance your business operations with custom-built internal tools designed for efficiency and productivity.',
  },
  {
    icon: <Zap size={30} className="text-yellow-400" />,
    title: 'Automation',
    desc: 'Streamline your processes with AI-powered automations that save time and reduce errors.',
  },
  {
    icon: <Bot size={30} className="text-red-400" />,
    title: 'Custom AI Chatbots',
    desc: 'Improve customer engagement with intelligent chatbots that provide instant support and personalized experiences.',
  },
];

const ServicesSection = () => {
  const handleClick = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#1a103d] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          We Are here to Help You Grow Your Business
        </h2>
        <p className='mb-12'>
          M2H Technologies is a global software development company that aims to provide clients all over the world with secure, scalable, and efficient solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#2a1c4e] p-6 rounded-xl text-left text-white hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button
            onClick={handleClick}
            className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
