import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mubashir Ali",
    role: "Founder & CEO",
    imageSrc: "/mubashir.jpg",
    linkedin: "https://linkedin.com/in/mubashirali",
  },
  {
    name: "M. Hamza Mehboob",
    role: "Co-Founder & CTO",
    imageSrc: "/pic1.jpg",
    linkedin: "https://linkedin.com/in/hamz",
  },
  {
    name: "Abdullah Rafiq",
    role: "Head of Engineering",
    imageSrc: "/pic2.jpg",
    linkedin: "https://linkedin.com/in/abdullahrafiq",
  },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#181025] text-white px-6 py-16 md:px-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="bg-lime-300 text-black px-4 py-2 rounded-full text-sm font-semibold">
          ABOUT US
        </span>
        <h2 className="text-4xl font-extrabold mt-4 mb-4 text-lime-300">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300">
          Allow us to introduce our exceptionally creative and talented team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto  rounded">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="rounded-2xl border-4 border-lime-300 overflow-hidden w-[250px] h-[250px] mx-auto mb-4 shadow-lg ">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-lime-300">{member.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-4 rounded-full inline-flex items-center hover:bg-lime-300   transition"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.026-3.065-1.868-3.065-1.868 0-2.154 1.459-2.154 2.967v5.702h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.566 2.837-1.566 3.032 0 3.593 1.994 3.593 4.59v5.609z" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
