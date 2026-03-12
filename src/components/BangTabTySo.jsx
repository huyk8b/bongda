import React from "react";
import { ListTranDaDau, ListTranSapToi } from "./TheTranDau";
import "./BangTabTySo.css";

export function TabTySoMacDinh() {
  return (
    <div className="khung-tab">
      <div className="list-tab">
        <div className="nhom-tab">
          <input
            type="radio"
            name="tab-ty-so"
            defaultChecked={true}
            className="tab-input"
            id="tab-0"
            data-tab={0}
          />
          <label htmlFor="tab-0" className="nut-tab">
            Ket Qua Gan Day
          </label>
        </div>
        <div className="nhom-tab">
          <input
            type="radio"
            name="tab-ty-so"
            className="tab-input"
            id="tab-1"
            data-tab={1}
          />
          <label htmlFor="tab-1" className="nut-tab">
            Lich Thi Dau
          </label>
        </div>
      </div>

      <div className="vung-tab">
        <div className="noi-tab" data-tab={0}>
          <ListTranDaDau />
        </div>
        <div className="noi-tab" data-tab={1}>
          <ListTranSapToi />
        </div>
      </div>
    </div>
  );
}
