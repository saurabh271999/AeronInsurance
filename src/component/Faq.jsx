import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    question: "Which cancer types is covered?",
    answer: "Currently, we cover a wide range of cancer types. Please check the policy document for the full list.",
  },
  {
    question: "Are there any age limit?",
    answer:
      "Yes, there is an age limit. The age span is between 18-50 for this product. This age group is important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.",
  },
  {
    question: "How %25 cash back payment works?",
    answer:
      "You will receive 25% cashback on the total premium paid at the end of the policy term if no claim was made.",
  },
  {
    question: "How I use 3 year freemium option?",
    answer:
      "With the 3-year freemium option, you pay for 2 years and get the 3rd year free.",
  },
  {
    question: "What is the process to get lump sum payment when risk is realized?",
    answer:
      "You can raise a claim online, submit the required documents, and after verification, the lump sum payment is processed within 7 working days.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-md bg-white p-4 shadow transition-all ${
                openIndex === index ? 'shadow-lg' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <span className="text-xl">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
