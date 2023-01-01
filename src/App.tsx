import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Store from "./components/Store";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
