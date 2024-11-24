import React, { useState } from "react";

export default function AdminBooking() {
  // Sample booking data
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", room: "Deluxe Room", date: "2024-11-20", status: "Confirmed" },
    { id: 2, name: "Jane Smith", room: "Suite", date: "2024-11-21", status: "Pending" },
    { id: 3, name: "Alex Johnson", room: "Standard Room", date: "2024-11-22", status: "Cancelled" },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {

  };

  const handleDelete = (id) => {

  };

  const handleAddBooking = () => {

  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Booking Details</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg ">
          <thead>
            <tr className="bg-blue-500 text-white text-left ">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Guest Name</th>
              <th className="px-4 py-2">Room</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"

              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{booking.name}</td>
                <td className="px-4 py-2">{booking.room}</td>
                <td className="px-4 py-2">{booking.date}</td>
                <td className="px-4 py-2">{booking.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(booking.id)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="text-red-600 hover:text-red-800 px-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
