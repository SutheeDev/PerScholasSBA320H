import { useEffect } from "react";
import apiClient from "./utils/apiClient";

const App = () => {
  const initialLoad = async () => {
    const response = await apiClient.get("/images/search?limit=10");
    console.log(response.data);
  };

  useEffect(() => {
    initialLoad();
  });

  return <div>App</div>;
};
export default App;
