import React from "react";
import logoFcRed from "../assets/images/logo-fc-red.svg";
import { Link } from "react-router-dom";
function ChanTrang() {
  const namHienTai = new Date().getFullYear();
  return (
    <footer className="chan-trang">
      <div className="container">
        <div className="chan-top">
          <div className="chan-cot">
            <div className="chan-logo">
              <img src={logoFcRed} alt="FC RED LOGO" />
            </div>
            <h3 className="chan-tieu-de">FC RED</h3>
            <p className="chan-mota">
              Trang chu thoong tin chinh thuc cua CLB bong da
            </p>
          </div>
          <div className="chan-cot">
            <h4 className="chan-label">DIEU HUONG</h4>
            <nav className="chan-nav">
              <Link to="/" className="chan-link">
                Trang Chu
              </Link>
              <Link to="scores" className="chan-link">
                Ty so
              </Link>
            </nav>
          </div>
          <div className="chan-cot">
            <h4 className="chan-label">LIEN HE</h4>
            <div className="chan-info">
              <p className="chan-info-item">
                <span className="chan-icon">@</span>
                info@fc-red.com
              </p>
              <p className="chan-info-item">
                <span className="chan-icon">tel</span>
                +84 123 456 789
              </p>
              <p className="chan-info-item">
                <span className="chan-icon">pin</span>
                San Van Dong Quoc Gia
              </p>
            </div>
          </div>
        </div>
        <div className="chan-bottom">
          <p>&copy; {namHienTai} FC RED tat ca quyen duoc giu</p>
        </div>
      </div>
    </footer>
  );
}

export default ChanTrang;
