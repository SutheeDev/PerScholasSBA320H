import styled from "styled-components";

const Image = ({ catObj }) => {
  return (
    <Wrapper>
      <img className="img" src={catObj.url} alt="" />
    </Wrapper>
  );
};
export default Image;

const Wrapper = styled.div`
  .img {
    width: 100%;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 0px 1.5px 1.4px rgba(0, 0, 0, 0.02),
      0px 3.7px 3.4px rgba(0, 0, 0, 0.028), 0px 7px 6.4px rgba(0, 0, 0, 0.035),
      0px 12.5px 11.4px rgba(0, 0, 0, 0.042),
      0px 23.4px 21.3px rgba(0, 0, 0, 0.05), 0px 56px 51px rgba(0, 0, 0, 0.07);
  }
`;
