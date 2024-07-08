import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page";
import HumorPage from "./page/Humor";
import FreePage from "./page/Free";
import HeaderLayout from "./component/HeaderLayout";
import HumorWrite from "./page/Humor/write";

function App() {
  return (
    <>
      <Router>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/humor" element={<HumorPage />} />
            <Route path="/free" element={<FreePage />} />
            <Route path="/humor/write" element={<HumorWrite />} />
          </Routes>
        </HeaderLayout>
      </Router>

      {/* <Listbox /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
