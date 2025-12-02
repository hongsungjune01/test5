import React from 'react';
import type { SweetPotato } from '../types';

interface SweetPotatoCardProps {
  potato: SweetPotato;
}

const SweetPotatoCard: React.FC<SweetPotatoCardProps> = ({ potato }) => {
  return (
    <div className={`
      ${potato.bgColor} 
      rounded-2xl shadow-lg overflow-hidden 
      transform hover:scale-105 transition-transform duration-300 ease-in-out
      flex flex-col md:flex-row
    `}>
      <img 
        className="w-full h-48 md:w-5/12 md:h-auto object-cover" 
        src={potato.imageUrl} 
        alt={potato.koreanName} 
      />
      <div className="p-6 flex flex-col justify-between w-full">
        <div>
          <h3 className={`text-2xl font-bold ${potato.accentColor}`}>{potato.koreanName}</h3>
          <p className="text-sm text-stone-500 mb-3">{potato.englishName}</p>
          <p className="text-stone-700 leading-relaxed mb-4">
            {potato.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {potato.tags.map((tag) => (
            <span 
              key={tag} 
              className={`
                px-3 py-1 text-xs font-semibold rounded-full 
                ${potato.tagBgColor} 
                ${potato.tagTextColor}
              `}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SweetPotatoCard;
