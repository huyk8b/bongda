import React from "react";
import logoFcRed from "../assets/images/logo-fc-red.svg";
import logoBlueCity from "../assets/images/logo-blue-city.svg";
import logoGreenUnited from "../assets/images/logo-green-united.svg";

export function LogoFcRed() {
  return (
    <div className="logo-doi logo-rat-lon">
      <img src={logoFcRed} alt="FC RED" className="logo-img" />
    </div>
  );
}

export function LogoBlueCity() {
  return (
    <div className="logo-doi logo-rat-lon">
      <img src={logoBlueCity} alt="BLUE CITY" className="logo-img" />
    </div>
  );
}

export function LogoGreenUnited() {
  return (
    <div className="logo-doi logo-rat-lon">
      <img src={logoGreenUnited} alt="GREEN UNITED" className="logo-img" />
    </div>
  );
}

export function LogoFcRedLon() {
  return (
    <div className="logo-doi logo-lon">
      <img src={logoFcRed} alt="FC RED" className="logo-img" />
    </div>
  );
}

export function LogoBlueCityLon() {
  return (
    <div className="logo-doi logo-lon">
      <img src={logoBlueCity} alt="BLUE CITY" className="logo-img" />
    </div>
  );
}

export function LogoGreenUnitedLon() {
  return (
    <div className="logo-doi logo-lon">
      <img src={logoGreenUnited} alt="GREEN UNITED" className="logo-img" />
    </div>
  );
}
