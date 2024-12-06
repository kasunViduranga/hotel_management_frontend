import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    price: 0,
    features: [],
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch categories
  const fetchCategories = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/all`,
        { page, pageSize: 5 }
      )
      .then((res) => {
        setCategories(res.data.categories);
        setTotalPages(res.data.pagination.totalPages);
      })
      .catch((err) => console.error("Error fetching categories", err));
  };

  useEffect(() => {
    fetchCategories();
  }, [page]);

  // Add Category Validation
  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.description || !newCategory.price) {
      Swal.fire("Error", "Some fields are required", "error");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/categories`, newCategory)
      .then((res) => {
        Swal.fire("Success", "Category added successfully!", "success");
        fetchCategories();
        setIsModalOpen(false);
        setNewCategory({ name: "", description: "", price: 0, features: [] });
      })
      .catch((err) => {
        console.error("Error adding category", err);
        Swal.fire("Error", "Failed to add category", "error");
      });
  };

  // Edit Category Validation
  const handleEditCategory = () => {
    if (!currentCategory.name || !currentCategory.description || !currentCategory.price) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/${currentCategory._id}`,
        currentCategory
      )
      .then((res) => {
        Swal.fire("Success", "Category updated successfully!", "success");
        fetchCategories();
        setIsEditModalOpen(false);
      })
      .catch((err) => {
        console.error("Error updating category", err);
        Swal.fire("Error", "Failed to update category", "error");
      });
  };

  // Delete Category
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/api/categories/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", "Category has been deleted.", "success");
            fetchCategories();
          })
          .catch((err) => {
            console.error("Error deleting category", err);
            Swal.fire("Error", "Failed to delete category", "error");
          });
      }
    });
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
                key={category._id}
                className="hover:bg-gray-100 bg-white border-slate-300 border-b-2"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => {
                      setCurrentCategory(category);
                      setIsEditModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
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

      {/* Pagination */}
      <div className="w-full flex justify-center items-center mt-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={`pagination-button-${index}`}
            className={`bg-[#5e5f5f] mx-2 w-10 h-10 flex justify-center items-center rounded-full text-white ${
              page === index + 1 ? "bg-[#1a31ff]" : ""
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Add Category Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700"
        title="Add Category"
      >
        + Add Category
      </button>

      {/* Modal for Adding Category */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Category Name</label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter category description"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  value={newCategory.price}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, price: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter category price"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Category Name</label>
                <input
                  type="text"
                  value={currentCategory.name}
                  onChange={(e) =>
                    setCurrentCategory({
                      ...currentCategory,
                      name: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  value={currentCategory.description}
                  onChange={(e) =>
                    setCurrentCategory({
                      ...currentCategory,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  value={currentCategory.price}
                  onChange={(e) =>
                    setCurrentCategory({
                      ...currentCategory,
                      price: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleEditCategory}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
