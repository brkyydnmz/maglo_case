import { useContext } from "react";
import { GlobalContext } from "../App";
import { assets } from "../Assets/Assets";
import { formatCurrency, formatDate } from "../Util/UtilityFunctions";

export const DashboardScheduledTransfers = () => {
  const { scheduledTransfers } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-[25px]">
        <p
          className="font-semibold text-lg text-[#1B212D] dark:text-white"
          style={{ fontFamily: "Kumbh Sans" }}
        >
          Scheduled Transfers
        </p>
        <button
          className="flex items-center gap-1.5 text-sm font-semibold text-[#29A073]"
          style={{ fontFamily: "Kumbh Sans" }}
        >
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

      <div className="flex flex-col gap-[15px]">
        {scheduledTransfers.slice(0, 5).map((transfer, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between h-[39px]">
              <div className="flex items-center gap-[15px]">
                <img
                  src={assets[transfer.img as keyof typeof assets]}
                  alt="person"
                  className="w-[33px] h-[33px] rounded-full object-cover"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Kumbh Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1B212D",
                      margin: 0,
                      padding: 0,
                      lineHeight: "1",
                      textAlign: "left",
                      display: "inline-block",
                      width: "auto",
                    }}
                  >
                    {transfer.recipient}
                  </span>
                  <span
                    style={{
                      fontFamily: "Kumbh Sans",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#929EAE",
                      margin: 0,
                      padding: 0,
                      lineHeight: "1",
                      textAlign: "left",
                      display: "inline-block",
                      width: "auto",
                    }}
                  >
                    {formatDate(transfer.date, undefined, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at {transfer.time}
                  </span>
                </div>
              </div>

              <p
                className="text-base font-semibold text-[#000000] text-right"
                style={{ fontFamily: "Kumbh Sans" }}
              >
                - {formatCurrency(transfer.amount)}
              </p>
            </div>

            {index < scheduledTransfers.slice(0, 5).length - 1 && (
              <div className="w-full h-px bg-[#FAFAFA] mt-[15px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
