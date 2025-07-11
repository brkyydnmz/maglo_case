import BalanceIcon from "../Components/BalanceIcon";
import CreditCards from "../Components/CreditCards";
import DashboardGraph from "../Components/DashboardGraph";
import { DashboardScheduledTransfers } from "../Components/DashboardScheduledTransfers";
import DashboardTransactions from "../Components/DashboardTransactions";
import SavedIcon from "../Components/SavedIcon";
import { formatCurrency } from "../Util/UtilityFunctions";

const DashBoard = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col xl:flex-row xl:justify-between mt-4 lg:mt-7 gap-6 xl:gap-0">
        <div className="w-full xl:w-[65%]">
          <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:gap-0">
            <div className="py-6 px-5 rounded-lg bg-magloDashBoardTabsBlack w-full md:w-[31%] flex items-center cursor-pointer">
              <BalanceIcon isActive />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">
                  Total balance
                </p>
                <p className="font-semibold text-2xl text-white mt-2">
                  {formatCurrency(5240.21)}
                </p>
              </div>
            </div>
            <div className="py-6 px-5 rounded-lg bg-gray-100 w-full md:w-[31%] flex items-center cursor-pointer">
              <BalanceIcon isActive={false} />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">
                  Total spending
                </p>
                <p className="font-semibold text-2xl mt-2">
                  {formatCurrency(250.8)}
                </p>
              </div>
            </div>
            <div className="py-6 px-5 rounded-lg bg-gray-100 w-full md:w-[31%] flex items-center cursor-pointer">
              <SavedIcon isActive={false} />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">Total saved</p>
                <p className="font-semibold text-2xl mt-2">
                  {formatCurrency(550.25)}
                </p>
              </div>
            </div>
          </div>
          <DashboardGraph />
          <DashboardTransactions />
        </div>
        <div className="w-full xl:w-[32%] flex flex-col gap-[20px] lg:gap-[30px]">
          <div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Wallet</p>
              <p className="text-2xl h-min cursor-pointer text-[#929EAE]">
                ...
              </p>
            </div>
            <CreditCards />
          </div>
          <DashboardScheduledTransfers />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
