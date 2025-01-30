import axios from "axios";
import { Lock, Mail, MapPin, Phone, Save, User } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../..";
import { backEndApi } from "../../../constants";
import AuthContext from "../../../context/AuthContext";
const ProfileImageUpload = ({
  preview,
  profileData,
  handleProfileImageChange,
}) => {
  return (
    <div className="mb-6 flex items-center justify-center">
      <div className="group relative">
        <div className="ring-primary/20 dark:ring-primary/40 h-32 w-32 overflow-hidden rounded-full ring-4">
          <img
            src={
              preview && preview.type
                ? URL.createObjectURL(preview)
                : profileData.image
            }
            alt="Profile"
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <label
          htmlFor="upload_profile"
          className="bg-primary hover:bg-secondary absolute bottom-0 right-0 cursor-pointer rounded-full p-2 shadow-lg transition-colors"
        >
          <User className="h-5 w-5 text-white" />
        </label>
        <input
          type="file"
          id="upload_profile"
          hidden
          onChange={handleProfileImageChange}
        />
      </div>
    </div>
  );
};
export const ProfileForm = ({
  profileData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-gray-200">
            First Name
          </label>
          <div className="relative">
            <User className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
            <input
              type="text"
              name="first_name"
              value={profileData.first_name}
              onChange={handleInputChange}
              className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-gray-200">
            Last Name
          </label>
          <div className="relative">
            <User className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
            <input
              type="text"
              name="last_name"
              value={profileData.last_name}
              onChange={handleInputChange}
              className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          Email
        </label>
        <div className="relative">
          <Mail className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          Mobile Number
        </label>
        <div className="relative">
          <Phone className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
          <input
            type="tel"
            name="mobile_number"
            value={profileData.mobile_number}
            onChange={handleInputChange}
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          Address
        </label>
        <div className="relative">
          <MapPin className="text-neutral absolute left-3 top-3 h-5 w-5 dark:text-gray-400" />
          <textarea
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
            rows="3"
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="from-primary to-secondary flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        <Save className="h-5 w-5" />
        Update Profile
      </button>
    </form>
  );
};
export const PasswordForm = ({
  password,
  handlePasswordChange,
  handlePasswordSubmit,
}) => {
  return (
    <form onSubmit={handlePasswordSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          Current Password
        </label>
        <div className="relative">
          <Lock className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
          <input
            type="password"
            name="current_password"
            value={password.current_password}
            onChange={handlePasswordChange}
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          New Password
        </label>
        <div className="relative">
          <Lock className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
          <input
            type="password"
            name="new_password"
            value={password.new_password}
            onChange={handlePasswordChange}
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-gray-200">
          Confirm New Password
        </label>
        <div className="relative">
          <Lock className="text-neutral absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-gray-400" />
          <input
            type="password"
            name="confirm_password"
            value={password.confirm_password}
            onChange={handlePasswordChange}
            className="border-light focus:ring-primary/50 focus:border-primary w-full rounded-lg border bg-white/50 py-3 pl-12 pr-4 transition-all focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="from-primary to-secondary mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        <Lock className="h-5 w-5" />
        Change Password
      </button>
    </form>
  );
};
const EditProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(user?.image);
  const [profileData, setProfileData] = useState({
    first_name: user?.user.first_name,
    last_name: user?.user.last_name,
    email: user?.user.email,
    mobile_number: user?.mobile_number,
    address: user?.address,
    image: user?.image,
  });

  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  if (loading) return <Loading />;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setPreview(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    let imageUrlToSend = profileData.image;

    if (preview) {
      const imgBBApiKey = "1852d1780a7c1d17aff8afe66b4878a8";
      const imgFormData = new FormData();
      imgFormData.append("image", preview);

      try {
        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
          imgFormData,
        );
        imageUrlToSend = imgbbResponse.data.data.url;
      } catch (error) {
        toast.error("Failed to upload image to ImgBB.");
        return;
      }
    }

    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }

    formData.append("image", imageUrlToSend);

    try {
      const response = await axios.post(
        `${backEndApi}/account/updateProfile/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      );

      response.status == 200
        ? toast.success(response.data.message)
        : toast.warn(response.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password.new_password !== password.confirm_password) {
      toast.error("New passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `${backEndApi}/account/change-password/`,
        {
          current_password: password.current_password,
          new_password: password.new_password,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      );

      response.status == 200
        ? toast.success(response.data.message)
        : toast.warn(response.data.message);
      setPassword({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-background min-h-screen p-4 transition-colors duration-200 dark:bg-gray-900 md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="from-primary to-secondary mb-12 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent">
          Profile Management
        </h1>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="shadow-neu rounded-2xl bg-white p-6 transition-all duration-200 dark:bg-gray-800 dark:shadow-none md:p-8">
            <ProfileImageUpload
              preview={preview}
              profileData={profileData}
              handleProfileImageChange={handleProfileImageChange}
            />
            <ProfileForm
              profileData={profileData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>

          <div className="shadow-neu rounded-2xl bg-white p-6 transition-all duration-200 dark:bg-gray-800 dark:shadow-none md:p-8">
            <h2 className="text-dark mb-8 text-2xl font-bold dark:text-white">
              Password Management
            </h2>
            <PasswordForm
              password={password}
              handlePasswordChange={handlePasswordChange}
              handlePasswordSubmit={handlePasswordSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
