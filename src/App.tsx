import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page";
import HumorPage from "./page/humor";
import FreePage from "./page/free";
import HeaderLayout from "./component/common/header/HeaderLayout";
import { RecoilRoot } from "recoil";
import PostArea from "./component/domain/write";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/humor" element={<HumorPage />} />
            <Route path="/free" element={<FreePage />} />
            <Route path="/contents/write" element={<PostArea />} />
          </Routes>
        </HeaderLayout>
      </Router>
      {/* <Listbox /> */}
      {/* <Footer /> */}
    </RecoilRoot>
  );
}

export default App;
