import React from 'react';
import { ArrowRight } from 'lucide-react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const InsuranceServices = () => {
  const services = [
    {
      id: 'family',
      title: 'Family Insurance',
      description: 'Protect your loved ones with affordable family health coverage.',
      img: image1
    },
    {
      id: 'travel',
      title: 'Travel Insurance',
      description: 'Stay worry-free on your trips with our travel insurance plans.',
      img: image2
    },
    {
      id: 'home',
      title: 'Home Insurance',
      description: 'Safeguard your home and belongings from unexpected damages.',
      img: image3
    }
  ];

  const renderIllustration = (service) => {
    if (service.img) {
      return (
        <div className="flex items-center justify-center">
          <img src={service.img} alt={service.title} className="w-[250px] h-[180px] object-contain" />
        </div>
      );
    } else if (service.id === 'travel') {
      return (
         <div className="flex items-center justify-center">
          <img src={service.img} alt={service.title} className="w-[250px] h-[180px] object-contain" />
        </div>
      );
    } else if (service.id === 'home') {
      return (
         <div className="flex items-center justify-center">
          <img src={service.img} alt={service.title} className="w-[250px] h-[180px] object-contain" />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">Insurance</span>{' '}
            <span className="text-gray-900">Services for You</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer group"
            >
              {/* Illustration / Image */}
              <div className={`mb-4 flex items-center justify-center ${service.bgColor ? `${service.bgColor} rounded-full w-24 h-24 mx-auto` : ''}`}>
                {renderIllustration(service)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>

              {/* Arrow Icon */}
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceServices;
