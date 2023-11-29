import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
