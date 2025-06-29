import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Company Info */}
        <div>
          <h3 className="text-orange-500 text-2xl font-bold mb-3">Demo</h3>
          <p className="text-sm mb-4">
            The company is India's largest insurance aggregator, and has expanded its operations to the United Arab Emirates.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-orange-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Health Insurance */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Health Insurance</h4>
          <ul className="space-y-2 text-sm">
            <li>Family Floater Health Insurance</li>
            <li>Critical Illness cover</li>
            <li>Personal Accident Policy</li>
          </ul>
        </div>

        {/* Motor Insurance */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Motor Insurance</h4>
          <ul className="space-y-2 text-sm">
            <li>Car Insurance</li>
            <li>Two Wheeler Insurance</li>
            <li>Pay as you Drive</li>
            <li>Third Party Insurance</li>
            <li>Commercial Vehicle Insurance</li>
          </ul>
        </div>

        {/* Other Insurance */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Other Insurance</h4>
          <ul className="space-y-2 text-sm">
            <li>International Travel Insurance</li>
            <li>Home Insurance</li>
            <li>Home loan Insurance</li>
            <li>Director & Officer Insurance</li>
            <li>Transit Insurance (Marine)</li>
            <li>CPM Insurance</li>
            <li>Contractor All risk Insurance</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 gap-2">
        <p>©2025 Demo, All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400">Login as Agent</a>
          <a href="#" className="hover:text-orange-400">Policy Statements</a>
          <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
