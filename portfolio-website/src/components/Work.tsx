'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'Mobile App', 'Branding', 'Development'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      category: 'Web Design',
      description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'Mobile application for tracking workouts and nutrition with social features.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'TechStart Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for a technology startup including logo and guidelines.',
      image: '/api/placeholder/600/400',
      tags: ['Illustrator', 'Figma', 'Brand Strategy'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Development',
      description: 'A modern, responsive portfolio website built with Next.js and Framer Motion.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'SaaS Landing Page',
      category: 'Web Design',
      description: 'High-converting landing page design for a B2B SaaS product.',
      image: '/api/placeholder/600/400',
      tags: ['Figma', 'Webflow', 'Conversion Optimization'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Restaurant Ordering App',
      category: 'Mobile App',
      description: 'Mobile app for restaurant ordering with real-time tracking and payment integration.',
      image: '/api/placeholder/600/400',
      tags: ['Flutter', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            My Work
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-0 text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-neutral-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 h-64">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-primary-600">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-neutral-0 rounded-full text-neutral-900 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-neutral-0 rounded-full text-neutral-900 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;