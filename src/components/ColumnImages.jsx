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
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
