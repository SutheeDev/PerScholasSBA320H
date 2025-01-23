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
    border-radius: 30px;
  }
`;
