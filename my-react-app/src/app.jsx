import NavBarMain from "./components/layouts/NavBarMain";
import Footer from "./components/layouts/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <NavBarMain />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
