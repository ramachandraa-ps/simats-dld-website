import React from 'react';

const images = [
  'https://picsum.photos/id/101/200/200',
  'https://picsum.photos/id/102/200/200',
  'https://picsum.photos/id/103/200/200',
  'https://picsum.photos/id/104/200/200',
  'https://picsum.photos/id/106/200/200',
  'https://picsum.photos/id/108/200/200',
  'https://picsum.photos/id/109/200/200',
];

const CircularGallery: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-warmGray/50 rounded-3xl my-12">
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
         {/* Central Node */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white">
             <img src="https://picsum.photos/id/200/300/300" alt="Center" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Orbiting Images */}
      {images.map((src, i) => {
        const angle = (i / images.length) * 2 * Math.PI;
        const radius = 160; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div 
            key={i}
            className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform hover:scale-125 hover:z-20 cursor-pointer"
            style={{
                top: `calc(50% + ${y}px - 40px)`,
                left: `calc(50% + ${x}px - 40px)`,
                animation: `float ${4 + i}s ease-in-out infinite`
            }}
          >
            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default CircularGallery;