"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const insuranceOptions = [
  { title: "Family Floater Health", icon: "👨‍👩‍👧‍👦🛡️", active: true },
  { title: "Critical Illness Cover", icon: "🛏️" },
  { title: "Personal Accident Policy", icon: "🚗💥" },
  { title: "Car Insurance", icon: "🚗" },
  { title: "2 Wheeler Insurance", icon: "🏍️" },
  { title: "Pay As you Drive", icon: "🚗☔" },
  { title: "Third Party Insurance", icon: "🚙🛡️" },
  { title: "Commercial Vehicle Insurance", icon: "🚛🛡️" },
  { title: "Home Insurance", icon: "🏡🛡️" },
  { title: "Home Loan", icon: "🏡📜" },
];

export default function InsuranceGrid() {
  return (
    <section className=" mt-15 bg-gradient-to-b flex flex-col justify-center items-center p-5 from-white to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Click to buy an <span className="text-orange-500">Insurance</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-15 max-w-6xl mx-auto">
        {insuranceOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between p-4 rounded-xl shadow-sm border ${
              option.active
                ? "border-orange-500 bg-orange-50"
                : "border-gray-100 bg-white"
            } transition hover:shadow-md cursor-pointer`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{option.icon}</div>

            {/* Title */}
            <h3 className="text-center text-sm font-semibold">{option.title}</h3>

            {/* Arrow Button */}
            <div className="self-end mt-4">
              <div className="bg-gray-100 p-2 rounded-full">
                <FaArrowRight size={14} />
              </div>
            </div>
            
          </div>
          
        ))}
        
      </div>
      <button className="bg-orange-600 w-[120px] h-[50px] mt-10 text-white rounded-full font-semibold hover:bg-orange-800 transition">
  View All
</button>
    </section>
  );
}
