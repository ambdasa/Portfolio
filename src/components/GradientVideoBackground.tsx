import React from 'react';

const GradientVideoBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-50 dark:opacity-30"
      >
        <source src="/gradient-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/50 dark:bg-black/70 backdrop-blur-sm"></div>
    </div>
  );
};

export default GradientVideoBackground; 