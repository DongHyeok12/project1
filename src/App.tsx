import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page";
import HumorPage from "./page/humor";
import FreePage from "./page/free";
import HeaderLayout from "./component/HeaderLayout";
import HumorWrite from "./page/humor/write";
import FreeWrite from "./page/free/write";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/humor" element={<HumorPage />} />
            <Route path="/free" element={<FreePage />} />
            <Route path="/humor/write" element={<HumorWrite />} />
            <Route path="/free/write" element={<FreeWrite />} />
          </Routes>
        </HeaderLayout>
      </Router>
      {/* <Listbox /> */}
      {/* <Footer /> */}
    </RecoilRoot>
  );
}

export default App;
