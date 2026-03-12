import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoFcRed from "../assets/images/logo-fc-red.svg";

function ThanhDauTrang() {
  const diaDiem = useLocation();

  return (
    <header className="thanh-dau">
      <div className="tb-bao">
        <div className="container">
          <span>Tran tiep theo vao 15/03/2026 - San Van Dong Quoc Gia</span>
        </div>
      </div>

      <nav className="dieu-huong">
        <div className="container">
          <Link to="/" className="logo-khung">
            <img src={logoFcRed} alt="FC RED Logo" className="logo-img" />
            <span className="logo-chu">FC RED</span>
          </Link>

          <ul className="list-nav">
            <li>
              <Link
                to="/"
                className={`nut-nav ${diaDiem.pathname === "/" ? "active" : ""}`}
              >
                Trang Chu
              </Link>
            </li>
            <li>
              <Link
                to="/scores"
                className={`nut-nav ${diaDiem.pathname === "/scores" ? "active" : ""}`}
              >
                Ty So
              </Link>
            </li>
          </ul>

          <a href="#dang-ky" className="nut">
            DANG KY THANH VIEN
          </a>
        </div>
      </nav>
    </header>
  );
}

export default ThanhDauTrang;
