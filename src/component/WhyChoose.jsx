// components/WhyChooseUs.tsx
"use client";

import React from "react";
import { FaUserFriends, FaSearch, FaTags, FaHandsHelping } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserFriends size={30} className="text-blue-500" />,
      title: "Over 9 Million",
      description: "customers trust us & have bought their insurance on Policybazaar",
    },
    {
      icon: <FaSearch size={30} className="text-blue-500" />,
      title: "50+ Insurers",
      description: "partnered with us so that you can compare easily & transparently",
    },
    {
      icon: <FaTags size={30} className="text-pink-500" />,
      title: "Great Price",
      description: "for all kinds of insurance plans available online for all kinds of insurance plans available online",
    },
    {
      icon: <FaHandsHelping size={30} className="text-yellow-500" />,
      title: "Claims",
      description: "support built in with every policy for help, when you need it the most",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Why is <span className="text-orange-500">Demo</span> India’s go-to for insurance?
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="flex items-start bg-white rounded-xl shadow-sm p-5">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
