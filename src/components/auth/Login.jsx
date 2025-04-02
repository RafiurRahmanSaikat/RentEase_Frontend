/* eslint-disable react/no-unescaped-entities */
import { AlertCircle, Eye, EyeOff, Lock, LogIn, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { DEMO_USERS } from "../../constants/index.js";
import { login } from "../../services/authService.js";

import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";
import Input from "../ui/Input.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to home
  const from = location.state?.from?.pathname || "/dashboard";

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

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setGeneralError("");

    try {
      await login(formData);
      toast?.success(`Logged in as ${formData.username} successfully!`);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);

      if (error.non_field_errors) {
        setGeneralError(error.non_field_errors[0]);
      } else if (error.detail) {
        setGeneralError(error.detail);
      } else if (error.message) {
        setGeneralError(error.message);
      } else {
        setGeneralError(
          "Login failed. Please check your credentials and try again.",
        );
      }

      toast?.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleDemoAccounts = () => {
    setShowDemoAccounts(!showDemoAccounts);
  };

  const handleDemoLogin = (username, password) => {
    setFormData({ username, password });
    setLoading(true);
    setGeneralError("");

    try {
      login({ username, password })
        .then(() => {
          toast?.success(`Logged in as ${username} successfully!`);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("Demo login error:", error);
          setGeneralError("Demo login failed. Please try again.");
          toast?.error("Demo login failed. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Demo login error:", error);
      setGeneralError("Demo login failed. Please try again.");
      toast?.error("Demo login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-neutral-100 px-4 py-12 dark:from-zinc-900 dark:to-neutral-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in to your account to continue
          </p>
        </div>

        <Card className="border-0 py-8 shadow-xl backdrop-blur-sm dark:bg-zinc-800/50">
          {generalError && (
            <div className="mb-4 flex items-start rounded-lg bg-red-50 p-3 text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
              <p>{generalError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              error={errors.username}
              icon={<User size={18} className="text-gray-400" />}
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
                placeholder="Enter your password"
                error={errors.password}
                icon={<Lock size={18} className="text-gray-400" />}
                required
                className="transition-all duration-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 transition-colors duration-200 focus:ring-purple-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-purple-500 dark:text-purple-400"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={loading}
              className="group relative flex justify-center py-3 transition-all duration-300"
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
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn
                    size={18}
                    className="mr-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  Sign in
                </span>
              )}
            </Button>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-neutral-50 px-2 text-gray-500 dark:bg-zinc-800 dark:text-gray-400">
                  Or
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              fullWidth
              className="mt-4 transition-all duration-300"
              onClick={toggleDemoAccounts}
            >
              {showDemoAccounts ? "Hide Demo Accounts" : "Try Demo Accounts"}
            </Button>

            {showDemoAccounts &&
              DEMO_USERS.map((user) => (
                <div
                  key={user.username}
                  className="mt-4 grid grid-cols-1 gap-4"
                >
                  <div className="cursor-pointer rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        @{user.username}
                      </p>
                      <Badge variant="warning">
                        {user.role === "admin" ? "Admin" : "User"}
                      </Badge>
                    </div>
                    <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                      {user.description}
                    </p>
                    <Button
                      size="sm"
                      fullWidth
                      onClick={() =>
                        handleDemoLogin(user.username, user.password)
                      }
                    >
                      Login as {user.username}
                    </Button>
                  </div>
                </div>
              ))}
          </form>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-purple-600 transition-colors duration-200 hover:text-purple-500 dark:text-purple-400"
            >
              Sign up
            </Link>
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            All demo accounts use the password:{" "}
            <span className="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">
              password123
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
