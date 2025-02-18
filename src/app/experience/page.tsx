'use client';

import React from 'react';
import type { NextPage } from 'next';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: 'AWS Cloud Developer',
    company: 'Indiana University',
    period: 'Jan 2025 - Present',
    location: 'Bloomington, Indiana',
    achievements: [
      'Cloud Infrastructure: Designed and deployed a real-time data processing pipeline on AWS using Apache Kafka, efficiently handling 10,000+ seismic data points per second for ambient noise tomography under the FADS program.',
      'AWS Solutions: Engineered an auto-scaling, fault-tolerant cloud architecture, optimizing computational efficiency and ensuring high availability for large-scale seismological data processing and analysis.',
      'Performance Optimization: Implemented AWS Lambda and S3-based event-driven workflows, reducing data ingestion latency by 40% and improving the scalability of geophysical data analysis pipelines.'
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Larsen and Toubro Infotech',
    period: 'Jul 2021 - Jul 2023',
    location: 'Hyderabad, India',
    achievements: [
      'Scalable Data Processing: Built and deployed an ingestion framework handling 1,000+ data sources with parallel processing, reducing execution time by 50% for 10TB+ daily data, and automating workflows using Python and Apache Airflow.',
      'Security & Compliance: Implemented GDPR-compliant security protocols and an ML-based anomaly detection system, reducing fraud by 30% across 500K+ transactions and securing 1M+ records.',
      'Advanced Analytics: Developed monitoring solutions leveraging machine learning for real-time anomaly detection, improving data integrity and fraud prevention strategies.',
      'Cloud Infrastructure Optimization: Enhanced system reliability and scalability, improving processing efficiency for enterprise data workflows by 40%, ensuring seamless performance under high data loads.'
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Lancius IT Solutions',
    period: 'Jun 2019 - Jul 2019',
    location: 'Hyderabad, India',
    achievements: [
      'Interactive Dashboards – Assisted in designing and generating Power BI dashboards, supporting data-driven decision-making and improving business operations efficiency by 35% through real-time visualizations and user-friendly reports.',
      'Data Cleaning & Reporting – Contributed to data cleaning and reporting efforts, reducing inconsistencies by 40% and increasing actionable insights by 20% by applying standardized data transformation and validation techniques.',
      'Cross-Functional Collaboration – Collaborated with stakeholders and analysts to translate data insights into business objectives, helping improve project delivery timelines by 20% through effective communication and requirement gathering.'
    ],
  },
];

const ExperiencePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Experience Section */}
      <section className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-6xl font-bold mb-6">Experience</h1>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border-l-2 border-gray-200 dark:border-white/20 pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 rounded-full left-[-9px] top-0" />
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold animate-gradient-text">{exp.title}</h3>
                <div className="flex flex-wrap gap-2 items-center text-gray-600 dark:text-gray-300 mt-1">
                  <span>{exp.company}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                  <span>{exp.period}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-500">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto mt-12">
        <h2 className="text-5xl md:text-4xl font-bold mb-12">My Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Apache Kafka', 'Lambda', 'S3', 'Auto-scaling', 'High Availability'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Apache Airflow', 'ETL', 'Data Processing', 'GDPR Compliance', 'ML'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Analytics & Visualization</h3>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'Data Analysis', 'Reporting', 'Dashboard Design', 'Business Intelligence'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage; 