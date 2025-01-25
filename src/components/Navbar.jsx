import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Purrtraits</h1>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  width: 100vw;
  min-height: 10vh;
  background-color: #eaeae4;
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
    color: #463403;
  }
`;
