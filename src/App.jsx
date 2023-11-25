import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
