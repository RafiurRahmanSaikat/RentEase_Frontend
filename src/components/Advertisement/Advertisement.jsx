import { useState } from "react";
import { Error, HouseCard, Loading } from "../../components";
import { backEndApi } from "../../constants";
import useFetch from "../../hooks/useFetch";

export default function Advertisement() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoriesUrl = `${backEndApi}/house/category/`;
  const advertisementUrl = `${backEndApi}/house/advertisements/list/${
    selectedCategory ? `?category=${selectedCategory}` : ""
  }`;

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch(categoriesUrl);

  const {
    data: advertisements,
    loading: advertisementsLoading,
    error: advertisementsError,
  } = useFetch(advertisementUrl, {}, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedTab(categoryId);
    setSelectedCategory(categoryId);
  };

  const [selectedTab, setSelectedTab] = useState("all");

  if (categoriesLoading || advertisementsLoading) return <Loading />;
  if (categoriesError || advertisementsError)
    return <Error message={advertisementsError.message} />;
  // if (advertisementsError)
  //   return <ErrorPage message={advertisementsError.message} />;

  return (
    <section className="container mx-auto w-11/12 py-8 sm:py-16 md:py-24">
      <div className="my-10 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured Listings
          </h2>
          <p className="max-w-3xl text-lg sm:text-xl">
            Discover your perfect home from our featured listings. Whether
            you&apos;re looking for an economy option, a business class home, or
            a first-class luxury house, we have something for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 text-2xl font-bold sm:text-3xl">Category</h2>
          <div className="mb-4 inline-flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => {
                setSelectedCategory("");
              }}
              className={`"bg-white dark:text-gray-100" : "text-gray-600 dark:hover:text-gray-200" } rounded-full p-2 text-sm text-gray-900 shadow transition-all hover:text-gray-600 dark:bg-gray-700 dark:text-gray-400 sm:text-base`}
            >
              ALL
            </button>
            {categories.map((items) => (
              <button
                key={items.id}
                onClick={() => handleCategorySelect(items.id)}
                className={`rounded-full p-2 text-sm transition-all sm:text-base ${
                  selectedTab === items.id
                    ? "bg-white text-gray-900 shadow dark:bg-gray-700 dark:text-gray-100"
                    : "text-gray-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {items.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-wrap justify-center gap-8">
        {advertisements.length === 0 ? (
          <p>No data</p>
        ) : (
          advertisements.map((items) => (
            <HouseCard key={items.id} house={items.house} />
          ))
        )}
      </div>
    </section>
  );
}
