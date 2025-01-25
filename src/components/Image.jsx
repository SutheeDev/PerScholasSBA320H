import styled from "styled-components";
import { motion } from "motion/react";

const Image = ({ catObj }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img className="img" src={catObj.url} alt="" />
    </Wrapper>
  );
};
export default Image;

const Wrapper = styled(motion.div)`
  .img {
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 1.5px 1.4px rgba(0, 0, 0, 0.02),
      0px 3.7px 3.4px rgba(0, 0, 0, 0.028), 0px 7px 6.4px rgba(0, 0, 0, 0.035),
      0px 12.5px 11.4px rgba(0, 0, 0, 0.042),
      0px 23.4px 21.3px rgba(0, 0, 0, 0.05), 0px 56px 51px rgba(0, 0, 0, 0.07);
    @media (max-width: 895px) {
      border-radius: 16px;
    }
    @media (max-width: 675px) {
      border-radius: 8px;
    }
  }
`;
