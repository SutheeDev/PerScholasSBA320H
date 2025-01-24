import { useState, useEffect } from "react";
import apiClient from "./utils/apiClient";
import Navbar from "./components/Navbar";
import ColumnImages from "./components/ColumnImages";
import WelcomeText from "./components/WelcomeText";
import styled from "styled-components";
import PawsLoading from "./components/PawsLoading";

const App = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async (pageNum) => {
    try {
      setIsLoading(true);
      const response = await apiClient.get(
        "/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=16"
      );
      setCats((prev) => [...prev, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log({ error: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const groupSize = 8;
  const columns = 2;
  const imgGroups = Array.from({ length: columns }, (_, index) =>
    cats.slice(index * groupSize, index * groupSize + groupSize)
  );

  return (
    <Wrapper>
      <Navbar />
      <WelcomeText />
      <div className="gallery">
        <div className="gallery-container">
          <div className="columns">
            {imgGroups.map((imgGroup, index) => (
              <ColumnImages imgGroup={imgGroup} key={index} />
            ))}
          </div>
          {isLoading && (
            <div className="loading">
              <p>Loading</p>
              <PawsLoading />
              <PawsLoading />
              <PawsLoading />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default App;

const Wrapper = styled.main`
  width: 100vw;
  background-color: #fcec52;

  .gallery {
    margin: 0 auto;
  }

  .gallery-container {
    padding: 30px 30px;
  }

  .columns {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    gap: 30px;
    position: relative;
    z-index: 3;
    /* visibility: hidden; */
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }

  .loading p {
    font-family: "Pacifico", serif;
    font-size: 1.5em;
    font-weight: 300;
    color: #3a5743;
    margin-top: -10px;
    margin-right: 10px;
  }
`;
