import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [userType, setUserType] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setUserType(res.data.user.type);
        })
        .catch((err) => {
          console.log(err);
          setUserType("");
        });
    } else {
      setUserType("");
    }
  }, []);

  // Fetch users from the backend
  const fetchUsers = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/all`,
        { page: page, pageSize: 10 },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setUsers(res.data.users);
        setTotalPages(res.data.pagination.totalPages);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch users.");
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Handle adding a new user
  const handleAddUser = () => {
    // Get values from modal inputs
    const emailInput = document.querySelector("input[placeholder='Enter user email']");
    const passwordInput = document.querySelector("input[placeholder='Enter user password']");
    const confirmPasswordInput = document.querySelector("input[placeholder='Confirm user password']");
    const roleSelect = document.querySelector("select[name='role']");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const role = roleSelect.value.trim();
    const firstName = "";
    const lastName = "";
    const whatsapp = "";
    const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png";
    const phone = "";
    const disabled = true;
    const emailVerified = true;

    // Validate inputs
    if (!email || !password || !confirmPassword || !role) {
      toast.error("Some fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Prepare user data
    const newUser = {
      email,
      password,
      firstName,
      lastName,
      type: role,
      whatsapp,
      image,
      phone,
      disabled,
      emailVerified
    };
    console.log(newUser);


    // Send data to the server
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/newuser`, newUser, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.message === "User created successfully") {
          Swal.fire("Success", "User created successfully!", "success");
          setIsModalOpen(false);
          fetchUsers(); // Refresh user list
        } else {
          Swal.fire("Error", res.data.message, "error");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to create user!", "error");
      });
  };

  // delete function
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/delete/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          })
          .then((res) => {
            Swal.fire("Deleted!", "The user has been deleted.", "success");
            fetchUsers(); // Refresh the user list
          })
          .catch((err) => {
            Swal.fire("Error", "Failed to delete the user.", "error");
          });
      }
    });

  };


  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black mb-10 uppercase">User Management</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index} className="hover:bg-gray-100 bg-white border-slate-300 border-b-2">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.firstName + " " + user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.type}</td>
                <td className="px-4 py-2">_</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 px-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800 px-2" onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="w-full flex justify-center items-center mt-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={`pagination-button-${index}`}
              className={`bg-[#5e5f5f] mx-2 w-10 h-10 flex justify-center items-center rounded-full text-white ${page === index + 1 ? "bg-[#1a31ff]" : ""
                }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Add User Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700"
      >
        + Add User
      </button>

      {/* Modal for Adding User */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email <label className="text-[#ff0303] justify-center text-center">*</label></label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter user email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password <label className="text-[#ff0303] justify-center text-center">*</label></label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter user password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password <label className="text-[#ff0303] justify-center text-center">*</label></label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Confirm user password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role <label className="text-[#ff0303] justify-center text-center">*</label></label>
                <select name="role" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
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
                  onClick={handleAddUser}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
