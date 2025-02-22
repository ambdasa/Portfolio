import dynamic from 'next/dynamic';

const Particles = dynamic(
  () => import('./Particles').then((mod) => mod.Particles),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />
  }
);

export default Particles; 