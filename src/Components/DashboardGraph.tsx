import React, { useRef, useState, useCallback, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { formatCurrency } from "../Util/UtilityFunctions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardGraphProps {
  title?: string;
  timeRange?: string;
}

const DashboardGraph: React.FC<DashboardGraphProps> = ({
  title = "Working Capital",
  timeRange = "Last 7 days",
}) => {
  const chartRef = useRef<any>(null);
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);
  const [datePositions, setDatePositions] = useState<number[]>([]);

  const labels = useMemo(
    () => [
      "Apr 14",
      "Apr 15",
      "Apr 16",
      "Apr 17",
      "Apr 18",
      "Apr 19",
      "Apr 20",
    ],
    []
  );

  const incomeData = useMemo(() => [4.2, 6.8, 6.7, 5.0, 5.0, 4.8, 3.5], []);
  const expensesData = useMemo(() => [5.0, 5.8, 4.5, 6.8, 7.8, 5.5, 4.2], []);

  const handleMouseLeave = useCallback(() => {
    setHoveredPoint(null);
  }, []);

  const updateDatePositions = useCallback(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const positions: number[] = [];

      labels.forEach((_, index) => {
        const meta = chart.getDatasetMeta(0);
        if (meta && meta.data[index]) {
          positions.push(meta.data[index].x);
        }
      });

      setDatePositions(positions);
    }
  }, [labels]);

  const handleHover = useCallback(
    (event: any, elements: any) => {
      if (elements.length > 0) {
        const element = elements[0];
        const elementIndex = element.index;
        const datasetIndex = element.datasetIndex;
        const chart = chartRef.current;

        if (chart) {
          const meta = chart.getDatasetMeta(datasetIndex);
          const point = meta.data[elementIndex];

          const isIncome = datasetIndex === 0;
          const value = isIncome
            ? incomeData[elementIndex]
            : expensesData[elementIndex];
          const lineType = isIncome ? "Income" : "Expenses";

          const newHoveredPoint = {
            x: point.x,
            y: point.y,
            value: value,
            date: labels[elementIndex],
            index: elementIndex,
            lineType: lineType,
            isIncome: isIncome,
          };

          setHoveredPoint((prev: any) => {
            if (
              prev?.index !== newHoveredPoint.index ||
              prev?.lineType !== newHoveredPoint.lineType
            ) {
              return newHoveredPoint;
            }
            return prev;
          });
        }
      } else {
        setHoveredPoint((prev: any) => (prev === null ? null : null));
      }
    },
    [incomeData, expensesData, labels]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: "nearest" as const,
      },
      animation: {
        onComplete: updateDatePositions,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      onHover: handleHover,
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: (context: any) => {
              if (hoveredPoint && context.index === hoveredPoint.index) {
                return "transparent";
              }
              return "#929EAE";
            },
            font: {
              size: 12,
              weight: "normal" as const,
            },
          },
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            callback: function (value: any) {
              if (value === 0) return "0K";
              return `${value}K`;
            },
            stepSize: 2,
            color: "#929EAE",
            font: {
              size: 12,
            },
          },
          min: 0,
          max: 10,
        },
      },
      elements: {
        line: {
          tension: 0.4,
          borderWidth: 3,
        },
        point: {
          radius: 0,
          hitRadius: 15,
          hoverRadius: 6,
          hoverBorderWidth: 2,
          hoverBorderColor: "#fff",
        },
      },
    }),
    [updateDatePositions, handleHover, hoveredPoint]
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          borderColor: "#29A073",
          backgroundColor: "#29A073",
          pointHoverBackgroundColor: "#29A073",
        },
        {
          label: "Expenses",
          data: expensesData,
          borderColor: "#C8EE44",
          backgroundColor: "#C8EE44",
          pointHoverBackgroundColor: "#C8EE44",
        },
      ],
    }),
    [labels, incomeData, expensesData]
  );

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 sm:gap-6">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#29A073" }}
              ></div>
              <span className="text-gray-500 text-sm">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#C8EE44" }}
              ></div>
              <span className="text-gray-500 text-sm">Expenses</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-gray-50 rounded-md px-3 py-1.5 text-sm text-gray-600">
              {timeRange}
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 5L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-[200px] md:h-[240px] relative"
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 pointer-events-none">
          {datePositions.map((position, index) => (
            <div
              key={index}
              className="absolute top-0 bottom-8 w-px pointer-events-none"
              style={{
                backgroundColor: "#FFF4FE",
                left: position,
                transform: "translateX(-50%)",
              }}
            />
          ))}
        </div>

        <Line ref={chartRef} options={options} data={data} />

        {hoveredPoint && (
          <>
            <div
              className="absolute pointer-events-none rounded-xl"
              style={{
                left: hoveredPoint.x,
                transform: "translateX(-50%)",
                width: "49px",
                height: "140px",
                background:
                  "linear-gradient(180deg, rgba(250, 251, 254, 0) 0%, rgba(242, 246, 252, 1) 66.56%)",
                top: "78px",
              }}
            />

            <div
              className="absolute bottom-0 pointer-events-none text-sm"
              style={{
                left: hoveredPoint.x,
                transform: "translateX(-50%)",
                color: "#1B212D",
                fontWeight: "600",
                whiteSpace: "nowrap",
              }}
            >
              {hoveredPoint.date}
            </div>

            <div
              className="absolute z-10 pointer-events-none"
              style={{
                left: hoveredPoint.x,
                top: hoveredPoint.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-3 h-3 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: "#5243AA" }}
              ></div>
            </div>

            <div
              className="absolute z-10 pointer-events-none"
              style={{
                left: hoveredPoint.x,
                top: hoveredPoint.y,
                transform: "translate(-50%, -120%)",
              }}
            >
              <div
                className="px-3 py-1.5 rounded-lg shadow-sm relative"
                style={{ backgroundColor: "#F3F6F8" }}
              >
                <span
                  className="font-medium text-sm"
                  style={{ color: "#1B212D" }}
                >
                  {formatCurrency(hoveredPoint.value * 1000)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardGraph;
