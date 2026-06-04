import React from 'react';

interface NoahLabsLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const NoahLabsLogo: React.FC<NoahLabsLogoProps> = ({ 
  size = 48, 
  className = '',
  animate = false 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={`transition-all duration-300 ${animate ? 'hover:scale-110' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chevron Gauche "N" - Diagonal avec layering */}
      
      {/* Couche profonde - Marron sombre */}
      <polygon
        points="70,50 140,110 70,170 45,170 115,110 45,50"
        fill="#6B4423"
        opacity="0.6"
      />
      
      {/* Couche médiane - Bordeaux/Marron riche */}
      <polygon
        points="80,55 135,105 80,165 55,165 110,115 55,55"
        fill="#A85C3A"
        opacity="0.75"
      />
      
      {/* Couche principale - Or doré */}
      <polygon
        points="90,60 130,100 90,160 65,160 105,120 65,60"
        fill="#D4A574"
        opacity="0.9"
      />
      
      {/* Highlight blanc */}
      <polygon
        points="95,70 125,95 95,150 75,150 105,120 75,70"
        fill="#FFFEF9"
        opacity="0.7"
      />

      {/* Chevron Droit "L" - Vertical avec layering */}
      
      {/* Couche profonde - Marron sombre */}
      <polygon
        points="160,50 190,50 190,170 160,170 160,90"
        fill="#6B4423"
        opacity="0.6"
      />
      
      {/* Couche médiane - Bordeaux/Marron */}
      <polygon
        points="150,55 185,55 185,165 150,165 150,95"
        fill="#A85C3A"
        opacity="0.75"
      />
      
      {/* Couche principale - Or doré */}
      <polygon
        points="155,60 180,60 180,160 155,160 155,100"
        fill="#D4A574"
        opacity="0.9"
      />
      
      {/* Highlight blanc fort */}
      <polygon
        points="162,65 178,65 178,155 162,155 162,105"
        fill="#FFFEF9"
        opacity="0.8"
      />
      
      {/* Accent stripe blanc sur le L pour plus de profondeur */}
      <line
        x1="172"
        y1="60"
        x2="172"
        y2="160"
        stroke="#FFFEF9"
        strokeWidth="3"
        opacity="0.5"
      />
    </svg>
  );
};

export default NoahLabsLogo;
