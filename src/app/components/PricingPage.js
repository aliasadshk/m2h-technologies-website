/* eslint-disable @next/next/no-img-element */
'use client';

import Head from 'next/head';

export default function Pricing() {
  const plans = [
    {
      title: 'Figma to Frontend',
      price: '$1199',
      description: 'End-to-end responsive web and app design.',

      features: [
        'Pixel perfect conversion',
        'Responsive design for all devices',
        'Cross-browser compatibility',
        'Fully-tested',
      ],
      icon: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/670e576f96de6ca581ee07dc_figma%20to%20frontend.svg',
    },
    {
      title: 'Product Development',
      price: '$2999',
      description: 'Develop apps customized to your business.',
      features: [
        '2 weeks sprint delivery',
        'Frontend and Backend development',
        'UX Design',
        '2 weeks of free support',
      ],
      popular: true,
      icon: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/670a7122a89104f9c3191e88_prod-dev.svg',
    },
    {
      title: 'Long term Partnership',
      price: "Let's chat",
      description: 'Ongoing growth and scaling with a dedicated team.',
      features: [
        'Dedicated development team',
        '2 weeks sprint delivery',
        'UX Design',
        'Ongoing maintenance',
      ],
      icon: 'https://cdn.prod.website-files.com/6656f64e414ecbdcbdd367f7/670a71224ec8d5eeb62160ae_custom.svg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Head>
        <title>Pricing Plans</title>
        <meta name="description" content="Flexible pricing plans that suit your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing plans that suit you</h1>
          <p className="text-gray-600">
            Choose the best plan that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-300 text-black text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className=" p-2 rounded-md">
                  {/* Using provided URLs for icons */}
                  <img src={plan.icon} alt={`${plan.title} icon`} width={32} height={32} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{plan.title}</h2>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-500">Starting from</p>
                <h3 className="text-3xl font-bold text-gray-800">{plan.price}</h3>
              </div>

              <p className="text-gray-600 mb-4">{plan.description}</p>

              <hr className="border-gray-200 my-4" />

              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Includes:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => {
                    const colors = ['bg-purple-600', 'bg-yellow-500', 'bg-red-400'];
                    const color = colors[i % colors.length]; // cycle through colors

                    return (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className={`${color} rounded-full p-1.5`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

              </div>

              <button className="mt-auto px-4 py-2 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600">
                Get started
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
