'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const testimonials = [
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "Mach Nelson",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "David Doe",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "John Nick",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "Sara Smith",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "Alex Johnson",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gray-900">What Our Customers </span>
          <span className="text-orange-500">Are Saying?</span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full">
                <p className="text-gray-700 text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-black text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
