import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'Express', level: 88, icon: '🚀' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨' },
    { name: 'Git', level: 90, icon: '📝' },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized code and fast load times for the best user experience',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Beautiful layouts that work perfectly on any device size',
    },
    {
      icon: '💡',
      title: 'Intuitive UX',
      description: 'User-centered design with focus on usability and accessibility',
    },
    {
      icon: '🚀',
      title: 'Modern Tech',
      description: 'Latest technologies and best practices for scalable solutions',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gradient-to-b from-[#092635] to-[#0a2d3a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9EC8B9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

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
              Skills &{' '}
              <span className="bg-gradient-to-r from-[#9EC8B9] to-purple-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized in modern web technologies with a focus on creating scalable, 
              performant applications
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#9EC8B9]/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poiret">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white mb-12 font-poiret"
            >
              Technical Proficiency
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-[#9EC8B9] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
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

export default Skills;