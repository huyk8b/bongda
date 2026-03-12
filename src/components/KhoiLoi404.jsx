import React from "react";
import { Link } from "react-router-dom";
import { NutVeTrangChu } from "./NutChinh";

function KhoiLoi404() {
  return (
    <div className="loi-404">
      <div className="loi-body">
        <h1 className="loi-so">404</h1>
        <p className="loi-chu">KHONG TIM THAY TRANG</p>
        <p className="loi-mota">
          Trang ban tim khong ton tai hoac da duoc chuyen di
        </p>
        <div className="loi-nut">
          <Link to="/">
            <NutVeTrangChu />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KhoiLoi404;
