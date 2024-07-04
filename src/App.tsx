import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeadList from "./component/Header";
import HomePage from "./page";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";

function App() {
  return (
    <>
      {/* <HeadLabel /> */}
      <Router>
        <HeadList />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
      {/* <Listbox /> */}
    </>
  );
}

export default App;
