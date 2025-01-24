import PawIcon from "./PawIcon";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Purrtraits</h1>
        <button className="paw">
          <PawIcon />
        </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  width: 100vw;
  min-height: 10vh;
  background-color: #fcec52;
  position: sticky;
  top: 0;
  z-index: 5;

  .navbar-container {
    padding: 5px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: "Pacifico", serif;
    font-size: 2.4em;
    font-weight: 300;
    color: #3a5743;
  }

  .paw {
    border: none;
    background-color: #fcec52;
    margin-bottom: -10px;
    cursor: pointer;

    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.03);
    }
  }
`;
