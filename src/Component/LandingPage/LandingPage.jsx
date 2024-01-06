import "./landingpage.scss";
import { motion } from "framer-motion";
const LandingPage = () => {
  const role = "Web developer";

  const containerVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVarient = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const buttonVarient = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Akash M</h2>
          <h1>
            <motion.span
              variants={containerVarient}
              initial="initial"
              animate="animate"
            >
              {role.split("").map((letters, index) => (
                <motion.span variants={letterVarient} key={index}>
                  {letters}
                </motion.span>
              ))}
            </motion.span>
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
              >
                Resume Download
              </motion.button>
            </a>
            <a href="#Hire Me">
              <motion.button
                variants={buttonVarient}
                initial="initial"
                whileTap="animate"
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
