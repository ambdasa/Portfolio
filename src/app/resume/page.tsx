'use client';

import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <iframe
        src="/resume.pdf"
        className="w-full h-screen"
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;