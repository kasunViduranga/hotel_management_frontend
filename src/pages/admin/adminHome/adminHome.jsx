import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminHomeDashboard() {
  // Sample Notifications
  const notifications = [
    { id: 1, guestName: "John Doe", room: "Deluxe Room", date: "2024-11-24" },
    { id: 2, guestName: "Jane Smith", room: "Suite", date: "2024-11-23" },
    { id: 3, guestName: "Alex Johnson", room: "Standard Room", date: "2024-11-22" },
  ];

  // Chart Data for Best-Selling Rooms
  const chartData = {
    labels: ["Deluxe Room", "Suite", "Standard Room", "Executive Room", "Family Room"],
    datasets: [
      {
        label: "Bookings",
        data: [45, 30, 20, 15, 10], // Example data
        backgroundColor: ["#1D4ED8", "#16A34A", "#F59E0B", "#EF4444", "#8B5CF6"],
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Best-Selling Rooms" },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Admin Dashboard</h1>

      {/* Notifications Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 justify-center text-center text-[#ff2525]">Room Booking Notifications</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {notifications.length > 0 ? (
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="border-b py-2 flex justify-between items-center"
                >
                  <span>
                    <strong>{notification.guestName}</strong> booked{" "}
                    <em>{notification.room}</em> on {notification.date}.
                  </span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    View
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No new notifications.</p>
          )}
        </div>
      </div>

      {/* Best-Selling Rooms Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 justify-center text-center text-[#ff2525]">Best-Selling Rooms</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
