import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenrePage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/genre" element={<GenrePage />} />
    </Routes>
  );
}

export default App;
