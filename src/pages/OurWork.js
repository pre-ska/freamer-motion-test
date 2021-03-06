import React from "react";
import styled from "styled-components/macro";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  sliderContainer,
  lineAnim,
  slider
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll(0.3);
  const [element2, controls2] = useScroll(0.3);
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={`/work/the-athlete`}>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={`/work/the-racer`}>
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden">
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={`/work/good-times`}>
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #414141;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #727272;
`;

const Frame3 = styled(Frame1)`
  background: #a3a3a3;
`;

const Frame4 = styled(Frame1)`
  background: #e4e4e4;
`;

export default OurWork;
