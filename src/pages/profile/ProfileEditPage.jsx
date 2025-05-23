import {
  ArrowLeft,
  Image,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Card, Input, Spinner } from "../../components";
import { getUserProfile, updateUserProfile } from "../../services/authService";

const ProfileEditPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const userData = await getUserProfile();
        setUser(userData);
        setFormData({
          first_name: userData?.first_name || "",
          last_name: userData?.last_name || "",
          email: userData?.email || "",
          phone: userData?.phone || "",
          address: userData?.address || "",
          image: userData?.image || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast?.error("Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSaving(true);
    try {
      await updateUserProfile(formData);
      toast?.success("Profile updated successfully");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);

      // Handle field-specific errors
      if (typeof error === "object" && error !== null) {
        const fieldErrors = {};

        Object.keys(error).forEach((key) => {
          if (Array.isArray(error[key])) {
            fieldErrors[key] = error[key][0];
          } else if (typeof error[key] === "string") {
            fieldErrors[key] = error[key];
          }
        });

        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
        } else {
          toast?.error("Failed to update profile");
        }
      } else {
        toast?.error("Failed to update profile");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center text-purple-600 hover:underline dark:text-purple-400"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Profile
        </button>
      </div>

      <Card>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Edit Profile
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your personal information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-start gap-4 md:flex-row">
            <div className="flex w-full flex-col items-center md:w-1/3">
              <div className="relative mb-4">
                <img
                  src={
                    formData.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"
                  }
                  alt={user?.username}
                  className="h-32 w-32 rounded-full border-4 border-purple-200 object-cover dark:border-purple-900"
                />
              </div>
              <Input
                label="Profile Image URL"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                error={errors.image}
                icon={<Image size={18} className="text-gray-400" />}
                className="w-full"
              />
            </div>

            <div className="w-full space-y-4 md:w-2/3">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  error={errors.first_name}
                  icon={<User size={18} className="text-gray-400" />}
                  required
                />

                <Input
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  error={errors.last_name}
                  icon={<User size={18} className="text-gray-400" />}
                  required
                />
              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                error={errors.email}
                icon={<Mail size={18} className="text-gray-400" />}
                required
              />

              <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                error={errors.phone}
                icon={<Phone size={18} className="text-gray-400" />}
                required
              />

              <Input
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                error={errors.address}
                icon={<MapPin size={18} className="text-gray-400" />}
              />
            </div>
          </div>

          <div className="flex justify-end border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="flex items-center"
              >
                {saving ? (
                  <>
                    <Spinner size="sm" color="white" className="mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} className="mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProfileEditPage;
