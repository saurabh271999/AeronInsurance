import React from "react";
import image1 from "../assets/images/image1.png";

const HowWeWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Fill Your Details",
      description:
        "Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.",
      icon: "form",
      img: image1,
    },
    {
      id: 2,
      title: "Select a Plan",
      description:
        "From numerous available quotes, choose the one that best suits your requirements and budget.",
      icon: "document",
      img: image1,
    },
    {
      id: 3,
      title: "Make Payment and Sit Back",
      description: "Pay online and get your policy right away in your inbox.",
      icon: "payment",
      img: image1,
    },
  ];

  const FormIcon = () => (
    <div className="w-12 h-16 max-[1000]:flex-col justify-center items-center bg-white border-2 border-gray-300 rounded-sm relative mx-auto">
      <div className="absolute top-2 left-1 right-1 space-y-1">
        <div className="h-0.5 bg-gray-400 rounded"></div>
        <div className="h-0.5 bg-gray-400 rounded"></div>
        <div className="h-0.5 bg-gray-400 rounded"></div>
        <div className="h-0.5 bg-gray-400 rounded w-3/4"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
    </div>
  );

  const DocumentIcon = () => (
    <div className="relative">
      <div className="w-10 h-16 bg-white border-2 border-blue-300 rounded-sm relative">
        <div className="absolute top-1 left-1 right-1">
          <div className="h-1 bg-blue-400 rounded mb-1"></div>
          <div className="space-y-0.5">
            <div className="h-0.5 bg-gray-400 rounded"></div>
            <div className="h-0.5 bg-gray-400 rounded"></div>
            <div className="h-0.5 bg-gray-400 rounded w-2/3"></div>
          </div>
        </div>
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5"></div>
        </div>
      </div>
      <div className="absolute top-1 left-2 w-12 h-16 bg-gray-100 border border-gray-300 rounded-sm -z-10"></div>
    </div>
  );

  const PaymentIcon = () => (
    <div className="relative w-10 h-12 bg-white border-2 border-gray-300 rounded mx-auto">
      <div className="absolute top-1 left-1 right-1 h-3 bg-blue-100 rounded-sm border border-blue-200"></div>
      <div className="absolute bottom-1 left-1 right-1 space-y-0.5">
        <div className="flex space-x-0.5">
          <div className="flex-1 h-1 bg-gray-300 rounded-sm"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-sm"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex space-x-0.5">
          <div className="flex-1 h-1 bg-gray-300 rounded-sm"></div>
          <div className="flex-1 h-1 bg-orange-400 rounded-sm"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 rounded-full"></div>
      <div className="absolute -top-1 -right-1 w-2 h-3 bg-orange-400 rounded-full"></div>
    </div>
  );

  const renderIcon = (type) => {
    if (type === "form") return <FormIcon />;
    if (type === "document") return <DocumentIcon />;
    if (type === "payment") return <PaymentIcon />;
    return null;
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            How We <span className="text-orange-500">Work?</span>
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid  md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center group">
              <div
                className={`${step.color} w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {renderIcon(step.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="mt-15 grid p-4 sm:p-6 md:p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white flex border-transparent shadow-gray-400  flex-col justify-center items-center p-4 sm:p-5  h-[100px] rounded-lg shadow hover:border-orange-500 transition"
            >
              <div className="flex  justify-center  items-center flex-col w-full">
                <p className="text-sm flex items-center gap-2 text-gray-700 leading-relaxed mb-4">
                  <img
                    className="w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] rounded-full object-cover"
                    src={steps[0].img}
                    alt=""
                  />
                  <span>Lorem Ipsum is simply dummy text</span>
                </p>
                <button className="w-full h-[30px] bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200">
                  999 / Month
                </button>
              </div>
            </div>
          ))}
        </div>
          
       
      </div>
    </div>
  );
};

export default HowWeWorks;
