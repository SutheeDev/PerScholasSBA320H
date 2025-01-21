import { useEffect } from "react";
import apiClient from "./utils/apiClient";
import Navbar from "./components/Navbar";
import ColumnImages from "./components/ColumnImages";
import WelcomeText from "./components/WelcomeText";

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
