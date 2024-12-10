/* eslint-disable no-unused-vars */
import React from "react";
import { assets, testimonialsData } from "../assets/assets";

function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
       Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12">What Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
      {testimonialsData.map((testimonial, index)=>(
        <div key={index} className="p-12 bg-white/20 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all">
        <div className="flex flex-col items-center">
          <img src={testimonial.image} className="w-14 rounded-full" />
            <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4">{testimonial.role}</p>
            <div className="flex mb-4">
            {Array(testimonial.stars).fill().map((item, index) => (
                <img key={index} src={assets.rating_star} alt=""/>
            ))}
            </div>
            <p className="text-gray-600 text-center text-sm">{testimonial.text}</p>
        </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default Testimonials;
