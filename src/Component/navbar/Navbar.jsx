import Slider from "./Slider/Slider";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="navbar">
      <Slider />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AKASH<span style={{ color: "black" }}>DEV</span>
        </motion.span>
        <div className="links">
          <motion.a
            href="#Home"
            whileHover={{
              scale: 1.2,
            }}
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            href="#Skills"
          >
            Skills
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            href="#Projects"
          >
            Projects
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            href="#Hire Me"
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
