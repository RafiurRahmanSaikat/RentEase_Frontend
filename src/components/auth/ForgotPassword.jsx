/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, CheckCircle, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { requestPasswordReset } from "../../services/authService";
import { Button, Card, Input } from "../ui";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await requestPasswordReset(email);
      setSuccess(true);
    } catch (error) {
      console.error("Error requesting password reset:", error);
      setError(
        error.message || "Failed to request password reset. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-neutral-100 px-4 py-12 dark:from-zinc-900 dark:to-neutral-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link
            to="/login"
            className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Forgot Password
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Enter your email to reset your password
          </p>
        </div>

        <Card className="border-0 py-8 shadow-xl backdrop-blur-sm dark:bg-zinc-800/50">
          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle
                  size={32}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Check Your Email
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                We've sent a password reset link to{" "}
                <span className="font-medium">{email}</span>. Please check your
                inbox and follow the instructions to reset your password.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={handleSubmit}
                  className="text-purple-600 hover:underline dark:text-purple-400"
                >
                  try again
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address"
                error={error}
                icon={<Mail size={18} className="text-gray-400" />}
                required
                className="transition-all duration-300"
              />

              <div className="pt-2">
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
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send
                        size={18}
                        className="mr-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                      Send Reset Link
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </Card>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
