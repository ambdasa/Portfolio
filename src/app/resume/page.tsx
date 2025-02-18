'use client';

import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <iframe
        src="/resume.pdf"
        style={{ width: '100%', height: '100vh' }}
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;