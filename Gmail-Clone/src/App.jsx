import "./App.css";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
