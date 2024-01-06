import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.4 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Link = () => {
  const items = ["Home", "Skills", "Projects", "Hire Me"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          variants={itemVariants}
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={index}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
