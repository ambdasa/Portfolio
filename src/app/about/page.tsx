'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const aboutMe = {
  name: 'Ambica Dasari',
  title: 'Data Engineer',
  description: [
    "Hello, I'm Ambica Dasari – A Data Engineer Passionate About Scalable Data Solutions and Cloud Technologies.",
    "Welcome to my portfolio! I am a Data Engineer with expertise in cloud computing, real-time data processing, and scalable ETL solutions. With a Master's in Data Science from Indiana University Bloomington, I specialize in designing high-performance, fault-tolerant data architectures that drive actionable insights."
  ],
};

const whatIDo = [
  {
    title: 'Cloud & Data Engineering',
    description:
      'I architect real-time data pipelines on AWS and GCP, optimizing storage, security, and scalability for high-volume data processing.',
  },
  {
    title: 'Big Data & ETL Pipelines',
    description:
      'I build end-to-end data ingestion frameworks using Apache Kafka, Apache Airflow, Spark, and SQL, handling 10TB+ of data daily while ensuring compliance with GDPR.',
  },
  {
    title: 'Performance Optimization & Automation',
    description:
      'I leverage AWS Lambda, S3, and Step Functions to reduce processing costs by 60% and improve system efficiency.',
  },
  {
    title: 'Machine Learning & Anomaly Detection',
    description:
      'I integrate AI-driven anomaly detection models to enhance data integrity and reduce fraud by 30%.',
  },
];

const journey = [
  "I started as a Data Analyst Intern at Lancius IT Solutions, where I built interactive Power BI dashboards that improved business decision-making efficiency by 35%.",
  "At Larsen & Toubro Infotech, I engineered large-scale real-time data ingestion systems, securing 1M+ records and reducing execution times by 50%.",
  "Currently, as an AWS Cloud Developer at Indiana University, I optimize seismological data pipelines, processing 10,000+ seismic data points per second with high-availability cloud architectures.",
];

const interests = [
  'Building High-Performance Cloud Architectures',
  'Optimizing Big Data Workflows',
  'Leveraging AI for Anomaly Detection & Security',
  'Collaborating with Teams to Solve Complex Data Challenges',
];

const hobbies = [
  { emoji: '🏸', name: 'Badminton', description: 'I love playing and competing in friendly matches.' },
  { emoji: '🎬', name: 'Movies', description: 'Enjoy watching a mix of thriller, sci-fi, and drama films.' },
  { emoji: '🎶', name: 'Music', description: 'Always exploring new genres and beats to keep me inspired.' },
  { emoji: '🎤', name: 'Singing', description: 'Passionate about music and love singing in my free time.' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* About Me Section */}
      <section className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
        <div className="flex items-start gap-8 mb-6">
          {/* Profile Image */}
          <div className="w-64 h-80 relative overflow-hidden border-4 border-gray-200 dark:border-white/10 shadow-lg">
            <Image src="/profile.jpg" alt="Ambica Dasari" fill className="object-cover" priority />
          </div>
          <div className="flex-1 ml-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{aboutMe.name}</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{aboutMe.title}</h3>
            <div className="mb-4">
              {aboutMe.description.map((text, index) => (
                <p key={index} className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">What I Do</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          {whatIDo.map((item, index) => (
            <li key={index} className="text-lg">
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </section>

      {/* My Journey Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-5xl md:leading-[1.5] font-bold mb-6 animate-gradient-text">My Journey</h2>
        {journey.map((text, index) => (
          <p key={index} className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {text}
          </p>
        ))}
      </section>

      {/* What Excites Me Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">What Excites Me</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          {interests.map((interest, index) => (
            <li key={index} className="text-lg">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">Hobbies & Interests</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          {hobbies.map((hobby, index) => (
            <li key={index} className="text-lg">
              {hobby.emoji} <strong>{hobby.name}:</strong> {hobby.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Let's Connect Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">Let's Connect!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm always open to new opportunities, collaborations, and discussions on <strong>data engineering, cloud computing, and big data analytics</strong>. Feel free to explore my <strong>projects and resume</strong>, or reach out for a chat!
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Email: <a href="mailto:ambdasa@iu.edu" className="text-blue-600 hover:underline">ambdasa@iu.edu</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Email: <a href="mailto:ambicadasari.11@gmail.com" className="text-blue-600 hover:underline">ambicadasari.11@gmail.com</a>
        </p>

        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/ambica-dasari-3808bb187/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <FaLinkedin size={20} color="currentColor" /> 
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="https://github.com/ambdasa" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            <FaGithub size={20} color="currentColor" /> 
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;