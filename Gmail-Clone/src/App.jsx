import "./App.css";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={authenticated ? <Navigate to="/home" /> : <Signin />}
          />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
}

export default App;