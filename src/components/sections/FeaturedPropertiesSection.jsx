// pages/FeaturedPropertiesSection.jsx
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getHouses } from "../../services/houseService";
import HouseCard from "../houses/HouseCard.jsx";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";

const FeaturedPropertiesSection = () => {
  // Fetch houses on page 1 and select the first 8 items as featured
  const { data, isLoading, error } = useQuery({
    queryKey: ["featuredHouses"],
    queryFn: () => getHouses(1),
    select: (data) => data.results.slice(0, 8),
  });
  if (isLoading) {
    return (
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="h-80 animate-pulse">
                <div className="h-48 rounded-t-xl bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-4">
                  <div className="mb-2 h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
                  <div className="mb-4 h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
                  <div className="h-4 w-full rounded bg-gray-300 dark:bg-gray-700"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) return <div>Error loading featured properties.</div>;

  const houses = data;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Featured Properties
          </h2>
          <Link to="/houses">
            <Button className="px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
              View All{" "}
              <ArrowRight
                size={16}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;

// import { ArrowRight } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { getHouses } from "../../services/houseService"
// import HouseCard from "../houses/HouseCard.jsx"
// import Button from "../ui/Button.jsx"
// import Card from "../ui/Card.jsx"

// const FeaturedPropertiesSection = () => {
//   const [houses, setHouses] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchHouses = async () => {
//       try {
//         const housesData = await getHouses(1)
//         setHouses(housesData.results)
//       } catch (error) {
//         console.error("Error fetching houses:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchHouses()
//   }, [])

//   return (
//     <section className="py-12 md:py-16 ">
//       <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Properties</h2>

//           <Link
//             to="/houses"

//           >

// <Button  className="py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
//           View All{" "}
//           <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button>
//           </Link>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//             {[...Array(4)].map((_, index) => (
//               <Card key={index} className="animate-pulse h-80">
//                 <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl"></div>
//                 <div className="p-4">
//                   <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
//                   <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//             {houses.slice(0, 8).map((house) => (
//               <HouseCard key={house.id} house={house} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default FeaturedPropertiesSection
