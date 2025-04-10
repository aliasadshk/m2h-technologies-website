import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Book a Call With Our Founder',
    description:
      'Schedule a consultation with our expert to discuss your project needs and goals. We\'ll help you identify the best solutions to achieve your vision.',
    color: 'bg-purple-300',
  },
  {
    number: '2',
    title: 'Build a Comprehensive Plan',
    description:
      'We’ll create a detailed project plan outlining the steps to take your concept from idea to reality. This includes timelines, milestones, and deliverables.',
    color: 'bg-yellow-300',
  },
  {
    number: '3',
    title: 'Enjoy Stress-Free Development',
    description:
      'Our team handles the development process, keeping you updated with regular progress reports and ensuring your project stays on track.',
    color: 'bg-red-300',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">How does it work?</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative w-[300px] h-[340px] p-6 rounded-[30px] text-black ${step.color} shadow-xl`}
            style={{
              clipPath:
                'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)',
            }}
          >
            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-lg font-bold shadow">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mt-12 mb-4">{step.title}</h3>
            <p className="text-sm text-gray-800 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
