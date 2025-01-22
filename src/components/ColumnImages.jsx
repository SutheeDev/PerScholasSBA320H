import Image from "./Image";

const ColumnImages = ({ imgGroup }) => {
  return (
    <div className="column">
      {imgGroup.map((obj, index) => (
        <Image key={index} catObj={obj} />
      ))}
    </div>
  );
};
export default ColumnImages;
