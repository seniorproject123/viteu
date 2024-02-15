import { Navigate, Route, Routes } from "react-router-dom";
import ConditionUtilisation from "./components/ConditionUtilisation";
import Confidentialite from "./components/Confidentialite";
import Conseil from "./components/Conseil";
import Faq from "./components/Faq";
import Home from "./components/Home";
import PolitiqueCookie from "./components/PolitiqueCookie";
import Prestige from "./components/Prestige";
import Blog from "./components/blog/Blog";
import Blog2 from "./components/blog/Blog2";
import Plus from "./components/home/Plus";
import "./index.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      {/* <Route path="/data-react-tailwind/coaching" element={<Coach />} /> */}
      <Route path="/plus" element={<Plus />} />
      <Route path="/conseil" element={<Conseil />} />
      <Route path="/prestige" element={<Prestige />} />
      <Route path="/condition-utilisation" element={<ConditionUtilisation />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/politique-cookie" element={<PolitiqueCookie />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;
