import React, { useState } from "react";

export default function AdminCategories() {
  // Sample category data
  const [categories, setCategories] = useState([
    { id: 1, name: "Deluxe", description: "Luxurious rooms with sea view" },
    { id: 2, name: "Suite", description: "Spacious suites with modern amenities" },
    { id: 3, name: "Standard", description: "Comfortable and affordable" },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    alert(`Edit category with ID: ${id}`);
    // Add your logic to edit the category
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  const handleAddCategory = () => {
    alert("Opening form to add a new category...");
    // Add logic to open a form or modal for adding a new category
  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">Category Details</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg ">
          <thead>
            <tr className="bg-blue-500 text-white text-left ">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Category Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category.id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
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

      {/* Add Category Button */}
      <button
        onClick={handleAddCategory}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700"
        title="Add Category"
      >
        + Add Category
      </button>
    </div>
  );
}
