import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainNavbar from "./Components/mainNavbar";
import Rec from "./pages/Recommendation";
import Rec_2 from "./pages/Recommendation-2";
import Stat from "./pages/Statistics";
import Rec_3 from "./pages/Recommendation-3";
import Slider from "./Components/ImgSlider";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Home />
            </>
          }
        />
        <Route path="/Rec" element={<Rec />} />
        <Route path="/Rec-2" element={<Rec_2 />} />
        <Route path="/Rec-3" element={<Rec_3 />} />
        <Route path="/Stat" element={<Stat />} />
      </Routes>
    </>
  );
}

export default App;
