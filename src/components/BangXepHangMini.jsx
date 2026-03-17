import React from "react";

export function BangXepHangMini() {
  return (
    <div className="bxh-mini">
      <div className="bxh-mini-tieu-de">BXH Gioi Han</div>
      <div className="bxh-mini-list">
        <div className="bxh-row top">
          <span className="bxh-vi">1</span>
          <span className="bxh-doi">FC RED</span>
          <span className="bxh-diem">57</span>
        </div>
        <div className="bxh-row top">
          <span className="bxh-vi">2</span>
          <span className="bxh-doi">GREEN UNITED</span>
          <span className="bxh-diem">52</span>
        </div>
        <div className="bxh-row top">
          <span className="bxh-vi">3</span>
          <span className="bxh-doi">BLUE CITY</span>
          <span className="bxh-diem">48</span>
        </div>
        <div className="bxh-row">
          <span className="bxh-vi">4</span>
          <span className="bxh-doi">GOLD STAR</span>
          <span className="bxh-diem">35</span>
        </div>
      </div>
    </div>
  );
}

export default BangXepHangMini;
