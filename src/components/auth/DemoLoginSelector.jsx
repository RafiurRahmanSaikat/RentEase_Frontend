
import { useNavigate } from "react-router-dom"
import { DEMO_USERS } from "../../constants/demoUsers.jsx"
import { login } from "../../services/authService"
import Button from "../ui/Button.jsx"
import Card from "../ui/Card.jsx"

const DemoLoginSelector = ({ onClose }) => {
  const navigate = useNavigate()

  const handleDemoLogin = async (username, password) => {
    try {
      await login({ username, password })
      window.toast?.success(`Logged in as ${username} successfully!`)
      navigate("/dashboard")
    } catch (error) {
      console.error("Demo login error:", error)
      window.toast?.error("Demo login failed. Please try again.")
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Demo Login</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Select a demo account to quickly explore the application:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {DEMO_USERS.map((user) => (
          <Card
            key={user?.id}
            className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700"
            onClick={() => handleDemoLogin(user?.username, user?.password)}
          >
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-purple-500 dark:ring-purple-400">
                <img src={user?.avatar || "/placeholder.svg"} alt={user?.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white">{user?.name}</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">@{user?.username}</p>
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 mb-3">
                {user?.role === "admin" ? "Administrator" : "Regular User"}
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{user?.description}</p>
              <Button size="sm" fullWidth>
                Login as {user?.username}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>
          All demo accounts use the password:{" "}
          <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">password123</span>
        </p>
      </div>
    </div>
  )
}

export default DemoLoginSelector

