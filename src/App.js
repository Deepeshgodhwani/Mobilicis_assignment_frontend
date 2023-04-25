import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setloading] = useState(true);
  return (
    <div className="App  w-full h-[100vh]  bg-gradient-to-r from-[rgb(255,178,59)] to-[rgb(255,127,45)] ... ">
      {loading && <Loader />}
      <Home setloading={setloading} loading={loading} />
    </div>
  );
}

export default App;
