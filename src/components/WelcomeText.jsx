import styled from "styled-components";

const WelcomeText = () => {
  return (
    <Wrapper className="text-container">
      <div className="left-text">
        <h1 className="text">Endless</h1>
        <h1 className="text">Cat</h1>
      </div>
      <div className="right-text">
        <h1 className="text">Joy</h1>
        <h1 className="text">Endless</h1>
      </div>
    </Wrapper>
  );
};
export default WelcomeText;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  margin-top: -12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  .left-text,
  .right-text {
    display: flex;
    align-items: center;
  }

  .text {
    font-family: "Danfo", serif;
    font-weight: 400;
    font-size: 6.3em;
    line-height: 0.8;
    z-index: 1;
    color: #ace68a;
    writing-mode: vertical-lr;
    text-orientation: upright;
    letter-spacing: -53px;
  }
`;
