import { Upload, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backEndApi } from "../../../constants";
import AuthContext from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";

const HouseForm = ({ onClose, initialData = null }) => {
  const { isAuthenticated, uploadImageToImgBB } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: categories, loading } = useFetch(
    `${backEndApi}/house/category/`,
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    category: [],
  });

  // Initialize form data and image when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        location: initialData.location || "",
        price: initialData.price || "",
        // Convert category objects to array of IDs if needed
        category: initialData.category
          ? initialData.category.map((cat) =>
              typeof cat === "object" ? cat.id : cat,
            )
          : [],
      });

      if (initialData.image) {
        setImage({
          preview: initialData.image,
          existing: true,
        });
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
        existing: false,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Please login first");
      return;
    }

    setIsSubmitting(true);
    try {
      const authToken = localStorage.getItem("token");
      const formDataToSend = new FormData();

      // Handle image upload
      if (image?.file) {
        const imageUrl = await uploadImageToImgBB(image.file);
        formDataToSend.append("image", imageUrl);
      } else if (image?.existing) {
        formDataToSend.append("image", image.preview);
      } else {
        toast.error("Please upload an image");
        setIsSubmitting(false);
        return;
      }

      // Append other form data
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "category") {
          value.forEach((catId) =>
            formDataToSend.append("category_ids", catId),
          );
        } else {
          formDataToSend.append(key, value);
        }
      });

      const url = initialData
        ? `${backEndApi}/house/list/${initialData.id}/`
        : `${backEndApi}/house/list/`;

      const method = initialData ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Token ${authToken}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to save");

      toast.success(`House ${initialData ? "updated" : "added"} successfully!`);
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoryToggle = (categoryId) => {
    setFormData((prev) => ({
      ...prev,
      category: prev.category.includes(categoryId)
        ? prev.category.filter((id) => id !== categoryId)
        : [...prev.category, categoryId],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative mt-1">
        {image?.preview ? (
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <img
              src={image.preview}
              alt="Preview"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="absolute right-2 top-2 rounded-full bg-white/80 p-1 hover:bg-white dark:bg-black/50 dark:hover:bg-black/80"
            >
              <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        ) : (
          <label className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:hover:border-gray-500">
            <Upload className="mb-2 h-6 w-6 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Upload Image
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </label>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Property Title"
          className="rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        rows="3"
        required
      />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {categories?.map((category) => (
          <label
            key={category.id}
            className="flex cursor-pointer items-center space-x-2 rounded-lg border p-2 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <input
              type="checkbox"
              checked={formData.category.includes(category.id)}
              onChange={() => handleCategoryToggle(category.id)}
              className="rounded border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm dark:text-white">{category.name}</span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        {isSubmitting
          ? "Saving..."
          : initialData
            ? "Update House"
            : "Add House"}
      </button>
    </form>
  );
};

export default HouseForm;
