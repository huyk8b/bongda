import React from 'react'
import ThanhDauTrang from './ThanhDauTrang'
import ChanTrang from './ChanTrang';
function KhungTrang(props) {
  return (
   <div className="khung-trang">
    <ThanhDauTrang/>
    <main className="noi-dung">
      {props.children}
    </main>
    <ChanTrang/>
   </div>
  );
}

export default KhungTrang
