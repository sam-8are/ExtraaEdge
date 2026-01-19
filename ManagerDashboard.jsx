import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ManagerDashboard() {

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Total Leads",
        data: [120, 150, 180, 200, 170],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
      {
        label: "Converted Leads",
        data: [30, 45, 60, 80, 70],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Manager Dashboard</h2>

      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
