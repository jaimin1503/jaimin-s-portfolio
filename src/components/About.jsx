import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="py-20 bg-[#092635] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9EC8B9]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poiret"
              >
                About{' '}
                <span className="bg-gradient-to-r from-[#9EC8B9] to-purple-400 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              I'm a passionate web developer who specializes in creating exceptional digital experiences. 
              With expertise in both frontend and backend development, I bring ideas to life through 
              clean code and innovative design.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Currently seeking opportunities as a full-stack engineer where I can contribute my 
              technical skills and creative problem-solving abilities to build amazing products 
              that make a difference.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 py-8"
            >
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#9EC8B9] font-poiret">15+</h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#9EC8B9] font-poiret">2+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#9EC8B9] font-poiret">10+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="https://calendly.com/jaiminv153/30min">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#9EC8B9] to-[#7ab3a0] text-[#092635] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  data-cursor-hover
                >
                  Schedule a Meeting
                </motion.button>
              </Link>
              <Link to="https://drive.google.com/file/d/1b3Im91wJBcdNNlqRqA7B3QAzAv3j2q_1/view?usp=sharing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[#9EC8B9] text-[#9EC8B9] font-bold rounded-full hover:bg-[#9EC8B9] hover:text-[#092635] transition-all duration-300"
                  data-cursor-hover
                >
                  Download Resume
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-[#9EC8B9]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-purple-400/30 rounded-full border-dashed"
              />
              
              {/* Center Content */}
              <div className="absolute inset-8 bg-gradient-to-br from-[#9EC8B9]/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 bg-gradient-to-br from-[#9EC8B9] to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <span className="text-4xl font-bold text-[#092635] font-poiret">JV</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white font-poiret">Web Developer</h3>
                  <p className="text-[#9EC8B9] mt-2">MERN Stack</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#9EC8B9] rounded-full"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;