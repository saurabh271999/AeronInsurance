// components/BestServices.tsx
"use client";

import React from "react";
import { FaHeadset, FaPencilAlt, FaMoneyCheckAlt } from "react-icons/fa";

const BestServices = () => {
  const services = [
    {
      icon: <FaHeadset size={30} className="text-gray-700" />,
      title: "24x7 Support",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      borderColor: "border-gray-200",
    },
    {
      icon: <FaPencilAlt size={30} className="text-blue-500" />,
      title: "Easy Claim System",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      borderColor: "border-blue-500",
    },
    {
      icon: <FaMoneyCheckAlt size={30} className="text-gray-700" />,
      title: "Easy Installments",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      borderColor: "border-gray-200",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Best <span className="text-orange-500">Services</span>
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col items-center text-center border-b-2 ${service.borderColor} pb-4`}>
            <div className="mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{service.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestServices;
