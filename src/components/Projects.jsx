import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Friends-Flock',
      description: 'A fully functional Instagram clone with all core features including posting, liking, commenting, and real-time interactions.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://friends-flock.vercel.app',
      codeUrl: 'https://github.com/jaimin1503/rj-insta',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Do-Remote',
      description: 'A comprehensive freelancer and client platform where users can create profiles, post jobs, and apply for opportunities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Tailwind'],
      liveUrl: 'https://do-remote.vercel.app',
      codeUrl: 'https://github.com/jaimin1503/do-remote',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Resume Hub',
      description: 'Professional resume builder with multiple templates and easy-to-use interface for creating stunning resumes.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Redux', 'Node.js', 'Express'],
      liveUrl: 'https://pro-resume-hub.vercel.app',
      codeUrl: 'https://github.com/jaimin1503/zidio-resume-builder',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Open to Work',
      description: 'Task management platform with role-based profiles for clients and freelancers to collaborate effectively.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'Express', 'Tailwind'],
      liveUrl: 'https://task-me-bay.vercel.app/log-in',
      codeUrl: 'https://github.com/jaimin1503/odoo-hackathon',
      category: 'Full Stack'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#092635] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#9EC8B9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poiret">
              Featured{' '}
              <span className="bg-gradient-to-r from-[#9EC8B9] to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies 
              and innovative problem-solving
            </p>
          </motion.div>

          {/* Project Showcase */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092635]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <Link to={project.liveUrl}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-[#9EC8B9] text-[#092635] font-bold rounded-full shadow-lg"
                            data-cursor-hover
                          >
                            Live Demo
                          </motion.button>
                        </Link>
                        <Link to={project.codeUrl}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#092635] transition-all duration-300"
                            data-cursor-hover
                          >
                            View Code
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#9EC8B9] to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-[#092635] shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  variants={itemVariants}
                >
                  <div className="inline-block px-4 py-2 bg-[#9EC8B9]/20 text-[#9EC8B9] rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-poiret">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20 hover:border-[#9EC8B9]/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <Link to={project.liveUrl}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-[#9EC8B9] to-[#7ab3a0] text-[#092635] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        data-cursor-hover
                      >
                        Live Demo →
                      </motion.button>
                    </Link>
                    <Link to={project.codeUrl}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-[#9EC8B9] text-[#9EC8B9] font-bold rounded-full hover:bg-[#9EC8B9] hover:text-[#092635] transition-all duration-300"
                        data-cursor-hover
                      >
                        View Code
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-32">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poiret">
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg">{skill.name}</span>
                    </span>
                    <span className="text-[#9EC8B9] font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-white/30 skew-x-12 w-8"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;