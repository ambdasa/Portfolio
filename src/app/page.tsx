'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import ParticlesDynamic from '../components/ParticlesDynamic'
import ViewCounter from '@/components/ViewCounter'
import Image from 'next/image'

const projects = [
  {
    title: 'Stock Market Real-Time Data Analysis',
    github: 'https://github.com/ambdasa/stock-market-data-analysis-kafka',
    image: '/project-images/stock-market.jpeg',
    skills: ['Apache Kafka', 'Real-Time Data', 'Spark Streaming'],
    description: 'Real-time processing of stock market data using Apache Kafka and Spark Streaming for instant analytics and trend prediction.'
  },
  {
    title: 'YouTube Data Pipeline Optimization', 
    github: 'https://github.com/ambdasa/de-youtube-data-pipeline-optimization',
    image: '/project-images/youtube-pipeline.jpg',
    skills: ['AWS Glue', 'Data Lake', 'ETL'],
    description: 'Optimized ETL pipeline handling 10TB+ daily data with AWS Glue, reducing processing time by 40%.'
  },
  {
    title: 'Power BI Project',
    github: '#',
    image: '/project-images/power-bi.jpg',
    skills: ['Data Visualization', 'Dashboarding', 'Analytics'],
    description: 'Currently working on this Power BI project.'
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
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'Snowflake', 'Firebase']
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
    title: 'Others',
    skills: ['Data Warehousing & Governance', 'Big Data Processing', 'Machine Learning & Analytics', 'System Design', 'Agile & Scrum']
  }
];

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    const scrollSpeed = 1.5;
    const projectWidth = 500 + 32;
    const totalProjects = projects.length;

    const smoothScroll = () => {
      if (!isScrolling.current) return;
      
      const maxScroll = projectWidth * totalProjects;
      
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    // Event handlers
    const handleMouseEnter = () => {
      isScrolling.current = false;
    };
    
    const handleMouseLeave = () => {
      isScrolling.current = true;
      smoothScroll();
    };

    // Start scrolling
    smoothScroll();

    // Add event listeners
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white dark:bg-black">
        <ParticlesDynamic />
        <div className="max-w-4xl mx-auto text-center relative z-20 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-black dark:text-white"
          >
            <span className="block text-3xl sm:text-6xl mb-2 font-serif animate-gradient-text">
              Hello,
            </span>
            <span className="block text-6xl sm:text-7xl font-serif animate-gradient-text delay-100">
              I'm Ambica Dasari!
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Transforming raw data into powerful insights—one pipeline at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 justify-center"
          >
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
          </motion.div>
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
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-container px-[5%]"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {[...projects, ...projects].map((project, index) => (
                <motion.a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-[500px] flex-none bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden block flex flex-col relative"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="flex-1 relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 dark:bg-black/80">
                      <p className="text-white text-lg text-center leading-relaxed italic">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <h3 className="text-xl font-bold font-serif">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-black/5 dark:bg-white/10 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
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
                className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-12 mb-8"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-serif">{experience.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">{experience.company}</span>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">{experience.period}</span>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AWS Certification Card */}
          <div className="flex justify-center w-full">
            <motion.div
              className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-12 mb-8 max-w-2xl w-full"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold font-serif">AWS Certified Data Engineer – Associate</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Amazon Web Services</span>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <a 
                    href="https://www.credly.com/badges/decfa750-c714-4e1f-8c4a-82ac1d913992" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Credential
                  </a>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-8">
                  Validated expertise in designing and implementing AWS data solutions
                </p>
              </div>
            </motion.div>
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
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <h3 className="text-2xl font-bold font-serif mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-black/5 dark:bg-white/10 rounded-full text-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
                      }}
                      transition={{ 
                        duration: 0.2,
                        ease: "easeInOut"
                      }}
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

      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Portfolio views: <ViewCounter />
        </p>
      </footer>

      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold text-black dark:text-white font-times-new-roman">
                AD.
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/experience" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/resume" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                Resume
              </Link>
              
              {/* Theme Toggle */}
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Sun Icon */}
                  <path
                    className="dark:hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                  {/* Moon Icon */}
                  <path
                    className="hidden dark:block"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home; 