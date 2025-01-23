import { useState, useEffect } from "react";
import apiClient from "./utils/apiClient";
import Navbar from "./components/Navbar";
import ColumnImages from "./components/ColumnImages";
import WelcomeText from "./components/WelcomeText";
import styled from "styled-components";

const App = () => {
  const [cats, setCats] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await apiClient.get(
        "/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=40"
      );
      setCats(response.data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const groupSize = 10;
  const columns = 4;
  const imgGroups = Array.from({ length: columns }, (_, index) =>
    cats.slice(index * groupSize, index * groupSize + groupSize)
  );

  return (
    <Wrapper>
      <Navbar />
      <div className="gallery">
        <div className="gallery-container">
          <div className="columns">
            {imgGroups.map((imgGroup, index) => (
              <ColumnImages imgGroup={imgGroup} key={index} />
            ))}
          </div>
          <WelcomeText />
        </div>
      </div>
    </Wrapper>
  );
};
export default App;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #cfffb3;
  .gallery {
    display: grid;
    place-items: center;
  }

  .gallery-container {
    padding: 0 30px;
  }

  .columns {
    display: flex;
    gap: 15px;
  }
`;
