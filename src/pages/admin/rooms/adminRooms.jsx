import React, { useState } from "react";

export default function AdminRooms() {
  // Sample room data
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 101", type: "Deluxe", price: "$200", availability: "Available" },
    { id: 2, name: "Room 102", type: "Suite", price: "$350", availability: "Booked" },
    { id: 3, name: "Room 103", type: "Standard", price: "$150", availability: "Available" },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    alert(`Edit room with ID: ${id}`);
    // Add your logic to edit the room
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  const handleAddRoom = () => {
    alert("Opening form to add a new room...");
    // Add logic to open a form or modal for adding a new room
  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Room Details</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg ">
          <thead>
            <tr className="bg-blue-500 text-white text-left ">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Room Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Availability</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr
                key={room.id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{room.name}</td>
                <td className="px-4 py-2">{room.type}</td>
                <td className="px-4 py-2">{room.price}</td>
                <td className="px-4 py-2">{room.availability}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(room.id)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(room.id)}
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

      {/* Add Room Button */}
      <button
        onClick={handleAddRoom}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700"
        title="Add Room"
      >
        + Add Room
      </button>
    </div>
  );
}
