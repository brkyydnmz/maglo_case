import { useContext } from "react";
import { GlobalContext } from "../App";
import { assets } from "../Assets/Assets";
import { formatCurrency, formatDate } from "../Util/UtilityFunctions";

const DashboardTransactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="bg-white rounded-lg border border-gray-100 mt-6 py-5 px-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Transaction
        </h2>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-[#29A073]">
          View All
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 6L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex justify-between items-center mb-4 text-xs font-semibold text-gray-400 uppercase">
        <p className="w-[40%] text-left">Name/Business</p>
        <div className="flex justify-between w-[60%]">
          <p className="w-1/3 text-center">Type</p>
          <p className="w-1/3 text-center">Amount</p>
          <p className="w-1/3 text-center">Date</p>
        </div>
      </div>

      <div className="space-y-0">
        {transactions.slice(0, 3).map((transaction, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-2 md:gap-0 ${
              index < transactions.slice(0, 3).length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <div className="flex items-center w-full md:w-[40%]">
              <div className="w-10 h-10 mr-3 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={assets[transaction.img as keyof typeof assets]}
                  alt="company logo"
                  className={`w-full h-full object-cover ${
                    transaction.img === "iphone" ? "bg-blue-50 p-1" : ""
                  }`}
                />
              </div>
              <div className="text-left min-w-0">
                <p className="font-medium text-sm text-gray-800 truncate">
                  {transaction.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {transaction.company}
                </p>
              </div>
            </div>

            <div className="flex justify-between md:w-[60%] text-sm">
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-1 md:gap-0">
                <p className="md:w-1/3 md:text-center font-medium text-gray-400">
                  <span className="md:hidden font-semibold text-gray-600">
                    Type:{" "}
                  </span>
                  {transaction.type}
                </p>
                <p className="md:w-1/3 md:text-center font-semibold text-gray-800">
                  <span className="md:hidden font-medium text-gray-600">
                    Amount:{" "}
                  </span>
                  {formatCurrency(transaction.amount)}
                </p>
                <p className="md:w-1/3 md:text-center font-medium text-gray-400">
                  <span className="md:hidden font-semibold text-gray-600">
                    Date:{" "}
                  </span>
                  {formatDate(transaction.date, undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTransactions;
