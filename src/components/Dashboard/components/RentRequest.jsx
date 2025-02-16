import { DollarSign, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { EmptyState, ErrorPage, Loading } from "../..";
import { backEndApi } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

const RentRequestList = () => {
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${backEndApi}/house/show-rent/`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    },
    [refresh],
  );

  const handleAccept = async (id) => {
    try {
      const response = await fetch(
        `${backEndApi}/house/accept-rent-request/${id}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      setRefresh((prev) => !prev);

      toast.success("Rent Request Accepted Successfully");
      // console.log("Rent Request Accepted Successfully:", response.data);
      // alert("OKKKK");
    } catch (error) {
      console.error("Error accepting rent request:", error);
      error.status == 401
        ? toast.error("You have to login !!")
        : toast.error(error.message);
    }
  };
  // console.log(data);
  if (loading) return <Loading />;
  if (error) return <ErrorPage message={error.message} />;

  return (
    <div className="container mx-auto">
      {data.length > 0 ? (
        <div className="my-10 rounded-3xl px-5 py-10 shadow-md">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold">Rent Requests</h1>
            <h2 className="text-2xl font-semibold">
              {data.length} {data.length > 1 ? "Items" : "Item"}
            </h2>
          </div>

          {data.map((house) => {
            return (
              <div
                key={house.id}
                className="items-center justify-between border-t border-gray-500 py-8 md:flex"
              >
                <div className="flex w-full items-start space-x-4 md:w-1/3 md:pr-4">
                  <img
                    src={house.advertisement.house.image}
                    alt={house.advertisement.house.title}
                    className="h-40 w-40 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-lg font-bold leading-none">
                      {house.advertisement.house.title}
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      {house.advertisement.house.category.map((cat) => (
                        <span
                          key={cat.id}
                          className="rounded-full bg-blue-200 px-2 py-1 text-xs text-blue-800"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <MapPin className="h-5 w-5" />
                      <p className="text-sm">
                        {house.advertisement.house.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <DollarSign className="h-5 w-5" />
                      <p className="text-sm">
                        ${house.advertisement.house.price}
                      </p>
                    </div>
                    <p className="mt-2 text-sm">
                      {house.advertisement.house.description.slice(0, 200)} ...
                    </p>
                  </div>
                </div>

                <div className="mt-6 w-full md:mt-0 md:w-1/3 md:pl-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <img
                        src={house.requested_by.image}
                        alt={`${house.requested_by.user.first_name}'s Profile`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <p className="text-sm">
                        {house.requested_by.user.first_name}{" "}
                        {house.requested_by.user.last_name}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5" />
                      <p className="text-sm">{house.requested_by.user.email}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5" />
                      <p className="text-sm">
                        {house.requested_by.mobile_number}
                      </p>
                    </div>

                    <div className="mt-4 text-gray-600">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          house.status === "PENDING"
                            ? "bg-yellow-200 text-yellow-800"
                            : house.status === "APPROVED"
                              ? "bg-green-200 text-green-800"
                              : house.status === "REJECTED"
                                ? "bg-red-200 text-red-800"
                                : "bg-gray-200"
                        }`}
                      >
                        {house.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="txtb mt-4 flex w-full justify-end md:mt-0 md:w-1/6">
                  {house.status === "PENDING" && (
                    <button
                      onClick={() => handleAccept(house.id)}
                      className="rounded-md bg-green-500 px-4 py-2"
                    >
                      Accept
                    </button>
                  )}
                  {house.status !== "PENDING" && (
                    <span
                      className={`rounded-md px-4 py-2 ${
                        house.status === "ACCEPTED"
                          ? "bg-blue-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {house.status}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState text="Rent Request" />
      )}
    </div>
  );
};

export default RentRequestList;
