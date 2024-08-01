import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme";
import { GlobalStyle } from "./assets/theme/global-styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainHome from "./pages/MainHome/MainHome";
import Header from "./Component/common/header/Header";
import Footer from "./Component/common/footer/Footer";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Video from "./pages/Video/Video";
import Fixtures from "./pages/Fixtures/Fixtures";
import Ticket from "./pages/Tickets/Ticket";
import MenTicket from "./pages/Tickets/MenTicket";
import WomenTicket from "./pages/Tickets/WomenTicket";
import Shop from "./pages/Shop/Shop";
import ShopNav from "./Component/shop/ShopNav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          <Header />
          <ShopNav />
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/video" element={<Video />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/ticket/men" element={<MenTicket />} />
            <Route path="/ticket/women" element={<WomenTicket />} />
          </Routes>
          <Routes>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
