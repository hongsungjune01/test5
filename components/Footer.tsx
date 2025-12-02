import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-200 text-stone-600 py-6 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Yeoju Sweet Potato Growers Association. All rights reserved.</p>
        <p className="text-sm mt-1">
          A tribute to the rich soil and dedicated farmers of Yeoju.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
