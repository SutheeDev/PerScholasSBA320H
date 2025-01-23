import styled from "styled-components";

const WelcomeText = () => {
  return (
    <Wrapper className="text-container">
      <h1 className="text">Endless</h1>
      <h1 className="text">Cat</h1>
      <h1 className="text">Endless</h1>
      <h1 className="text">Joy</h1>
    </Wrapper>
  );
};
export default WelcomeText;

const Wrapper = styled.div`
  grid-area: 1/1;
  text-align: center;
  margin-top: -90px;
  .text {
    font-family: "Danfo", serif;
    font-weight: 400;
    font-size: 25vh;
    line-height: 0.8;
    z-index: 1;
    color: #ace68a;
  }
`;
