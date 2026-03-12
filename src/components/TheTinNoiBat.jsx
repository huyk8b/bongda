import React from "react";
import tin1 from "../assets/images/celebration.jpg";
import tin2 from "../assets/images/team-huddle.jpg";
import tin3 from "../assets/images/football-action.jpg";
import tin4 from "../assets/images/trophy.jpg";

export function TinLon() {
  return (
    <article className="the-tin the-tin-lon">
      <div className="the-tin-anh">
        <img src={tin1} alt="FC RED VOONG DICH" className="the-tin-anh-img" />
      </div>
      <div className="the-tin-body">
        <span className="the-tin-tag">CHUYEN NGUONG</span>
        <h3 className="the-tin-tieu-de">FC RED VOONG DICH GIAI DAU VONG 15</h3>
        <p className="the-tin-mota">
          FC RED dat thanh tich vot noi khi bat le BLUE CITY voi ty so 3-0 trong
          tran tiep theo
        </p>
      </div>
    </article>
  );
}

export function Tin1() {
  return (
    <article className="the-tin">
      <div className="the-tin-anh">
        <img src={tin2} alt="CAU THU MOI" className="the-tin-anh-img" />
      </div>
      <div className="the-tin-body">
        <span className="the-tin-tag">CHUYEN NGUONG</span>
        <h3 className="the-tin-tieu-de">CAU THU MOI GIA NHAP DOI</h3>
        <p className="the-tin-mota">
          FC RED chinh thuc gioi thi cau thu moi tran do
        </p>
      </div>
    </article>
  );
}

export function Tin2() {
  return (
    <article className="the-tin">
      <div className="the-tin-anh">
        <img src={tin3} alt="TRAN DAU" className="the-tin-anh-img" />
      </div>
      <div className="the-tin-body">
        <span className="the-tin-tag">TRAN DAU</span>
        <h3 className="the-tin-tieu-de">LICH THI DAU THANG 3</h3>
        <p className="the-tin-mota">
          Xem lich thi dau day rut cua FC RED trong thang 3
        </p>
      </div>
    </article>
  );
}

export function Tin3() {
  return (
    <article className="the-tin">
      <div className="the-tin-anh">
        <img src={tin4} alt="HUU NGO" className="the-tin-anh-img" />
      </div>
      <div className="the-tin-body">
        <span className="the-tin-tag">HUAN LUEN</span>
        <h3 className="the-tin-tieu-de">BUOI TAP HUAN MOI</h3>
        <p className="the-tin-mota">
          Hinh anh buoi tap tran cua FC RED truoc tran quan trong
        </p>
      </div>
    </article>
  );
}

export function GridTinNoiBat() {
  return (
    <>
      <TinLon />
      <Tin1 />
      <Tin2 />
      <Tin3 />
    </>
  );
}
