// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';


const Card: React.FC<CardProps> = ({ title, description, imageUrl, footer, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
      {footer && <div className="bg-gray-100 p-4 text-sm">{footer}</div>}
    </div>
  );
};

export default Card;


