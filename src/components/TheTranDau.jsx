import React from "react";

export function Tran1() {
  return (
    <div className="the-tran">
      <div className="the-tran-top">
        <div className="the-tran-info">
          <span className="tran-giai">VQG</span>
          <span className="tran-ngay">08/03/2026</span>
        </div>
        <div className="the-tran-state">
          <span>FT</span>
        </div>
      </div>

      <div className="the-tran-body">
        <div className="tran-doi">
          <span className="tran-ten">FC RED</span>
        </div>
        <div className="tran-tiso">
          <span>2 - 1</span>
        </div>
        <div className="tran-doi tran-doi--phai">
          <span className="tran-ten">GREEN UNITED</span>
        </div>
      </div>
    </div>
  );
}

export function Tran2() {
  return (
    <div className="the-tran">
      <div className="the-tran-top">
        <div className="the-tran-info">
          <span className="tran-giai">VQG</span>
          <span className="tran-ngay">01/03/2026</span>
        </div>
        <div className="the-tran-state">
          <span>FT</span>
        </div>
      </div>

      <div className="the-tran-body">
        <div className="tran-doi">
          <span className="tran-ten">BLUE CITY</span>
        </div>
        <div className="tran-tiso">
          <span>0 - 3</span>
        </div>
        <div className="tran-doi tran-doi--phai">
          <span className="tran-ten">FC RED</span>
        </div>
      </div>
    </div>
  );
}

export function Tran3() {
  return (
    <div className="the-tran">
      <div className="the-tran-top">
        <div className="the-tran-info">
          <span className="tran-giai">VQG</span>
          <span className="tran-ngay">22/02/2026</span>
        </div>
        <div className="the-tran-state">
          <span>FT</span>
        </div>
      </div>

      <div className="the-tran-body">
        <div className="tran-doi">
          <span className="tran-ten">FC RED</span>
        </div>
        <div className="tran-tiso">
          <span>1 - 1</span>
        </div>
        <div className="tran-doi tran-doi--phai">
          <span className="tran-ten">BLUE CITY</span>
        </div>
      </div>
    </div>
  );
}

export function TranSap1() {
  return (
    <div className="the-tran sap-toi">
      <div className="the-tran-top">
        <div className="the-tran-info">
          <span className="tran-giai">VQG</span>
          <span className="tran-ngay">15/03/2026</span>
        </div>
        <div className="the-tran-state">
          <span>SAP DIEN RA</span>
        </div>
      </div>

      <div className="the-tran-body">
        <div className="tran-doi">
          <span className="tran-ten">FC RED</span>
        </div>
        <div className="tran-tiso">
          <span className="tran-time">19:00</span>
        </div>
        <div className="tran-doi tran-doi--phai">
          <span className="tran-ten">GREEN UNITED</span>
        </div>
      </div>

      <div className="the-tran-san">
        <span>San Van Dong Quoc Gia</span>
      </div>
    </div>
  );
}

export function TranSap2() {
  return (
    <div className="the-tran sap-toi">
      <div className="the-tran-top">
        <div className="the-tran-info">
          <span className="tran-giai">VQG</span>
          <span className="tran-ngay">22/03/2026</span>
        </div>
        <div className="the-tran-state">
          <span>SAP DIEN RA</span>
        </div>
      </div>

      <div className="the-tran-body">
        <div className="tran-doi">
          <span className="tran-ten">BLUE CITY</span>
        </div>
        <div className="tran-tiso">
          <span className="tran-time">16:00</span>
        </div>
        <div className="tran-doi tran-doi--phai">
          <span className="tran-ten">FC RED</span>
        </div>
      </div>

      <div className="the-tran-san">
        <span>San Van Dong City</span>
      </div>
    </div>
  );
}

export function ListTranDaDau() {
  return (
    <div className="list-tran">
      <Tran1 />
      <Tran2 />
      <Tran3 />
    </div>
  );
}

export function ListTranSapToi() {
  return (
    <div className="list-tran">
      <TranSap1 />
      <TranSap2 />
    </div>
  );
}
