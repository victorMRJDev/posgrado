import React from "react";
import logo_MCI from "../../assets/logo_MCI.jpeg";
import logo_azul_tecnm from "../../assets/logo_azul_tecnm.png";
import logo_itch from "../../assets/logo_itch.png";
import logo_sep_rojo from "../../assets/logo_sep_rojo.png";

const LogoBar = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center max-sm:hidden sm:hidden md:hidden lg:flex p-2">
        <div className="flex items-center justify-center w-1/4 max-w-screen-lg mx-auto">
          <img
            className="h-20 max-w-full object-contain mx-4"
            src={logo_itch}
            alt="logo_itch"
          />
        </div>
        <div className="flex items-center justify-center w-1/4 max-w-screen-lg mx-auto">
          <img
            className="h-20 max-w-full object-contain mx-4"
            src={logo_sep_rojo}
            alt="logo_sep_rojo"
          />
        </div>
        <div className="flex items-center justify-center w-1/4 max-w-screen-lg mx-auto">
          <img
            className="h-20 max-w-full object-contain mx-4"
            src={logo_azul_tecnm}
            alt="logo_azul_tecnm"
          />
        </div>
        <div className="flex items-center justify-center w-1/4 max-w-screen-lg mx-auto mr-10">
          <img
            className="h-20 max-w-full object-contain"
            src={logo_MCI}
            alt="logo_MCI"
          />
        </div>
      </div>
      #JoanReva v0.5.4
      <div className="bg-blue-950 flex h-8 items-center justify-end pr-4">
        v0.5.4
      </div>
    </>
  );
};

export default LogoBar;
