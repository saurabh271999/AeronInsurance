import React, { useState } from 'react';

const insuranceTypes = [
  { name: 'Health Insurance', icon: '/icons/health.png' },
  { name: 'Motor Insurance', icon: '/icons/motor.png' },
  { name: 'Travel Insurance', icon: '/icons/travel.png' },
  { name: 'Shop Insurance', icon: '/icons/shop.png' },
  { name: 'Home Insurance', icon: '/icons/home.png' },
  { name: 'Fire Insurance', icon: '/icons/fire.png' },
];

const partners = [
  // ...your partner URLs...
  
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr8NK5b9R1TnF49et6zZW3tDx-U7zyy1N9w&s',
  'https://seeklogo.com/images/S/star-health-india-logo-97AD28B8AE-seeklogo.com.png',
  'https://www.zilliondesigns.com/images/portfolio/insurance/insurance-07.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfTtV8_IxZfycfknuk0Ay5AKIsv445RWP2g&s',
  'https://www.mbaskool.com/2016_images/top_brands/india_insurance/indins16-09.jpg',
  'https://www.companycontactdetails.in/wp-content/uploads/2020/04/United-India-Logo.jpg',
  'https://www.mbaskool.com/2016_images/top_brands/india_insurance/indins16-06.jpg',
  'https://exchange4media.gumlet.io/news-photo/1513778046_z6OotV_big_india.jpg',
  'https://resize.indiatvnews.com/en/resize/oldbucket/355_-/businessindia/Chola-MS-Insura11876.jpg',
  'https://cdn.logojoy.com/wp-content/uploads/2018/07/20162059/insurance19.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_India_Assurance.svg/1000px-New_India_Assurance.svg.png',
  'https://cdn.brandfetch.io/avivaindia.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed'


];

export default function InsurancePartner() {
  const [active, setActive] = useState('Health Insurance');

  return (
    <div className="w-full py-10 bg-white flex flex-col">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-orange-500">Insurance</span> Partner
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow border p-4">
            {insuranceTypes.map((item) => (
              <div
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center space-x-3 cursor-pointer rounded-lg px-3 py-2 w-full mb-2 ${
                  active === item.name ? 'bg-blue-100 border border-blue-300' : ''
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {partners.map((logo, index) => (
                <div
                  key={index}
                  className="flex h-[50px] items-center justify-center bg-gray-50 rounded-md p-3 shadow-sm"
                >
                  <img src={logo} alt={`Partner ${index}`} className="max-h-10 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}