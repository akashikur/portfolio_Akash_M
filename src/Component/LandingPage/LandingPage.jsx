/* eslint-disable react/no-unescaped-entities */
import "./landingpage.scss";
import { animate, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const LandingPage = () => {
  const buttonVarient = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2>I'm Akash_M</h2>
          <h1>
            <Typewriter
              words={[
                "Web developer",
                "Frontend developer",
                "MERN stack developer",
              ]}
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={1200}
              loop
              cursor
            />
          </h1>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1dJhToeKXBRmmeh0y5wQGiDgIu33dNBuo/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                variants={buttonVarient}
                initial="initial"
                whileTap="animate"
                whileHover="animate"
              >
                Resume Download
              </motion.button>
            </a>
            <a href="#Hire Me">
              <motion.button
                variants={buttonVarient}
                initial="initial"
                whileTap="animate"
                whileHover="animate"
              >
                Hire Me
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
