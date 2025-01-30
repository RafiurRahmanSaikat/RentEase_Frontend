import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { Loading } from "../..";
import { backEndApi } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import { HouseCard } from "./HouseCard";

import HouseForm from "./HouseForm";
import { Modal } from "./Modal";
import { StatsCard } from "./StatsCard";

export default function Dashboard({ user }) {
  const token = localStorage.getItem("token");
  const [refresh, setRefresh] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHouse, setEditingHouse] = useState(null);

  const { data, loading } = useFetch(
    `${backEndApi}/house/my-houses/`,
    { headers: { Authorization: `Token ${token}` } },
    [refresh],
  );

  const handleCreateAdvertisement = async (houseId) => {
    try {
      await axios.post(
        `${backEndApi}/house/create-advertisement/`,
        { house_id: houseId },
        { headers: { Authorization: `Token ${token}` } },
      );
      toast.success("Advertisement created successfully!");
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Failed to create advertisement.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="space-y-6 p-6">
      {/* Header with Add House button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <button
          onClick={() => {
            setEditingHouse(null);
            setIsModalOpen(true);
          }}
          className="transform rounded-lg bg-blue-600 px-4 py-2 text-white transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          <FaPlus className="mr-2 inline-block" />
          Add House
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatsCard title="Total Houses" value={data?.length || 0} />
        {user?.account_type === "User" && (
          <>
            <StatsCard
              title="Favorites"
              value={user?.favourites?.length || 0}
            />
            <StatsCard
              title="Active Listings"
              value={data?.filter((h) => h.is_advertised)?.length || 0}
            />
          </>
        )}
      </div>

      {/* Houses List */}
      <div className="space-y-4">
        {data?.map((house) => (
          <HouseCard
            key={house.id}
            house={house}
            onAdvertise={handleCreateAdvertisement}
            onEdit={() => {
              setEditingHouse(house);
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingHouse(null);
        }}
        title={editingHouse ? "Edit House" : "Add New House"}
      >
        <HouseForm
          initialData={editingHouse}
          onClose={() => {
            setIsModalOpen(false);
            setEditingHouse(null);
          }}
        />
      </Modal>
    </div>
  );
}
