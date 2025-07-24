import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutPage from "./layouts/layout";
import Global from "./pages/Global";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Global />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
