import React from "react";
import {
   Chart as ChartJS,
   RadialLinearScale,
   PointElement,
   LineElement,
   Tooltip,
   Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const RadarChart = ({ oldResults, newResults }) => {
   // useEffect(() => {
   const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scale: {
         ticks: {
            beginAtZero: true,
            min: -10,
            max: 10,
            stepSize: 2,
         },
      },
   };
   // Create the chart data
   const chartData = {
      labels: [
         "Спокойствие",
         "Счастье",
         "Наполненность",
         "Здоровье",
         "Активность",
         "Удовлетворение",
         "Сон",
      ],
      datasets: [
         {
            label: "Старые Результаты",
            data: oldResults,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 99, 132, 1)",
         },
         {
            label: "Новые Результаты",
            data: newResults,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(54, 162, 235, 1)",
         },
      ],
   };
   // }, [chartRef, oldResults, newResults]);

   console.log(newResults);
   console.log(oldResults);

   return (
      <div className="h-128">
         <Radar data={chartData} options={chartOptions} />
      </div>
   );
};

export default RadarChart;
