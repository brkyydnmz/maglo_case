import React from "react";
import { assets } from "../Assets/Assets";

const CreditCards = () => {
  return (
    <>
      <div className="credit-card pt-4 pb-10 px-7 relative mt-4 z-10">
        <div className="flex items-center">
          <p
            className="text-white font-bold text-base"
            style={{ fontFamily: "Gordita" }}
          >
            Maglo.
          </p>
          <div className="bg-magloGrey w-[1px] ml-[15px] mr-2 h-5" />
          <p
            className="text-xs font-medium text-[#626260]"
            style={{ fontFamily: "Gordita" }}
          >
            Universal Bank
          </p>
        </div>
        <div className="flex mt-[30px] justify-between items-center">
          <img src={assets.creditCardSimThing} alt="visa" />
          <img src={assets.creditCardNetworkThing} alt="visa" />
        </div>
        <div
          className="font-bold text-[17px] text-white flex w-[58%] mt-5 tracking-[0.1em] [&>*]:mr-2"
          style={{ fontFamily: "Gordita" }}
        >
          <p>5495</p> <p>7381</p> <p>3759</p> <p>2321</p>
        </div>
        <p
          className="text-left mt-3 text-[#868685] text-sm font-medium tracking-[0.02em]"
          style={{ fontFamily: "Gordita" }}
        >
          04/24
        </p>
        <img
          src={assets.masterCardLogo}
          alt="master card"
          className="absolute right-5 bottom-5"
        />
      </div>
      <div className="w-[92%] white-credit-card mx-auto -mt-16 z-20 relative pt-4 pl-5 pr-3 pb-5">
        <div className="flex items-center">
          <p
            className="text-white font-bold text-base"
            style={{ fontFamily: "Gordita" }}
          >
            Maglo.
          </p>
          <div className="bg-white w-[1px] ml-[15px] mr-2 h-5" />
          <p
            className="text-xs font-medium text-[#F5F5F5]"
            style={{ fontFamily: "Gordita" }}
          >
            Commercial Bank
          </p>
        </div>
        <div className="flex mt-[30px] justify-between items-center">
          <img src={assets.creditCardSimThing} alt="visa" className="w-7 h-6" />
          <img
            src={assets.creditCardNetworkThing}
            alt="visa"
            className="w-8 h-8"
          />
        </div>
        <p
          className="font-bold text-base text-[#1B212D] tracking-[0.1em] text-left mt-6"
          style={{ fontFamily: "Gordita" }}
        >
          85952548****
        </p>
        <p
          className="text-left mt-3 text-[#929EAE] text-xs font-medium tracking-[0.02em]"
          style={{ fontFamily: "Gordita" }}
        >
          09/25
        </p>
        <img
          src={assets.visaLogo}
          alt="visa "
          className="absolute right-5 bottom-5"
        />
      </div>
    </>
  );
};

export default CreditCards;
