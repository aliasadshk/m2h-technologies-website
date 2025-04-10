"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#151321] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Left Section - Logo and Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/logs.png"
                alt="M2H Logo"
                width={50}
                height={50}
                className="rounded-full mr-3"
              />
              <span className="text-2xl font-bold text-lime-400">
                M2H Technologies
              </span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              Development services for startups and
              <br />
              small, mid-sized companies.
            </p>

            <div className="flex items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>hello@m2htechnologies.com</span>
            </div>
          </div>

          {/* Navigation Section 1 */}
          <div className="mb-8 md:mb-0">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-purple-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#consultation"
                    className="hover:text-purple-400 transition"
                  >
                    Book a Call
                  </a>
                </li>
                {/* <li><Link href="/terms" className="hover:text-purple-400 transition">Terms of Service</Link></li> */}
                {/* <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li> */}
              </ul>
            </nav>
          </div>

          {/* Navigation Section 2 */}
          <div className="mb-8 md:mb-0">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#services"
                    className="hover:text-purple-400 transition"
                  >
                    Web App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-purple-400 transition"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-purple-400 transition"
                  >
                    MVP Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-purple-400 transition"
                  >
                    Chatbot Development
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Navigation Section 3 */}
          <div>
            <nav>
              <ul className="space-y-4">
                {/* <li><Link href="/blog" className="hover:text-purple-400 transition">Blog</Link></li> */}
                <li>
                  <a href="#about" className="hover:text-purple-400 transition">
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-purple-400 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#consultation"
                    className="hover:text-purple-400 transition"
                  >
                    Contact
                  </a>
                </li>
                {/* <li><Link href="/faqs" className="hover:text-purple-400 transition">FAQs</Link></li> */}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </footer>
  );
};

export default Footer;
