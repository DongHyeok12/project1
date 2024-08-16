import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages";
import ListPage from "pages/list";
import HeaderLayout from "components/common/header/HeaderLayout";
import { RecoilRoot } from "recoil";
import "styles/styles.css";
import WriteArea from "components/domain/write";
import { ConfigProvider } from "antd";
import theme from "styles/theme";
import DetailContents from "components/domain/contents/detail";
import ModifyArea from "components/domain/modify";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <HeaderLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:pageId" element={<ListPage />} />
              <Route path="/contents/write/:pageId" element={<WriteArea />} />
              <Route
                path="/:pageId/:contentsNumber"
                element={<DetailContents />}
              />
              <Route
                path="/contents/modify/:pageId/:contentsNumber"
                element={<ModifyArea />}
              />
            </Routes>
          </HeaderLayout>
        </Router>
        {/* <Footer /> */}
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;
