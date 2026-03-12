import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import KhungTrang from "./components/KhungTrang";
import TrangChu from "./pages/TrangChu";
import TrangTySo from "./pages/TrangTySo";
import TrangLoi404 from "./pages/TrangLoi404";
import "./styles/khoaTrang.css";
import "./styles/boCuc.css";
import "./components/KhungTrang.css";
import "./components/ChanTrang.css";
import "./components/ThanhDauTrang.css";
import "./components/NutChinh.css";
import "./components/NutPhu.css";
import "./components/TieuDeMuc.css";
import "./components/TheTinNoiBat.css";
import "./components/TheTranDau.css";
import "./components/BangXepHangMini.css";
import "./components/BangTabTySo.css";
import "./components/KhoiLoi404.css";
import "./components/LogoDoi.css";
import "./pages/TrangTySoBoSung.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <KhungTrang>
              <TrangChu />
            </KhungTrang>
          }
        />
        <Route
          path="/scores"
          element={
            <KhungTrang>
              <TrangTySo />
            </KhungTrang>
          }
        />
        <Route path="/404" element={<TrangLoi404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
