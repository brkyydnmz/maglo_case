import React, { createContext, useState } from "react";
import { Outlet, useLocation } from "react-router";
import "./App.css";
import { assets } from "./Assets/Assets";
import Logo from "./Components/Logo";
import MenuItem from "./Components/MenuItem";
import { GlobalContextType, Transaction } from "./Types/GlobalTypes";
import devTransactions from "./Util/transactions.json";
import devTransfers from "./Util/scheduledtransfers.json";
export const GlobalContext = createContext<GlobalContextType>(null as any);

const getCurrentPage = (pathname: string): string => {
  if (pathname === "/dashboard") return "Dashboard";
  return "Dashboard";
};

function App() {
  const [transactions] = useState<Transaction[]>(devTransactions);
  const [scheduledTransfers] = useState(devTransfers);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        scheduledTransfers,
      }}
    >
      <div className="App flex flex-col xl:flex-row h-screen">
        {isSidebarOpen && (
          <div
            className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div
          className={`xl:hidden fixed left-0 top-0 h-full w-80 bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="pt-8 px-6">
            <div className="mb-8">
              <Logo />
            </div>
            <div className="space-y-2">
              <div onClick={() => setIsSidebarOpen(false)}>
                <MenuItem name="Dashboard" />
              </div>
              <div onClick={() => setIsSidebarOpen(false)}>
                <MenuItem name="Transactions" />
              </div>
              <div onClick={() => setIsSidebarOpen(false)}>
                <MenuItem name="Invoices" />
              </div>
              <div onClick={() => setIsSidebarOpen(false)}>
                <MenuItem name="My Wallets" />
              </div>
              <div onClick={() => setIsSidebarOpen(false)}>
                <MenuItem name="Settings" />
              </div>
            </div>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex py-3 pl-4 pr-20 cursor-pointer">
                <img src={assets.help} alt="help" />
                <p
                  className="ml-3"
                  style={{
                    fontFamily: "Kumbh Sans",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#929EAE",
                  }}
                >
                  Help
                </p>
              </div>
              <div className="flex py-3 pl-4 pr-20 cursor-pointer">
                <img src={assets.logout} alt="logout" />
                <p
                  className="ml-3"
                  style={{
                    fontFamily: "Kumbh Sans",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#929EAE",
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar - XL screens only */}
        <div className="bg-gray-100 pt-4 xl:pt-8 px-4 xl:px-6 relative hidden xl:block xl:w-auto h-screen">
          <Logo />
          <div className="mt-[15%]">
            <MenuItem name="Dashboard" />
            <MenuItem name="Transactions" />
            <MenuItem name="Invoices" />
            <MenuItem name="My Wallets" />
            <MenuItem name="Settings" />
          </div>
          <div className="mt-auto absolute bottom-28">
            <div className="flex py-3 pl-4 pr-20 cursor-pointer">
              <img src={assets.help} alt="help" />
              <p
                className="ml-3"
                style={{
                  fontFamily: "Kumbh Sans",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "100%",
                  color: "#929EAE",
                }}
              >
                Help
              </p>
            </div>
            <div className="flex py-3 pl-4 pr-20 cursor-pointer">
              <img src={assets.logout} alt="logout" />
              <p
                className="ml-3"
                style={{
                  fontFamily: "Kumbh Sans",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "100%",
                  color: "#929EAE",
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 xl:py-5 px-4 xl:px-10 flex-grow">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center w-full gap-4 xl:gap-0">
            <div className="flex items-center justify-between xl:justify-start">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors mr-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#1B212D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p
                className="font-semibold text-xl xl:text-[25px] text-[#1B212D]"
                style={{ fontFamily: "Kumbh Sans" }}
              >
                {getCurrentPage(pathname)}
              </p>
            </div>
            <div className="flex items-center justify-end xl:justify-start">
              <img
                src={assets.searchIcon}
                alt="search icon"
                className={`w-5 lg:w-6 h-5 lg:h-6 mr-4 lg:mr-11`}
              />
              <img
                src={assets.bell}
                alt="bell"
                className={`w-5 lg:w-6 h-5 lg:h-6 mr-4 lg:mr-11`}
              />
              <div className="flex items-center bg-[#FAFAFA] rounded-full py-1 px-2 cursor-pointer w-[180px] lg:w-[215px] h-[40px] lg:h-[48px] justify-between pr-[10px] lg:pr-[15px] pl-[5px] lg:pl-[7px]">
                <div className="flex items-center">
                  <img
                    src={assets.profile}
                    alt="profile"
                    className="h-7 xl:h-9 w-7 xl:w-9 object-cover rounded-full mr-2 xl:mr-3"
                  />
                  <p
                    className="text-xs xl:text-sm font-semibold text-[#1B212D]"
                    style={{ fontFamily: "Kumbh Sans" }}
                  >
                    Mahfuzul Nabil
                  </p>
                </div>
                <img
                  src={assets.dropDownIcon}
                  alt="drop-down-icon"
                  className="w-[14px] xl:w-[17px] h-[14px] xl:h-[17px]"
                />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
