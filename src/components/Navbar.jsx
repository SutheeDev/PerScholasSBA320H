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
  background-color: #fcec52;
  position: relative;
  z-index: 5;
  box-shadow: 0px 1.5px 1.4px rgba(0, 0, 0, 0.02),
    0px 3.7px 3.4px rgba(0, 0, 0, 0.028), 0px 7px 6.4px rgba(0, 0, 0, 0.035),
    0px 12.5px 11.4px rgba(0, 0, 0, 0.042),
    0px 23.4px 21.3px rgba(0, 0, 0, 0.05), 0px 56px 51px rgba(0, 0, 0, 0.07);
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
