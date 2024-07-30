import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages";
import HumorPage from "pages/humor";
import FreePage from "pages/free";
import HeaderLayout from "components/common/header/HeaderLayout";
import { RecoilRoot } from "recoil";
import "styles/styles.css";
import WriteArea from "components/domain/write";
import { ConfigProvider } from "antd";
import theme from "styles/theme";
import DetailContents from "components/domain/contents/detail";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <HeaderLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/humor" element={<HumorPage />} />
              <Route path="/free" element={<FreePage />} />
              <Route path="/contents/write/:pageId" element={<WriteArea />} />
              <Route
                path="/humor/:contentsNumber"
                element={<DetailContents />}
              />
              <Route
                path="/free/:contentsNumber"
                element={<DetailContents />}
              />
            </Routes>
          </HeaderLayout>
        </Router>
        {/* <Listbox /> */}
        {/* <Footer /> */}
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;
