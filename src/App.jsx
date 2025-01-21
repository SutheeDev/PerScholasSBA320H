import { useEffect } from "react";
import apiClient from "./utils/apiClient";

const App = () => {
  const initialLoad = async () => {
    const response = await apiClient.get("/images/0XYvRd7oD");
    console.log(response.data);
  };

  useEffect(() => {
    initialLoad();
  });

  return (
    <main>
      <nav className="navbar">
        <h1 className="logo">Purrtraits</h1>
        <button className="btn">Change breeds</button>
      </nav>
      <div className="gallery">
        <div>
          <div className="column">
            <img />
          </div>
        </div>
        <div className="hero-text-container">
          <h1 className="hero-text">Endless Cat</h1>
          <h1 className="hero-text">Endless Joy</h1>
        </div>
      </div>
    </main>
  );
};
export default App;
