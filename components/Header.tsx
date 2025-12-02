import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-amber-800 text-white py-20 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/id/365/1200/800')" }}
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-800 to-transparent"></div>
      <div className="relative container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3,2.05c0.88,0.38,1.62,1.12,2,2c0.38,0.88,0.38,1.86,0,2.74c-0.38,0.88-1.12,1.62-2,2 c-0.88,0.38-1.86,0.38-2.74,0c-0.88-0.38-1.62-1.12-2-2C4.18,6.03,4.1,5.05,4.3,4.17c-0.53,1.38,0.02,2.98,1.2,3.85 C7.02,9.17,9,9.36,10.41,8.5c1.41-0.85,2.1-2.62,1.55-4.15C11.58,3.22,11.3,2.43,11.3,2.05z M10,0.5 C5.86,0.5,2.5,3.86,2.5,8s3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5S14.14,0.5,10,0.5z M10,14.5c-3.59,0-6.5-2.91-6.5-6.5 s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S13.59,14.5,10,14.5z" clipRule="evenodd" />
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-100">
            여주 명품 고구마
          </h1>
        </div>
        <p className="mt-2 text-lg md:text-xl text-amber-200">
          자연의 달콤함을 그대로, 흙이 키운 보물
        </p>
      </div>
    </header>
  );
};

export default Header;
