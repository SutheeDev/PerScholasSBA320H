import { useState, useEffect, useRef } from "react";
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

  const loadingRef = useRef();

  const fetchImages = async (pageNum) => {
    try {
      setIsLoading(true);
      const response = await apiClient.get(
        `/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=16&page=${pageNum}`
      );
      const catsData = await response.data;
      setCats((prev) => [...prev, ...catsData]);
      setIsLoading(false);
    } catch (error) {
      console.log({ error: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  useEffect(() => {
    // Use IntersectionObserver to monitor when the loadingRef enters the viewport
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver(
      // Destructure entries which is an array of IntersectionObserverEntry object
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "0px" }
    );

    // Attach the IntersectionObserver to the DOM referenced by loadingRef
    const currentRef = loadingRef.current;
    if (currentRef) {
      // Tell the observer to monitor the currentRef visibility
      observer.observe(currentRef);
    }

    // Clean up the observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading]);

  // Divide images into 2 columns
  const columns = 2;
  const groupSize = Math.ceil(cats.length / columns);
  const imgGroups = Array.from({ length: columns }, (_, index) =>
    cats.slice(index * groupSize, index * groupSize + groupSize)
  );

  return (
    <Wrapper>
      <div className="main">
        <Navbar />
        <WelcomeText />
        <div className="gallery">
          <div className="gallery-container">
            <div className="columns">
              {imgGroups.map((imgGroup, index) => (
                <ColumnImages imgGroup={imgGroup} key={index} />
              ))}
            </div>
            <div ref={loadingRef}></div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loading">
          <p>Loading</p>
          <PawsLoading />
          <PawsLoading />
          <PawsLoading />
        </div>
      )}
    </Wrapper>
  );
};
export default App;

const Wrapper = styled.main`
  width: 100vw;
  background-color: #eaeae4;

  display: grid;
  place-items: center;

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
    @media (max-width: 895px) {
      gap: 15px;
    }
  }

  .loading {
    width: 100vw;
    height: 100vh;
    background-color: #00000042;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    z-index: 10;
  }

  .loading p {
    font-family: "Pacifico", serif;
    font-size: 1.5em;
    font-weight: 300;
    color: #463403;
    margin-top: -10px;
    margin-right: 10px;
  }
`;
