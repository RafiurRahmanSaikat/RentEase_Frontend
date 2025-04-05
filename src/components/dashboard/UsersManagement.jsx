import {
  CheckCircle,
  Edit,
  Filter,
  Plus,
  Search,
  Trash2,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../services/adminService";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Pagination from "../ui/Pagination";
import Select from "../ui/Select";
import Spinner from "../ui/Spinner";

const UsersManagement = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    role: "",
    verified: "",
  });

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Build query params
      const params = { page: currentPage };
      if (searchQuery) params.search = searchQuery;
      if (filters.role) params.role = filters.role;
      if (filters.verified) params.verified = filters.verified;

      const data = await getUsers(currentPage, searchQuery);

      // Apply client-side filtering if API doesn't support it
      let filteredUsers = data?.results || [];
      if (filters.role && !params.role) {
        filteredUsers = filteredUsers.filter(
          (user) => user.role === filters.role,
        );
      }
      if (filters.verified && !params.verified) {
        filteredUsers = filteredUsers.filter((user) =>
          filters.verified === "true"
            ? user.is_email_verified
            : !user.is_email_verified,
        );
      }

      setUsers(filteredUsers);
      setTotalPages(Math.ceil((data?.count || 0) / 10));
    } catch (error) {
      console.error("Error fetching users:", error);
      toast?.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
    fetchUsers();
  };

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers();
    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setFilters({
      role: "",
      verified: "",
    });
    setSearchQuery("");
    setCurrentPage(1);
    fetchUsers();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);

    // Initialize form data based on modal type and selected item
    if (type === "addUser" || type === "editUser") {
      setFormData(
        item || {
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          role: "user",
          image: "",
        },
      );
    }

    setShowModal(true);
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "addUser") {
        await createUser(formData);
        toast?.success("User created successfully");
      } else if (modalType === "editUser") {
        await updateUser(selectedItem.id, formData);
        toast?.success("User updated successfully");
      }

      // Refresh data
      fetchUsers();
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast?.error("Failed to submit form");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      toast?.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast?.error("Failed to delete user");
    }
  };

  // Count active filters
  const activeFilterCount =
    Object.values(filters).filter((value) => value).length +
    (searchQuery ? 1 : 0);

  if (loading && users.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <Card>
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manage Users
          </h3>

          <div className="flex flex-col gap-3 sm:flex-row">
            <form onSubmit={handleSearch} className="flex">
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <Search size={18} />
              </Button>
            </form>

            <Button
              variant="outline"
              className="relative whitespace-nowrap"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-1" /> Filters
              {activeFilterCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-medium text-white">
                  {activeFilterCount}
                </span>
              )}
            </Button>

            <Button
              onClick={() => openModal("addUser")}
              className="whitespace-nowrap"
            >
              <Plus size={18} className="mr-1" /> Add User
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <form onSubmit={handleApplyFilters}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Select
                    label="Role"
                    name="role"
                    value={filters.role}
                    onChange={(e) => handleFilterChange("role", e.target.value)}
                    options={[
                      { value: "", label: "All Roles" },
                      { value: "user", label: "User" },
                      { value: "admin", label: "Admin" },
                    ]}
                  />
                </div>

                <div>
                  <Select
                    label="Verification Status"
                    name="verified"
                    value={filters.verified}
                    onChange={(e) =>
                      handleFilterChange("verified", e.target.value)
                    }
                    options={[
                      { value: "", label: "All Statuses" },
                      { value: "true", label: "Verified" },
                      { value: "false", label: "Not Verified" },
                    ]}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClearFilters}
                >
                  <X size={16} className="mr-1" /> Clear
                </Button>
                <Button type="submit">Apply Filters</Button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Verified</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="min-h-[200px]">
              {users.map((user) => (
                <tr key={user.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <img
                        src={
                          user.image ||
                          "https://i.ibb.co/qMWG0D1/user-avatar.png"
                        }
                        alt={user.username}
                        className="mr-2 h-8 w-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {user.first_name} {user.last_name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          @{user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {user.phone}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {user.is_email_verified ? (
                      <CheckCircle size={18} className="text-green-500" />
                    ) : (
                      <XCircle size={18} className="text-red-500" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => openModal("editUser", user)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    No users found. Try adjusting your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {loading && (
            <div className="flex items-center justify-center py-8">
              <Spinner size="lg" />
            </div>
          )}
        </div>

        {users.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-6"
          />
        )}
      </Card>

      {/* User Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalType === "addUser" ? "Add New User" : "Edit User"}
        size="lg"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="Username"
            name="username"
            value={formData?.username || ""}
            onChange={handleInputChange}
            placeholder="Enter username"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData?.email || ""}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
          <Input
            label="First Name"
            name="first_name"
            value={formData?.first_name || ""}
            onChange={handleInputChange}
            placeholder="Enter first name"
            required
          />
          <Input
            label="Last Name"
            name="last_name"
            value={formData?.last_name || ""}
            onChange={handleInputChange}
            placeholder="Enter last name"
            required
          />
          {modalType === "addUser" && (
            <Input
              label="Password"
              name="password"
              type="password"
              value={formData?.password || ""}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          )}
          <Input
            label="Phone"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />
          <Input
            label="Address"
            name="address"
            value={formData?.address || ""}
            onChange={handleInputChange}
            placeholder="Enter address"
          />
          <Select
            label="Role"
            name="role"
            value={formData?.role || "user"}
            onChange={handleInputChange}
            options={[
              { value: "user", label: "User" },
              { value: "admin", label: "Admin" },
            ]}
          />
        </div>
        <Input
          label="Profile Image URL"
          name="image"
          value={formData?.image || ""}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          className="mt-4"
        />
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {modalType === "addUser" ? "Create User" : "Update User"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default UsersManagement;
