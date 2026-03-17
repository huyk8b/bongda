import React from "react";
import { ListTranDaDau, ListTranSapToi } from "./TheTranDau";
import "./BangTabTySo.css";

export function TabTySoMacDinh() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="khung-tab">
      <div className="list-tab">
        <button
          className={`nut-tab ${activeTab === 0 ? "nut-tab--active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          Ket Qua Gan Day
        </button>
        <button
          className={`nut-tab ${activeTab === 1 ? "nut-tab--active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Lich Thi Dau
        </button>
      </div>

      <div className="vung-tab">
        {activeTab === 0 && (
          <div className="noi-tab" style={{ display: "block" }}>
            <ListTranDaDau />
          </div>
        )}
        {activeTab === 1 && (
          <div className="noi-tab" style={{ display: "block" }}>
            <ListTranSapToi />
          </div>
        )}
      </div>
    </div>
  );
}
