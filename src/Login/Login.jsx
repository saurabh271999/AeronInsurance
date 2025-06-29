'use client';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Left Side - Image Section */}
      <div className="flex max-[1000px]:hidden w-1/2 bg-white items-center justify-center">
        <img
          src="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/knowledge-center/images/about-life-insurance/difference-between-life-and-health-insurance.jpg" // apni image ka path lagana
          alt="insurance image"
          className="w-3/4  rounded"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="flex w-full md:w-1/2 bg-blue-600 items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-3/4 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Hello!</h2>
          <p className="mb-6 text-gray-600">Sign Up to Get Started</p>
          
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-blue-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
