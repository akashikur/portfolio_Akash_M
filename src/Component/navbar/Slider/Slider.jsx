import { motion } from "framer-motion";
import { useState } from "react";
import Link from "./Link";
import ToggleBtn from "./ToggleBtn";
import "./sidebar.scss";
const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(23px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  });
  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <ToggleBtn setIsOpen={setIsOpen} isOpen={isOpen} />
    </motion.div>
  );
};

export default Slider;
