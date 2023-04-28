import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ApplicationPage from "./pages/ApplicationPage";
import StartPage from "./pages/StartPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/application-form" element={<ApplicationPage />} />
        <Route path="/dogs" element={<ListPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
