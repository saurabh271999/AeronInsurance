"use client";
import { useState } from "react";

const images = [
     "https://static.investindia.gov.in/s3fs-public/2019-05/Insurance1.jpg",
    "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/knowledge-center/images/retirement/HDFC-Term-Insurance-The-Most-Affordable-Way-to-Protect-Your-Family.png",
  "https://insurance.phonepe.com/static/b9255dbb33d672b33828a697b2a55f45/2a546/basics_of_health_insurance_blog.png",
  "https://insurance.phonepe.com/static/b9255dbb33d672b33828a697b2a55f45/2a546/basics_of_health_insurance_blog.png",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" h-[400px] w-full m-auto px-4 relative group">
      {/* Image */}
      <div
        className="w-full h-full bg-center bg-cover duration-500 rounded-xl"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
      >
        ❮
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
      >
        ❯
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 cursor-pointer text-xl ${
              index === currentIndex ? "text-blue-600" : "text-gray-400"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}
