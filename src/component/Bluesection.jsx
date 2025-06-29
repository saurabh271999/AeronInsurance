import React from 'react';
import { FileText } from 'lucide-react'; // Using lucide-react for document icon, feel free to replace with your own image/icon

const ClaimSection = () => {
  return (
    <section className="bg-blue-600 text-white py-8 px-4">
      <div className="max-w-7xl h-[150px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="p-3  bg-blue-700 rounded-lg">
            <FileText size={32} className="text-white" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm">It’s Time to Claim Now</p>
            <h2 className="text-2xl font-bold">From Quote To Coverage</h2>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-black px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Track Your Claim
        </button>
      </div>
    </section>
  );
};

export default ClaimSection;
