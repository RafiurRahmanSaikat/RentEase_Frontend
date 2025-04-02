import {
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService.js";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";
import Input from "../ui/Input.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    address: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    if (generalError) {
      setGeneralError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

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

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
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

    setLoading(true);
    setGeneralError("");

    try {
      await register(formData);
      setSuccess(true);

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Registration error:", error);

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
        } else if (error.message) {
          setGeneralError(error.message);
        } else {
          setGeneralError("Registration failed. Please try again.");
        }
      } else {
        setGeneralError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-neutral-100 px-4 py-12 dark:from-zinc-900 dark:to-neutral-900 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md border-0 p-8 text-center shadow-xl backdrop-blur-sm dark:bg-zinc-800/50">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <AlertCircle
              size={32}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Registration Successful!
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Please check your email to verify your account. You will be
            redirected to the login page shortly.
          </p>
          <Link to="/login">
            <Button fullWidth>Go to Login</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-neutral-100 px-4 py-12 dark:from-zinc-900 dark:to-neutral-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Join RentEase to find your perfect rental home
          </p>
        </div>

        <Card className="border-0 py-8 shadow-xl backdrop-blur-sm dark:bg-zinc-800/50">
          {generalError && (
            <div className="mb-4 flex items-start rounded-lg bg-red-50 p-3 text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
              <p>{generalError}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                error={errors.first_name}
                required
                className="transition-all duration-300"
              />

              <Input
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                error={errors.last_name}
                required
                className="transition-all duration-300"
              />
            </div>

            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Choose a username"
              error={errors.username}
              icon={<User size={18} className="text-gray-400" />}
              required
              className="transition-all duration-300"
            />

            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              error={errors.email}
              icon={<Mail size={18} className="text-gray-400" />}
              required
              className="transition-all duration-300"
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                error={errors.password}
                icon={<Lock size={18} className="text-gray-400" />}
                required
                className="transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                error={errors.password2}
                icon={<Lock size={18} className="text-gray-400" />}
                required
                className="transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Input
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              error={errors.phone}
              icon={<Phone size={18} className="text-gray-400" />}
              required
              className="transition-all duration-300"
            />

            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              error={errors.address}
              icon={<MapPin size={18} className="text-gray-400" />}
              required
              className="transition-all duration-300"
            />

            <Input
              label="Profile Image URL (Optional)"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              error={errors.image}
              className="transition-all duration-300"
            />

            <Button
              type="submit"
              fullWidth
              disabled={loading}
              className="group relative mt-6 flex justify-center py-3 transition-all duration-300"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center">
                  <UserPlus
                    size={18}
                    className="mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]"
                  />
                  Create Account
                </span>
              )}
            </Button>
          </form>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 transition-colors duration-200 hover:text-purple-500 dark:text-purple-400"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
