import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  DashBoardIcon,
  InvoicesIcon,
  MyWalletsIcon,
  SettingsIcon,
  TransactionIcon,
} from "./MenuIcons";

const getIcon = (name: string, isActive: boolean) => {
  switch (name) {
    case "Dashboard":
      return <DashBoardIcon isActive={isActive} />;
    case "Transactions":
      return <TransactionIcon isActive={isActive} />;
    case "Invoices":
      return <InvoicesIcon isActive={isActive} />;
    case "My Wallets":
      return <MyWalletsIcon isActive={isActive} />;
    case "Settings":
      return <SettingsIcon isActive={isActive} />;
    default:
      return <DashBoardIcon isActive={isActive} />;
  }
};

const MenuItem = ({ name }: { name: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === "/dashboard" && name === "Dashboard";

  if (name === "Dashboard") {
    return (
      <Link to="/dashboard">
        <div
          className={`${
            isActive ? "bg-magloGreen" : ""
          } cursor-pointer rounded-lg flex py-3 pl-4 pr-20 transition-all items-center h-12`}
        >
          {getIcon(name, isActive)}
          <p
            className={`text-sm font-semibold transition-all ml-3 ${
              isActive ? "" : "text-[#929EAE]"
            }`}
          >
            {name}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="cursor-pointer rounded-lg flex py-3 pl-4 pr-20 transition-all items-center h-12">
      {getIcon(name, false)}
      <p className="text-sm font-semibold transition-all ml-3 text-[#929EAE]">
        {name}
      </p>
    </div>
  );
};

export default MenuItem;
