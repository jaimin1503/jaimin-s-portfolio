import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, handleSubmit] = useForm("mayrnnrj");

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

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaimin-viramgama-487485233/',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jaimin1503',
      icon: '🐱',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jaimin_15.3/',
      icon: '📸',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      url: 'mailto:jaiminviramgama152@gmail.com',
      icon: '✉️',
      color: 'hover:text-red-400'
    },
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-[#0a2d3a] to-[#092635] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-[#9EC8B9]/30"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#9EC8B9] mb-4 font-poiret">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for reaching out. I'll get back to you soon!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gradient-to-r from-[#9EC8B9] to-purple-400 text-[#092635] font-bold rounded-full"
              data-cursor-hover
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a2d3a] to-[#092635] relative overflow-hidden">
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
              Let's{' '}
              <span className="bg-gradient-to-r from-[#9EC8B9] to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9EC8B9] to-purple-400 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-poiret mb-8">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-[#9EC8B9]/20 rounded-full flex items-center justify-center text-2xl">
                      📧
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">jaiminviramgama152@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-[#9EC8B9]/20 rounded-full flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Available for Remote Work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white font-poiret">
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Link key={social.name} to={social.url}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#9EC8B9]/50 transition-all duration-300 text-center group ${social.color}`}
                        data-cursor-hover
                      >
                        <div className="text-3xl mb-2">{social.icon}</div>
                        <p className="text-white group-hover:text-current transition-colors duration-300">
                          {social.name}
                        </p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-poiret">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9]/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9]/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9]/20 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9]/20 transition-all duration-300 resize-none"
                      placeholder="Hello Jaimin! I'd love to discuss..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#9EC8B9] to-purple-400 text-[#092635] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-cursor-hover
                  >
                    {state.submitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-[#092635] border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-gray-400">
          © 2025 Jaimin Viramgama. Crafted with ❤️ and modern web technologies.
        </p>
      </motion.footer>
    </section>
  );
};

export default Contact;