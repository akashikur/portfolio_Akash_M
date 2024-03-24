// import { useRef } from "react";
import "./skills.scss";
import { motion } from "framer-motion";
import avatar from "../../image/avatar.png";
import skillsimage from "../../image/skillsimage";
import github from "../../image/github.png";
import linkidin from "../../image/linkidin.png";
import { useState } from "react";
const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="skills">
      <div className="about">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="imageContainer"
        >
          <img src={avatar} alt="image" />
        </motion.div>
        <motion.div
          className="media"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="icons"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://github.com/akashikur"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </motion.div>
          <motion.div
            className="icons"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/akashm2024/"
              rel="noreferrer"
            >
              <img src={linkidin} alt="linkidin" />
            </a>
          </motion.div>
        </motion.div>
        <div className="textContainer">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I’m Akash. Nice to meet you.
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A fresher front-end developer who underwent upskilling through
            AccioJob and possesses knowledge in Node.js, MongoDB, and RxJS holds
            a strong foundation in both front-end development and server-side
            technologies. With expertise in front-end frameworks and libraries
            like React along with a proficiency in HTML, CSS, and JavaScript,
            this developer is equipped to create responsive and interactive user
            interfaces.
          </motion.p>
        </div>
      </div>
      <div className="Skill">
        {skillsimage.map((item, index) => (
          <>
            <motion.div
              key={item}
              className="skill-items"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: `${100 - item.percent}%`,
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: `${item.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  <p>{item.percent}%</p>
                </motion.div>
              )}
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
