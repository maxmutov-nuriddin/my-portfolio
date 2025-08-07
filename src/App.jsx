import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutPage from "./layouts/layout";
import Global from "./pages/Global";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const bodyStyle = {
    backgroundColor: darkMode ? "black" : "",
    color: darkMode ? "white" : "black",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutPage bodyStyle={bodyStyle} toggleTheme={toggleTheme} darkMode={darkMode} />
          }
        >
          <Route index element={<Global darkMode={darkMode} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
