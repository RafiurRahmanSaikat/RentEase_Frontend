"use client";

import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { API_ENDPOINTS } from "../../constants";
import { getAllRentRequests } from "../../services/adminService";
import api from "../../services/api";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Pagination from "../ui/Pagination";
import Spinner from "../ui/Spinner";

const RentRequestsManagement = () => {
  const [loading, setLoading] = useState(true);
  const [rentRequests, setRentRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRentRequests();
  }, [currentPage]);

  const fetchRentRequests = async () => {
    setLoading(true);
    try {
      const data = await getAllRentRequests(currentPage);
      setRentRequests(data?.results || []);
      setTotalPages(Math.ceil((data?.count || 0) / 10));
    } catch (error) {
      console.error("Error fetching rent requests:", error);
      toast?.error("Failed to load rent requests");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      // Use direct API call since updateRentRequest is not exported
      await api.post(`${API_ENDPOINTS.RENT_REQUESTS}${id}/${status}/`);

      // Update rent requests list
      setRentRequests(
        rentRequests.map((request) =>
          request.id === id ? { ...request, status } : request,
        ),
      );

      toast?.success(`Request ${status}ed successfully`);
    } catch (error) {
      console.error(`Error ${status}ing request:`, error);
      toast?.error(`Failed to ${status} request`);
    }
  };

  const handleSendReminder = async (id) => {
    try {
      // Use direct API call to send reminder
      await api.post(`${API_ENDPOINTS.RENT_REQUESTS}${id}/remind/`);
      toast?.success("Payment reminder sent successfully");
    } catch (error) {
      console.error("Error sending reminder:", error);
      toast?.error("Failed to send reminder");
    }
  };

  if (loading && rentRequests.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Manage Rent Requests
        </h3>

        <Button variant="outline" onClick={fetchRentRequests}>
          <RefreshCw size={18} className="mr-1" /> Refresh
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">Tenant</th>
              <th className="px-4 py-3">House ID</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentRequests.map((request) => (
              <tr key={request.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <img
                      src={request.tenant?.image}
                      alt={request.tenant?.username}
                      className="mr-2 h-8 w-8 rounded-full"
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {request.tenant?.full_name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {request.house}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {request.duration} days
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      request.status === "approved"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : request.status === "rejected"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {request.status.charAt(0).toUpperCase() +
                      request.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      request.paid
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {request.paid ? "Paid" : "Unpaid"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {new Date(request.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    {request.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() =>
                            handleUpdateStatus(request.id, "accept")
                          }
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() =>
                            handleUpdateStatus(request.id, "reject")
                          }
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    {request.status === "approved" && !request.paid && (
                      <Button
                        size="sm"
                        onClick={() => handleSendReminder(request.id)}
                      >
                        Send Reminder
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-6"
      />
    </Card>
  );
};

export default RentRequestsManagement;
