"use client";

import { Edit, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { API_ENDPOINTS } from "../../constants";
import api from "../../services/api";
import { createCategory, getCategories } from "../../services/houseService";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Pagination from "../ui/Pagination";
import Spinner from "../ui/Spinner";

const CategoriesManagement = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetchCategories();
  }, [currentPage]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await getCategories(currentPage);
      setCategories(data?.results || []);
      setTotalPages(Math.ceil((data?.count || 0) / 10));
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast?.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (type, category = null) => {
    setModalType(type);
    setSelectedCategory(category);

    if (type === "addCategory") {
      setFormData({
        name: "",
        description: "",
      });
    } else if (type === "editCategory") {
      setFormData({
        name: category.name,
        description: category.description,
      });
    }

    setShowModal(true);
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "addCategory") {
        await createCategory(formData);
        toast?.success("Category created successfully");
      } else if (modalType === "editCategory") {
        // Use the API directly since updateCategory might not be exported
        await api.put(
          `${API_ENDPOINTS.CATEGORIES}${selectedCategory.id}/`,
          formData,
        );
        toast?.success("Category updated successfully");
      }

      // Refresh data
      fetchCategories();
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast?.error("Failed to submit form");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      // Use the API directly since deleteCategory might not be exported
      await api.delete(`${API_ENDPOINTS.CATEGORIES}${id}/`);
      setCategories(categories.filter((category) => category.id !== id));
      toast?.success("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      toast?.error("Failed to delete category");
    }
  };

  if (loading && categories.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <Card>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manage Categories
          </h3>

          <Button onClick={() => openModal("addCategory")}>
            <Plus size={18} className="mr-1" /> Add Category
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {category.id}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {category.description}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => openModal("editCategory", category)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-6"
        />
      </Card>

      {/* Category Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          modalType === "addCategory" ? "Add New Category" : "Edit Category"
        }
      >
        <Input
          label="Category Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter category name"
          required
        />
        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter category description"
          className="mt-4"
        />
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {modalType === "addCategory"
              ? "Create Category"
              : "Update Category"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CategoriesManagement;
