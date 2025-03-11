
import { AlertCircle, ArrowLeft, CheckCircle, Lock, Save } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"
import { confirmPasswordReset } from "../services/authService"

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [generalError, setGeneralError] = useState("")
  const [success, setSuccess] = useState(false)

  const { uidb64, token } = useParams()
  const navigate = useNavigate()

  // Validate token and uidb64 on mount
  useEffect(() => {
    if (!uidb64 || !token) {
      setGeneralError("Invalid password reset link. Please request a new one.")
    }
  }, [uidb64, token])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }

    if (generalError) {
      setGeneralError("")
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.new_password) {
      newErrors.new_password = "New password is required"
    } else if (formData.new_password.length < 8) {
      newErrors.new_password = "Password must be at least 8 characters"
    }

    if (formData.new_password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setGeneralError("")

    try {
      await confirmPasswordReset(uidb64, token, {
        new_password: formData.new_password,
      })

      setSuccess(true)

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error) {
      console.error("Error resetting password:", error)

      if (error.new_password) {
        setErrors({ new_password: error.new_password[0] })
      } else if (error.detail) {
        setGeneralError(error.detail)
      } else if (error.message) {
        setGeneralError(error.message)
      } else {
        setGeneralError("Failed to reset password. The link may have expired. Please request a new one.")
      }
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-neutral-100 dark:from-zinc-900 dark:to-neutral-900">
        <Card className="max-w-md w-full p-8 text-center shadow-xl border-0 dark:bg-zinc-800/50 backdrop-blur-sm">
          <div className="rounded-full bg-green-100 dark:bg-green-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Password Reset Successful!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your password has been reset successfully. You will be redirected to the login page shortly.
          </p>
          <Link to="/login">
            <Button fullWidth>Go to Login</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-neutral-100 dark:from-zinc-900 dark:to-neutral-900">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link
            to="/login"
            className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reset Password</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Create a new password for your account</p>
        </div>

        <Card className="py-8 shadow-xl border-0 dark:bg-zinc-800/50 backdrop-blur-sm">
          {generalError && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
              <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
              <p>{generalError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              label="New Password"
              name="new_password"
              value={formData.new_password}
              onChange={handleInputChange}
              placeholder="Enter your new password"
              error={errors.new_password}
              icon={<Lock size={18} className="text-gray-400" />}
              required
              className="transition-all duration-300"
            />

            <Input
              type="password"
              label="Confirm New Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              placeholder="Confirm your new password"
              error={errors.confirm_password}
              icon={<Lock size={18} className="text-gray-400" />}
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
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    <Save size={18} className="mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                    Reset Password
                  </span>
                )}
              </Button>
            </div>
          </form>
        </Card>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Remember your password?{" "}
            <Link to="/login" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage

