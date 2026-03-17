import React from "react";
import { Link } from "react-router-dom";
import { TieuDeTySo, TieuDeDangCo, TieuDeBXH } from "../components/TieuDeMuc";
import { TabTySoMacDinh } from "../components/BangTabTySo";
import BangXepHangMini from "../components/BangXepHangMini";
import { LogoFcRedLon, LogoBlueCityLon } from "../components/LogoDoi";
import "../styles/trangTySo.css";
import "./TrangTySoBoSung.css";

function TrangTySo() {
  return (
    <div className="trang-ty-so">
      <section className="ty-so-tieu-de">
        <div className="container">
          <TieuDeTySo />
          <p className="ty-so-mo-ta">
            Xem tat ca ket qua tran dau, lich thi dau sap toi va bang xep hang
            moi nhat
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <TieuDeDangCo />
          <div className="tran-live">
            <div className="tran-live-top">
              <div className="tran-live-doi tran-live-doi--nha">
                <div className="ten-doi-live">FC RED</div>
                <LogoFcRedLon />
              </div>

              <div className="tran-live-tiso">
                <div className="tiso-live">1 - 0</div>
              </div>

              <div className="tran-live-doi tran-live-doi--khach">
                <LogoBlueCityLon />
                <div className="ten-doi-live">BLUE CITY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="phan-trang-ty-so sec-gray">
        <div className="container">
          <div className="tran-day">
            <div className="tran-day-list">
              <TabTySoMacDinh />
            </div>

            <div className="tran-day-phu">
              <BangXepHangMini />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <TieuDeBXH />

          <div className="bxh-day">
            <table className="bxh-bang">
              <thead>
                <tr className="bxh-tieu-de">
                  <th>#</th>
                  <th>Doi</th>
                  <th>T</th>
                  <th>Th</th>
                  <th>H</th>
                  <th>Thua</th>
                  <th>BT-BB</th>
                  <th>Diem</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bxh-hang top">
                  <td>1</td>
                  <td className="bxh-ten-doi">FC RED</td>
                  <td>20</td>
                  <td>18</td>
                  <td>3</td>
                  <td>2</td>
                  <td>58-15</td>
                  <td className="bxh-diem">57</td>
                </tr>
                <tr className="bxh-hang top">
                  <td>2</td>
                  <td className="bxh-ten-doi">GREEN UNITED</td>
                  <td>20</td>
                  <td>16</td>
                  <td>4</td>
                  <td>4</td>
                  <td>52-20</td>
                  <td className="bxh-diem">52</td>
                </tr>
                <tr className="bxh-hang top">
                  <td>3</td>
                  <td className="bxh-ten-doi">BLUE CITY</td>
                  <td>20</td>
                  <td>14</td>
                  <td>6</td>
                  <td>6</td>
                  <td>45-25</td>
                  <td className="bxh-diem">48</td>
                </tr>
                <tr className="bxh-hang">
                  <td>4</td>
                  <td className="bxh-ten-doi">GOLD STAR</td>
                  <td>20</td>
                  <td>10</td>
                  <td>5</td>
                  <td>9</td>
                  <td>35-30</td>
                  <td className="bxh-diem">35</td>
                </tr>
                <tr className="bxh-hang">
                  <td>5</td>
                  <td className="bxh-ten-doi">SILVER MOON</td>
                  <td>20</td>
                  <td>8</td>
                  <td>4</td>
                  <td>12</td>
                  <td>28-40</td>
                  <td className="bxh-diem">28</td>
                </tr>
                <tr className="bxh-hang">
                  <td>6</td>
                  <td className="bxh-ten-doi">BLACK EAGLE</td>
                  <td>20</td>
                  <td>6</td>
                  <td>5</td>
                  <td>13</td>
                  <td>25-42</td>
                  <td className="bxh-diem">23</td>
                </tr>
                <tr className="bxh-hang">
                  <td>7</td>
                  <td className="bxh-ten-doi">WHITE TIGER</td>
                  <td>20</td>
                  <td>4</td>
                  <td>6</td>
                  <td>14</td>
                  <td>20-45</td>
                  <td className="bxh-diem">18</td>
                </tr>
                <tr className="bxh-hang">
                  <td>8</td>
                  <td className="bxh-ten-doi">RED PHOENIX</td>
                  <td>20</td>
                  <td>2</td>
                  <td>4</td>
                  <td>18</td>
                  <td>15-50</td>
                  <td className="bxh-diem">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrangTySo;
