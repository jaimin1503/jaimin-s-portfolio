import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TechStack = ({ image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          className="h-[60px] md:h-[80px] lg:h-[90px] m-3 mx-5 my-5 lg:mx-8"
          src={image}
          alt="tech"
        />
      </motion.div>
    </div>
  );
};
export default TechStack;
