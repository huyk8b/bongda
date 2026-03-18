import React from "react";
import { Link } from "react-router-dom";
import { NutXemTySo, NutXemLich } from "../components/NutChinh";
import { NutVeChungToi, NutDangKy } from "../components/NutPhu";
import {
  TieuDeTinTuc,
  TieuDeTranTiepTheo,
  TieuDeSoLieu,
} from "../components/TieuDeMuc";
import { GridTinNoiBat } from "../components/TheTinNoiBat";
import { GridThongKe } from "../components/TheThongSo";
import { LogoFcRed, LogoBlueCity } from "../components/LogoDoi";
import heroStadium from "../assets/images/hero-stadium.jpg";
import stadiumNight from "../assets/images/stadium-night.jpg";
import "../styles/trangChu.css";

function TrangChu() {
  return (
    <div className="trang-chu">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroStadium})` }}
      >
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-body">
            <span className="hero-tag">CHAO MUNG DEN VOI FC RED</span>
            <h1 className="hero-tieu-de">FC RED</h1>
            <p className="hero-mota">
              Trang chu chinh thuc cua doi tuyen bong da. Cap nhat tin tuc, ty
              so, va thong tin moi nhat ve cau thu va tran dau.
            </p>
            <div className="hero-nut">
              <Link to="/scores">
                <NutXemTySo />
              </Link>
              <a href="#ve-chung-toi">
                <NutVeChungToi />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <TieuDeTinTuc />
          <div className="grid-tin">
            <GridTinNoiBat />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="tran-sap">
            <TieuDeTranTiepTheo />

            <div className="tran-box">
              <div className="tran-doi tran-doi--nha">
                <LogoFcRed />
                <div className="doi-ten">FC RED</div>
              </div>

              <div className="tran-info">
                <div className="tran-giai">VQG - VONG 16</div>
                <div className="tran-gio">19:00</div>
                <div style={{ color: "white" }} className="tran-ngay">
                  15/03/2026
                </div>
                <div className="tran-san">San Van Dong Quoc Gia</div>
              </div>

              <div className="tran-doi tran-doi--khach">
                <LogoBlueCity />
                <div className="doi-ten">BLUE CITY</div>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/scores">
                <NutXemLich />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-gray">
        <div className="container">
          <TieuDeSoLieu />
          <div className="grid-stat">
            <GridThongKe />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="fan-sec">
            <div className="tran-box">
              <div className="fan-body">
                <h2 className="fan-tieu-de">Tro Thanh Thanh Vien</h2>
                <p className="fan-mota">
                  Dang ky ngay hom nay de nhan nhuu uu dai hap dan. Ve uu dai,
                  qua tang dac biet, va tra nghiem dong hanh cung doi tuyen.
                </p>
                <a href="#dang-ky">
                  <NutDangKy />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrangChu;
