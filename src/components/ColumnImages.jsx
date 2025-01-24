import Image from "./Image";
import styled from "styled-components";

const ColumnImages = ({ imgGroup }) => {
  return (
    <Wrapper>
      <div className="column">
        {imgGroup.map((obj, index) => (
          <Image key={index} catObj={obj} />
        ))}
      </div>
    </Wrapper>
  );
};
export default ColumnImages;

const Wrapper = styled.div`
  .column {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -89vh;
    @media (max-width: 895px) {
      width: 300px;
      gap: 10px;
      margin-top: 0vh;
    }
    @media (max-width: 675px) {
      width: 100%;
    }
  }
`;
