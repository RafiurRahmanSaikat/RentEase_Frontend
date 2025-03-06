import { useState } from "react";
import { IoCheckmarkCircle, IoLocationSharp, IoStar } from "react-icons/io5";

import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CompactReviewCard, EmptyState, Loading, ReviewForm } from "..";
import { backEndApi } from "../../constants";
import useFetch from "../../hooks/useFetch";

const HouseDetail = () => {
  const [refresh, setRefresh] = useState(false);
  const { advertiseId } = useParams();

  const {
    data: house,
    loading,
    error,
  } = useFetch(`${backEndApi}/properties/houses/${advertiseId}/`, {}, [
    refresh,
    advertiseId,
  ]);
  // console.log(data);
  if (loading) return <Loading />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!house) return <EmptyState />;

  console.log(house);

  const handleRentRequest = async () => {
    try {
      const response = await axios.post(
        `${backEndApi}/house/request-rent/`,
        {
          advertisement: advertiseId,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      );
      setRefresh((prev) => !prev);
      toast.success("Rent request sent successfully!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("You have to login !!");
      } else {
        toast.error(error.message);
      }
    }
  };
  const handleFavorite = async (advertiseId) => {
    try {
      const response = await axios.post(
        `${backEndApi}/account/profile/favorites/add/${advertiseId}/`,
        {},
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      );
      // console.log(response.status);
      response.status == 200
        ? toast.success(response.data.message)
        : toast.warn(response.data.message);
      // response.data.message=="Advertisement added to favorites.'
    } catch (error) {
      error.status == 401
        ? toast.error("You have to login !!")
        : toast.error(error.message);
    }
  };
  const handleReviewSubmit = async (rating, reviewText) => {
    console.log(rating, reviewText);
    try {
      const response = await axios.post(
        `${backEndApi}/house/review/`,
        {
          advertisement: advertiseId,
          rating,
          text: reviewText,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      );
      toast.success("Review added successfully!");
      setRefresh((prev) => !prev);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("You have to login !!");
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="relative mx-auto w-[90vw] px-4">
      <div className="grid gap-8 py-8 md:grid-cols-2">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={house?.images}
              alt={house?.title}
              className="h-[500px] w-full object-cover object-center transition-all duration-700 hover:scale-105"
            />
            {/* Floating Status Card */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-800/90">
              {house?.approved ? (
                <span className="flex items-center gap-2 text-red-500">
                  <IoCheckmarkCircle className="text-xl" />
                  <span className="font-medium">Rented</span>
                </span>
              ) : (
                <span className="flex items-center gap-2 text-emerald-500">
                  <IoCheckmarkCircle className="text-xl" />
                  <span className="font-medium">Available</span>
                </span>
              )}
            </div>
            {/* Featured Badge */}
            {house?.is_advertised && (
              <div className="absolute right-6 top-6 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-medium text-white">
                Featured
              </div>
            )}
          </div>
          <ReviewForm onSubmit={handleReviewSubmit} />
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleRentRequest}
              className={`to-violet-700"} w-full rounded-2xl bg-gray-400 bg-gradient-to-r from-purple-600 px-8 py-4 font-semibold text-white transition-all hover:from-violet-800 hover:to-purple-800`}
            >
              Request to Rent
            </button>
            <button
              onClick={() => handleFavorite(house?.id)}
              className="w-full rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Add to favorite
            </button>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Title Section */}
          <h1 className="text-3xl font-bold tracking-tight dark:text-white lg:text-4xl">
            {house?.title}
          </h1>

          {/* Info Row with Owner Card */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <IoLocationSharp className="text-xl text-blue-500" />
                  <span>{house?.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoStar className="text-xl text-yellow-400" />
                  <span>{house?.average_rating}</span>
                  <span>({house?.review_count} reviews)</span>
                </div>
              </div>
              <div className="">
                <p className="text-gray-900 dark:text-gray-200">
                  Starting from
                </p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${house?.price}
                  <span className="text-base font-normal text-gray-900 dark:text-gray-100">
                    /mo
                  </span>
                </p>
              </div>
            </div>

            {/* Owner Card */}
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <img
                  src={house?.owner?.image}
                  alt={house?.owner?.image}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {house?.owner?.owner_first_name}{" "}
                    {house?.owner?.owner_last_name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {house?.owner.phone}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {house?.owner?.email}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      Verified Owner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {house?.categories?.map((cat) => (
              <span
                key={cat.id}
                className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4 rounded-2xl bg-gray-50 p-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold dark:text-white">
              About this property
            </h2>
            <div className="max-h-80 overflow-y-auto">
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {house?.description}
              </p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold dark:text-white">Reviews</h2>
              <div className="flex items-center gap-2">
                <IoStar className="text-yellow-400" />
                <span className="font-semibold">{house?.average_rating}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  ({house?.review_count} reviews)
                </span>
              </div>
            </div>

            {/* Compact Review List */}
            <div className="max-h-64 space-y-2 overflow-y-auto rounded-xl">
              {house?.review_count === 0 ? (
                <EmptyState
                  title="No Reviews Found"
                  message="There are no reviews for this property yet."
                />
              ) : (
                house?.reviews.map((review) => (
                  <CompactReviewCard key={review.id} review={review} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
