'use client';

import { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [views, setViews] = useState('...');

  useEffect(() => {
    fetch('/api/views')
      .then(res => res.json())
      .then(data => setViews(data.views.toString()))
      .catch(() => setViews('0'));
  }, []);

  return (
    <span className="font-mono">{views}</span>
  );
} 