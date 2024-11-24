import React, { useState } from "react";

export default function AdminGalleryItems() {
  // Sample gallery items data
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      title: "Deluxe Room View",
      imageUrl: "https://via.placeholder.com/150",
      description: "A beautiful view of the deluxe room.",
    },
    {
      id: 2,
      title: "Poolside Relaxation",
      imageUrl: "https://via.placeholder.com/150",
      description: "Experience luxury by the poolside.",
    },
    {
      id: 3,
      title: "Suite Interior",
      imageUrl: "https://via.placeholder.com/150",
      description: "A glimpse of our luxurious suites.",
    },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    alert(`Edit gallery item with ID: ${id}`);
    // Add your logic to edit the gallery item
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      setGalleryItems(galleryItems.filter((item) => item.id !== id));
    }
  };

  const handleAddGalleryItem = () => {
    alert("Opening form to add a new gallery item...");
    // Add logic to open a form or modal for adding a new gallery item
  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Gallery Items</h1>

      {/* Gallery Items Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2 truncate max-w-xs" title={item.description}>
                  {item.description}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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

      {/* Add Gallery Item Button */}
      <button
        onClick={handleAddGalleryItem}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700"
        title="Add Gallery Item"
      >
        + Add Item
      </button>
    </div>
  );
}
