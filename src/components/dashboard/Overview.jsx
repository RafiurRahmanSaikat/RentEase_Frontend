"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Users, Home, Clock, Tag } from "lucide-react"
import { toast } from "sonner"
import Card from "../ui/Card"
import Button from "../ui/Button"
import Spinner from "../ui/Spinner"
import { getUsers } from "../../services/adminService"
import { getAllHouses, approveHouse, getCategories } from "../../services/houseService"
import { getAllRentRequests } from "../../services/adminService"

const Overview = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [houses, setHouses] = useState([])
  const [rentRequests, setRentRequests] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true)
      try {
        // Fetch initial data for overview
        const [usersData, housesData, requestsData, categoriesData] = await Promise.all([
          getUsers(),
          getAllHouses(),
          getAllRentRequests(),
          getCategories(),
        ])

        setUsers(usersData?.results || [])
        setHouses(housesData?.results || [])
        setRentRequests(requestsData?.results || [])
        setCategories(categoriesData?.results || [])
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        toast?.error("Failed to load dashboard data")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const handleApproveHouse = async (id) => {
    try {
      await approveHouse(id)

      // Update houses list
      setHouses(houses.map((house) => (house.id === id ? { ...house, approved: true } : house)))

      toast?.success("House approved successfully")
    } catch (error) {
      console.error("Error approving house:", error)
      toast?.error("Failed to approve house")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">{users?.length || 0}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
              <Home size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Houses</h3>
              <p className="text-2xl font-bold">{houses?.length || 0}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rent Requests</h3>
              <p className="text-2xl font-bold">{rentRequests?.length || 0}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
              <Tag size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Categories</h3>
              <p className="text-2xl font-bold">{categories?.length || 0}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Users</h3>
            <Link to="/admin/users">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 5).map((user) => (
                  <tr key={user.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <img
                          src={user.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                          alt={user.username}
                          className="mr-2 h-8 w-8 rounded-full"
                        />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {user.first_name} {user.last_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{user.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pending Houses</h3>
            <Link to="/admin/houses">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3">House</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {houses
                  .filter((house) => !house.approved)
                  .slice(0, 5)
                  .map((house) => (
                    <tr key={house.id} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src={house.images || "https://i.ibb.co/VWgQBg65/house.jpg"}
                            alt={house.title}
                            className="mr-2 h-10 w-10 rounded object-cover"
                          />
                          <span className="line-clamp-1 font-medium text-gray-900 dark:text-white">{house.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{house.owner_name}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button size="sm" variant="success" onClick={() => handleApproveHouse(house.id)}>
                          Approve
                        </Button>
                      </td>
                    </tr>
                  ))}
                {houses.filter((house) => !house.approved).length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                      No pending houses
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Overview

