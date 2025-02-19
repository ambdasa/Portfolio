'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const projects = [
  {
    title: 'Stock Market Real-Time Data Analysis',
    description: 'Architected and deployed a fault-tolerant real-time stock analysis pipeline using Apache Kafka and AWS MSK, implementing dead-letter queues and retry mechanisms for zero data loss. Integrated comprehensive monitoring using CloudWatch and Grafana dashboards, enabling real-time system health tracking and achieving 99.9% uptime.',
    period: 'Aug 2024 – Nov 2024',
    skills: ['Apache Kafka', 'Real-Time Data Processing', 'Stream Processing', 'Spark', 'SQL'],
    github: 'https://github.com/ambdasa/stock-market-data-analysis-kafka'
  },
  {
    title: 'YouTube Data Pipeline Optimization',
    description: 'Designed and implemented a serverless ETL pipeline using AWS Step Functions and Lambda functions, reducing processing costs by 60% through optimized S3 storage patterns and Athena partition pruning. Integrated automated data quality checks using Great Expectations framework, achieving 99% anomaly detection rate in data processing workflows.',
    period: 'Apr 2024 – Jul 2024',
    skills: ['AWS (S3, Glue, Athena, Lambda)', 'Data Lake Creation', 'ETL', 'SQL', 'Data Preprocessing', 'Cloud Security'],
    github: 'https://github.com/ambdasa/de-youtube-data-pipeline-optimization'
  },
  {
    title: 'Power BI Project',
    description: 'Coming soon...',
    period: 'Coming soon',
    skills: ['Power BI', 'Data Visualization', 'Analytics'],
    github: '#'
  }
];

const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'Git',
  'REST APIs',
  'MongoDB',
  'SQL',
  'CI/CD',
];

const experiences = [
  {
    title: 'AWS Cloud Developer',
    company: 'Indiana University',
    period: 'Jan 2025 - Present',
    location: 'Bloomington, Indiana',
    description: 'Led the development of scalable cloud solutions and AWS infrastructure.',
  },
  {
    title: 'Data Engineer',
    company: 'Larsen and Toubro Infotech',
    period: 'Jul 2021 - Jul 2023',
    location: 'Hyderabad, India',
    description: 'Developed and maintained data pipelines, ETL processes, and data warehousing solutions.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Lancius IT Solutions',
    period: 'Jun 2019 - Jul 2019',
    location: 'Hyderabad, India',
    description: 'Gained hands-on experience in data analysis and visualization techniques.',
  }
];

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'Java', 'R', 'C', 'HTML', 'CSS', 'PHP', 'JavaScript']
  },
  {
    title: 'Development and Data Tools',
    skills: ['Apache Kafka', 'Apache Spark', 'Git', 'Docker', 'Real-Time Data Processing', 'ETL & Data Pipelines']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS (ECS, Lambda, S3, Glue, Redshift CloudWatch)', 'GCP']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Pandas', 'NumPy', 'PySpark', 'Matplotlib', 'Express', 'Flask', 'Power BI', 'Tableau']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'Snowflake', 'Firebase']
  },
  {
    title: 'Others',
    skills: ['Data Warehousing & Governance', 'Big Data Processing', 'Machine Learning & Analytics', 'System Design', 'Agile & Scrum']
  }
];

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    const scrollAmount = 1;
    
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (hoveredProject === null && scrollContainer) {
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 10)) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += scrollAmount;
          }
        }
      }, 30);
    };

    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [hoveredProject]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold mb-4">
            <span className="block text-4xl sm:text-7xl mb-2 animate-gradient-text font-serif">
              Hello,
            </span>
            <span className="block text-6xl sm:text-7xl animate-gradient-text font-serif">
              I'm Ambica Dasari!
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Transforming raw data into powerful insights—one pipeline at a time.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="#work"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-300"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-serif text-center mb-16">
            Selected Work
          </h2>
          
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="w-[500px] flex-none bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-white/30 transition-all"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="h-full flex flex-col p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-serif mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.period}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-black dark:text-white hover:opacity-70 transition-opacity"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-serif text-center mb-16">
            Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold font-serif mb-2">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{experience.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{experience.period}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{experience.location}</p>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/experience"
              className="inline-flex items-center px-6 py-3 animate-gradient-bg text-white rounded-lg hover:opacity-90 transition-all"
            >
              View Full Experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-serif text-center mb-16">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold font-serif mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-black/5 dark:bg-white/10 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-serif mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            I'm always interested in hearing about new opportunities and projects.
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-4 animate-gradient-bg text-white rounded-lg hover:opacity-90 transition-all text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home; 