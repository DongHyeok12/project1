import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./page";
import HumorPage from "./page/Humor";
import FreePage from "./page/Free";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/humor" element={<HumorPage />} />
          <Route path="/free" element={<FreePage />} />
        </Routes>
      </Router>
      {/* <Listbox /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
