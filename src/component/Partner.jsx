import React, { useState } from 'react';
import { Heart, Car, Plane, ShoppingBag, Home, Flame } from 'lucide-react';

const InsurancePartner = () => {
  const [selectedCategory, setSelectedCategory] = useState('Health Insurance');

  const categories = [
    { id: 'health', name: 'Health Insurance', icon: Heart, color: 'bg-blue-100 text-blue-600' },
    { id: 'motor', name: 'Motor Insurance', icon: Car, color: 'bg-orange-100 text-orange-600' },
    { id: 'travel', name: 'Travel Insurance', icon: Plane, color: 'bg-green-100 text-green-600' },
    { id: 'shop', name: 'Shop Insurance', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600' },
    { id: 'home', name: 'Home Insurance', icon: Home, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'fire', name: 'Fire Insurance', icon: Flame, color: 'bg-red-100 text-red-600' }
  ];

  const insuranceCompanies = [
    { name: 'Oriental Insurance', bg: 'bg-blue-50' },
    { name: 'Universal Sompo', bg: 'bg-green-50' },
    { name: 'Insurance Company', bg: 'bg-purple-50' },
    { name: 'Tata AIG', bg: 'bg-blue-100' },
    { name: 'SBI General', bg: 'bg-red-50' },
    { name: 'Royal Sundaram', bg: 'bg-orange-50' },
    { name: 'Reliance General', bg: 'bg-blue-200' },
    { name: 'Insurance Partner', bg: 'bg-gray-100' },
    { name: 'Max Bupa', bg: 'bg-teal-50' },
    { name: 'IFFCO Tokio', bg: 'bg-green-100' },
    { name: 'ICICI Lombard', bg: 'bg-orange-100' },
    { name: 'Reliance General', bg: 'bg-blue-300' },
    { name: 'SBI General', bg: 'bg-red-100' },
    { name: 'HDFC ERGO', bg: 'bg-red-200' },
    { name: 'Universal Sompo', bg: 'bg-green-200' }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-orange-500">Insurance</span> <span className="text-black">Partner</span>
          </h1>
        </div>

        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-[30%]">
            <div className="bg-white rounded-xl h-[400px] shadow-sm border-2 border-gray-300 p-4 overflow-y-auto">
              <div className="space-y-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const isSelected = selectedCategory === category.name;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                        isSelected ? 'bg-blue-50 border-2 border-blue-200' : 'border-2 border-transparent'
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-[70%] h-[400px]">
            <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Companies under: {selectedCategory}</h2>

              <div className="grid grid-cols-3 gap-3">
                {insuranceCompanies.map((company, index) => (
                  <div
                    key={index}
                    className={`${company.bg} w-[200px] h-[40px] rounded-lg border border-gray-200 p-6 flex items-center justify-center hover:shadow-md transition duration-200 cursor-pointer`}
                  >
                    <div className="text-center">
                      {/* Placeholder Logo Box */}
                        <span className="text-gray-700 font-bold text-base">
                          {company.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{company.name}</span>
                    </div>
                 
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePartner;
