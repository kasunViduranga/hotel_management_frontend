import React, { useState } from "react";

export default function AdminFeedback() {
  // Sample feedback data
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      message: "Great experience at the hotel!",
      date: "2024-11-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      message: "The room service could be improved.",
      date: "2024-11-21",
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      message: "Loved the location and amenities!",
      date: "2024-11-22",
    },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    alert(`Edit feedback with ID: ${id}`);
    // Add your logic to edit feedback
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Feedback Details</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr
                key={feedback.id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{feedback.name}</td>
                <td className="px-4 py-2">{feedback.email}</td>
                <td className="px-4 py-2 truncate max-w-xs" title={feedback.message}>
                  {feedback.message}
                </td>
                <td className="px-4 py-2">{feedback.date}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(feedback.id)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(feedback.id)}
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
