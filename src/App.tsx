import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages";
import HumorPage from "pages/humor";
import FreePage from "pages/free";
import HeaderLayout from "components/common/header/HeaderLayout";
import { RecoilRoot } from "recoil";
import PostArea from "components/domain/write";

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
