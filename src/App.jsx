import { useEffect } from "react";
import apiClient from "./utils/apiClient";
import Navbar from "./components/Navbar";
import ColumnImages from "./components/ColumnImages";
import WelcomeText from "./components/WelcomeText";

const App = () => {
  const initialLoad = async () => {
    try {
      const response = await apiClient.get(
        "/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=40"
      );
      // console.log(response.data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    initialLoad();
  });

  return (
    <main>
      <Navbar />
      <div className="gallery">
        <div className="gallery-container">
          <div className="columns">
            <ColumnImages />
            <ColumnImages />
            <ColumnImages />
            <ColumnImages />
          </div>
          <WelcomeText />
        </div>
      </div>
    </main>
  );
};
export default App;
