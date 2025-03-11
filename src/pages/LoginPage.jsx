
import { AlertCircle, Eye, EyeOff, Lock, LogIn, User } from "lucide-react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import DemoLoginSelector from "../components/auth/DemoLoginSelector.jsx"
import Button from "../components/ui/Button.jsx"
import Card from "../components/ui/Card.jsx"
import Input from "../components/ui/Input.jsx"
import Modal from "../components/ui/Modal.jsx"
import { login } from "../services/authService"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [generalError, setGeneralError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  // Get redirect path from location state or default to home
  const from = location.state?.from?.pathname || "/"

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

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
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
      await login(formData)
      navigate(from, { replace: true })
    } catch (error) {
      console.error("Login error:", error)

      if (error.non_field_errors) {
        setGeneralError(error.non_field_errors[0])
      } else if (error.detail) {
        setGeneralError(error.detail)
      } else if (error.message) {
        setGeneralError(error.message)
      } else {
        setGeneralError("Login failed. Please check your credentials and try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-neutral-100 dark:from-zinc-900 dark:to-neutral-900">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Sign in to your account to continue</p>
        </div>

        <Card className="py-8 shadow-xl border-0 dark:bg-zinc-800/50 backdrop-blur-sm">
          {generalError && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
              <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
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
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
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
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-colors duration-200"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-colors duration-200"
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
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Sign in
                </span>
              )}
            </Button>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-50 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">Or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => setShowDemoModal(true)}
              className="mt-4 transition-all duration-300"
            >
              Try Demo Accounts
            </Button>
          </form>
        </Card>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-colors duration-200"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Demo Login Options" size="lg">
        <DemoLoginSelector onClose={() => setShowDemoModal(false)} />
      </Modal>
    </div>
  )
}

export default LoginPage



// import { AlertCircle, Lock, User } from "lucide-react"
// import { useState } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import Button from "../components/ui/Button"
// import Card from "../components/ui/Card"
// import Input from "../components/ui/Input"
// import { login } from "../services/authService"

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [loading, setLoading] = useState(false)
//   const [generalError, setGeneralError] = useState("")

//   const navigate = useNavigate()
//   const location = useLocation()

//   // Get redirect path from location state or default to home
//   const from = location.state?.from?.pathname || "/"

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setLoading(true)
//     setGeneralError("")

//     try {
//       await login(formData)
//       navigate(from, { replace: true })
//     } catch (error) {
//       console.error("Login error:", error)

//       if (error.non_field_errors) {
//         setGeneralError(error.non_field_errors[0])
//       } else if (error.detail) {
//         setGeneralError(error.detail)
//       } else if (error.message) {
//         setGeneralError(error.message)
//       } else {
//         setGeneralError("Login failed. Please check your credentials and try again.")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">Sign in to your account to continue</p>
//         </div>

//         <Card className="py-8">
//           {generalError && (
//             <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
//               <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
//               <p>{generalError}</p>
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <Input
//               label="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               placeholder="Enter your username"
//               error={errors.username}
//               icon={<User size={18} className="text-gray-400" />}
//               required
//             />

//             <Input
//               type="password"
//               label="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Enter your password"
//               error={errors.password}
//               icon={<Lock size={18} className="text-gray-400" />}
//               required
//             />

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
//                   Remember me
//                 </label>
//               </div>

//               <Link
//                 to="/reset-password"
//                 className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500"
//               >
//                 Forgot your password?
//               </Link>
//             </div>

//             <Button type="submit" fullWidth disabled={loading}>
//               {loading ? "Signing in..." : "Sign in"}
//             </Button>
//           </form>
//         </Card>

//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             Don't have an account?{" "}
//             <Link to="/register" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginPage

