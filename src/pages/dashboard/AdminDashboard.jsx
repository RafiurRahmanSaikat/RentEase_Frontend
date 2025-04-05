// import {
//   CheckCircle,
//   Clock,
//   Edit,
//   Filter,
//   Home,
//   LayoutDashboard,
//   Plus,
//   RefreshCw,
//   Search,
//   Tag,
//   Trash2,
//   Users,
//   XCircle,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import Button from "../../components/ui/Button.jsx";
// import Card from "../../components/ui/Card.jsx";
// import Input from "../../components/ui/Input.jsx";
// import Modal from "../../components/ui/Modal.jsx";
// import Pagination from "../../components/ui/Pagination.jsx";
// import Select from "../../components/ui/Select.jsx";
// import Spinner from "../../components/ui/Spinner.jsx";
// import {
//   createUser,
//   deleteUser,
//   getAllRentRequests,
//   getUsers,
//   updateUser,
// } from "../../services/adminService.js";
// import {
//   approveHouse,
//   createCategory,
//   getAllHouses,
//   getCategories,
// } from "../../services/houseService";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);
//   const [houses, setHouses] = useState([]);
//   const [rentRequests, setRentRequests] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setLoading(true);
//       try {
//         // Fetch initial data for overview
//         const [usersData, housesData, requestsData, categoriesData] =
//           await Promise.all([
//             getUsers(),
//             getAllHouses(),
//             getAllRentRequests(),
//             getCategories(),
//           ]);

//         setUsers(usersData?.results || []);
//         setHouses(housesData?.results || []);
//         setRentRequests(requestsData?.results || []);
//         setCategories(categoriesData?.results || []);

//         // Set total pages based on the active tab
//         setTotalPages(Math.ceil((usersData?.count || 0) / 10)); // Assuming 10 items per page
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         toast?.error("Failed to load dashboard data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Fetch data based on active tab and pagination
//   useEffect(() => {
//     const fetchTabData = async () => {
//       if (activeTab === "overview") return;

//       setLoading(true);
//       try {
//         let data;
//         switch (activeTab) {
//           case "users":
//             data = await getUsers(currentPage, searchQuery);
//             setUsers(data?.results || []);
//             setTotalPages(Math.ceil((data?.count || 0) / 10));
//             break;
//           case "houses":
//             data = await getAllHouses(currentPage, { search: searchQuery });
//             setHouses(data?.results || []);
//             setTotalPages(Math.ceil((data?.count || 0) / 10));
//             break;
//           case "rentRequests":
//             data = await getAllRentRequests(currentPage);
//             setRentRequests(data?.results || []);
//             setTotalPages(Math.ceil((data?.count || 0) / 10));
//             break;
//           case "categories":
//             data = await getCategories(currentPage);
//             setCategories(data?.results || []);
//             setTotalPages(Math.ceil((data?.count || 0) / 10));
//             break;
//           default:
//             break;
//         }
//       } catch (error) {
//         console.error(`Error fetching ${activeTab} data:`, error);
//         toast?.error(`Failed to load ${activeTab} data`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTabData();
//   }, [activeTab, currentPage, searchQuery]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo(0, 0);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCurrentPage(1); // Reset to first page when searching
//     // The search query is already set via input onChange
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const openModal = (type, item = null) => {
//     setModalType(type);
//     setSelectedItem(item);

//     // Initialize form data based on modal type and selected item
//     if (type === "addUser" || type === "editUser") {
//       setFormData(
//         item || {
//           username: "",
//           first_name: "",
//           last_name: "",
//           email: "",
//           password: "",
//           phone: "",
//           address: "",
//           role: "user",
//           image: "",
//         },
//       );
//     } else if (type === "addCategory") {
//       setFormData({
//         name: "",
//         description: "",
//       });
//     }

//     setShowModal(true);
//   };

//   const handleSubmit = async () => {
//     try {
//       switch (modalType) {
//         case "addUser":
//           await createUser(formData);
//           toast?.success("User created successfully");
//           break;
//         case "editUser":
//           await updateUser(selectedItem.id, formData);
//           toast?.success("User updated successfully");
//           break;
//         case "addCategory":
//           await createCategory(formData);
//           toast?.success("Category created successfully");
//           break;
//         default:
//           break;
//       }

//       // Refresh data
//       if (activeTab === "overview") {
//         // Refetch all data for overview
//         const [usersData, housesData, requestsData, categoriesData] =
//           await Promise.all([
//             getUsers(),
//             getAllHouses(),
//             getAllRentRequests(),
//             getCategories(),
//           ]);

//         setUsers(usersData?.results || []);
//         setHouses(housesData?.results || []);
//         setRentRequests(requestsData?.results || []);
//         setCategories(categoriesData?.results || []);
//       } else {
//         // Refetch data for the active tab
//         let data;
//         switch (activeTab) {
//           case "users":
//             data = await getUsers(currentPage);
//             setUsers(data?.results || []);
//             break;
//           case "categories":
//             data = await getCategories(currentPage);
//             setCategories(data?.results || []);
//             break;
//           default:
//             break;
//         }
//       }

//       setShowModal(false);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast?.error("Failed to submit form");
//     }
//   };

//   const handleDelete = async (type, id) => {
//     if (!window.confirm("Are you sure you want to delete this item?")) return;

//     try {
//       switch (type) {
//         case "user":
//           await deleteUser(id);
//           setUsers(users.filter((user) => user.id !== id));
//           toast?.success("User deleted successfully");
//           break;
//         default:
//           break;
//       }
//     } catch (error) {
//       console.error("Error deleting item:", error);
//       toast?.error("Failed to delete item");
//     }
//   };

//   const handleApproveHouse = async (id) => {
//     try {
//       await approveHouse(id);

//       // Update houses list
//       setHouses(
//         houses.map((house) =>
//           house.id === id ? { ...house, approved: true } : house,
//         ),
//       );

//       toast?.success("House approved successfully");
//     } catch (error) {
//       console.error("Error approving house:", error);
//       toast?.error("Failed to approve house");
//     }
//   };

//   const renderModalContent = () => {
//     switch (modalType) {
//       case "addUser":
//       case "editUser":
//         return (
//           <>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <Input
//                 label="Username"
//                 name="username"
//                 value={formData?.username || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter username"
//                 required
//               />
//               <Input
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData?.email || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter email"
//                 required
//               />
//               <Input
//                 label="First Name"
//                 name="first_name"
//                 value={formData?.first_name || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter first name"
//                 required
//               />
//               <Input
//                 label="Last Name"
//                 name="last_name"
//                 value={formData?.last_name || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter last name"
//                 required
//               />
//               {modalType === "addUser" && (
//                 <Input
//                   label="Password"
//                   name="password"
//                   type="password"
//                   value={formData?.password || ""}
//                   onChange={handleInputChange}
//                   placeholder="Enter password"
//                   required
//                 />
//               )}
//               <Input
//                 label="Phone"
//                 name="phone"
//                 value={formData?.phone || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter phone number"
//               />
//               <Input
//                 label="Address"
//                 name="address"
//                 value={formData?.address || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter address"
//               />
//               <Select
//                 label="Role"
//                 name="role"
//                 value={formData?.role || "user"}
//                 onChange={handleInputChange}
//                 options={[
//                   { value: "user", label: "User" },
//                   { value: "admin", label: "Admin" },
//                 ]}
//               />
//             </div>
//             <Input
//               label="Profile Image URL"
//               name="image"
//               value={formData?.image || ""}
//               onChange={handleInputChange}
//               placeholder="Enter image URL"
//             />
//             <div className="mt-6 flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setShowModal(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleSubmit}>
//                 {modalType === "addUser" ? "Create User" : "Update User"}
//               </Button>
//             </div>
//           </>
//         );

//       case "addCategory":
//         return (
//           <>
//             <Input
//               label="Category Name"
//               name="name"
//               value={formData?.name || ""}
//               onChange={handleInputChange}
//               placeholder="Enter category name"
//               required
//             />
//             <Input
//               label="Description"
//               name="description"
//               value={formData?.description || ""}
//               onChange={handleInputChange}
//               placeholder="Enter category description"
//             />
//             <div className="mt-6 flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setShowModal(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleSubmit}>Create Category</Button>
//             </div>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   const renderTabContent = () => {
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center py-20">
//           <Spinner size="lg" />
//         </div>
//       );
//     }

//     switch (activeTab) {
//       case "overview":
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
//               <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
//                 <div className="flex items-center">
//                   <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
//                     <Users size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">Total Users</h3>
//                     <p className="text-2xl font-bold">{users?.length || 0}</p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
//                 <div className="flex items-center">
//                   <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
//                     <Home size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">Total Houses</h3>
//                     <p className="text-2xl font-bold">{houses?.length || 0}</p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
//                 <div className="flex items-center">
//                   <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
//                     <Clock size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">Rent Requests</h3>
//                     <p className="text-2xl font-bold">
//                       {rentRequests?.length || 0}
//                     </p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
//                 <div className="flex items-center">
//                   <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
//                     <Tag size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">Categories</h3>
//                     <p className="text-2xl font-bold">
//                       {categories?.length || 0}
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             </div>

//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               <Card>
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     Recent Users
//                   </h3>
//                   <Link to="/admin/users">
//                     <Button variant="outline" size="sm">
//                       View All
//                     </Button>
//                   </Link>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left text-sm">
//                     <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                       <tr>
//                         <th className="px-4 py-3">User</th>
//                         <th className="px-4 py-3">Email</th>
//                         <th className="px-4 py-3">Role</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {users.slice(0, 5).map((user) => (
//                         <tr
//                           key={user.id}
//                           className="border-b dark:border-gray-700"
//                         >
//                           <td className="px-4 py-3">
//                             <div className="flex items-center">
//                               <img
//                                 src={
//                                   user.image ||
//                                   "https://i.ibb.co/qMWG0D1/user-avatar.png"
//                                 }
//                                 alt={user.username}
//                                 className="mr-2 h-8 w-8 rounded-full"
//                               />
//                               <span className="font-medium text-gray-900 dark:text-white">
//                                 {user.first_name} {user.last_name}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                             {user.email}
//                           </td>
//                           <td className="px-4 py-3">
//                             <span
//                               className={`rounded-full px-2 py-1 text-xs ${
//                                 user.role === "admin"
//                                   ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
//                                   : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
//                               }`}
//                             >
//                               {user.role}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Card>

//               <Card>
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     Pending Houses
//                   </h3>
//                   <Link to="/admin/houses">
//                     <Button variant="outline" size="sm">
//                       View All
//                     </Button>
//                   </Link>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left text-sm">
//                     <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                       <tr>
//                         <th className="px-4 py-3">House</th>
//                         <th className="px-4 py-3">Owner</th>
//                         <th className="px-4 py-3">Status</th>
//                         <th className="px-4 py-3">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {houses
//                         .filter((house) => !house.approved)
//                         .slice(0, 5)
//                         .map((house) => (
//                           <tr
//                             key={house.id}
//                             className="border-b dark:border-gray-700"
//                           >
//                             <td className="px-4 py-3">
//                               <div className="flex items-center">
//                                 <img
//                                   src={
//                                     house.images ||
//                                     "https://i.ibb.co/VWgQBg65/house.jpg"
//                                   }
//                                   alt={house.title}
//                                   className="mr-2 h-10 w-10 rounded object-cover"
//                                 />
//                                 <span className="line-clamp-1 font-medium text-gray-900 dark:text-white">
//                                   {house.title}
//                                 </span>
//                               </div>
//                             </td>
//                             <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                               {house.owner_name}
//                             </td>
//                             <td className="px-4 py-3">
//                               <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
//                                 Pending
//                               </span>
//                             </td>
//                             <td className="px-4 py-3">
//                               <Button
//                                 size="sm"
//                                 variant="success"
//                                 onClick={() => handleApproveHouse(house.id)}
//                               >
//                                 Approve
//                               </Button>
//                             </td>
//                           </tr>
//                         ))}
//                       {houses.filter((house) => !house.approved).length ===
//                         0 && (
//                         <tr>
//                           <td
//                             colSpan="4"
//                             className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
//                           >
//                             No pending houses
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         );

//       case "users":
//         return (
//           <Card>
//             <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Manage Users
//               </h3>

//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <form onSubmit={handleSearch} className="flex">
//                   <Input
//                     placeholder="Search users..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="rounded-r-none"
//                   />
//                   <Button type="submit" className="rounded-l-none">
//                     <Search size={18} />
//                   </Button>
//                 </form>

//                 <Button
//                   onClick={() => openModal("addUser")}
//                   className="whitespace-nowrap"
//                 >
//                   <Plus size={18} className="mr-1" /> Add User
//                 </Button>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                   <tr>
//                     <th className="px-4 py-3">User</th>
//                     <th className="px-4 py-3">Email</th>
//                     <th className="px-4 py-3">Phone</th>
//                     <th className="px-4 py-3">Role</th>
//                     <th className="px-4 py-3">Verified</th>
//                     <th className="px-4 py-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id} className="border-b dark:border-gray-700">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <img
//                             src={
//                               user.image ||
//                               "https://i.ibb.co/qMWG0D1/user-avatar.png"
//                             }
//                             alt={user.username}
//                             className="mr-2 h-8 w-8 rounded-full"
//                           />
//                           <div>
//                             <div className="font-medium text-gray-900 dark:text-white">
//                               {user.first_name} {user.last_name}
//                             </div>
//                             <div className="text-xs text-gray-500 dark:text-gray-400">
//                               @{user.username}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {user.email}
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {user.phone}
//                       </td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`rounded-full px-2 py-1 text-xs ${
//                             user.role === "admin"
//                               ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
//                               : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
//                           }`}
//                         >
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         {user.is_email_verified ? (
//                           <CheckCircle size={18} className="text-green-500" />
//                         ) : (
//                           <XCircle size={18} className="text-red-500" />
//                         )}
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => openModal("editUser", user)}
//                             className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//                           >
//                             <Edit size={18} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete("user", user.id)}
//                             className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
//                           >
//                             <Trash2 size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               className="mt-6"
//             />
//           </Card>
//         );

//       case "houses":
//         return (
//           <Card>
//             <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Manage Houses
//               </h3>

//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <form onSubmit={handleSearch} className="flex">
//                   <Input
//                     placeholder="Search houses..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="rounded-r-none"
//                   />
//                   <Button type="submit" className="rounded-l-none">
//                     <Search size={18} />
//                   </Button>
//                 </form>

//                 <Button variant="outline" className="whitespace-nowrap">
//                   <Filter size={18} className="mr-1" /> Filter
//                 </Button>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                   <tr>
//                     <th className="px-4 py-3">House</th>
//                     <th className="px-4 py-3">Location</th>
//                     <th className="px-4 py-3">Price</th>
//                     <th className="px-4 py-3">Owner</th>
//                     <th className="px-4 py-3">Status</th>
//                     <th className="px-4 py-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {houses.map((house) => (
//                     <tr
//                       key={house.id}
//                       className="border-b dark:border-gray-700"
//                     >
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <img
//                             src={
//                               house.images ||
//                               "https://i.ibb.co/VWgQBg65/house.jpg"
//                             }
//                             alt={house.title}
//                             className="mr-2 h-10 w-10 rounded object-cover"
//                           />
//                           <span className="line-clamp-1 font-medium text-gray-900 dark:text-white">
//                             {house.title}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {house.location}
//                       </td>
//                       <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
//                         ${Number.parseFloat(house.price).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {house.owner_name}
//                       </td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`rounded-full px-2 py-1 text-xs ${
//                             house.approved
//                               ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
//                               : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
//                           }`}
//                         >
//                           {house.approved ? "Approved" : "Pending"}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center space-x-2">
//                           <Link
//                             to={`/houses/${house.id}`}
//                             className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//                           >
//                             <button>View</button>
//                           </Link>
//                           {!house.approved && (
//                             <Button
//                               size="sm"
//                               variant="success"
//                               onClick={() => handleApproveHouse(house.id)}
//                             >
//                               Approve
//                             </Button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               className="mt-6"
//             />
//           </Card>
//         );

//       case "rentRequests":
//         return (
//           <Card>
//             <div className="mb-6 flex items-center justify-between">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Manage Rent Requests
//               </h3>

//               <Button
//                 variant="outline"
//                 onClick={() => window.location.reload()}
//               >
//                 <RefreshCw size={18} className="mr-1" /> Refresh
//               </Button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                   <tr>
//                     <th className="px-4 py-3">Tenant</th>
//                     <th className="px-4 py-3">House ID</th>
//                     <th className="px-4 py-3">Duration</th>
//                     <th className="px-4 py-3">Status</th>
//                     <th className="px-4 py-3">Payment</th>
//                     <th className="px-4 py-3">Date</th>
//                     <th className="px-4 py-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {rentRequests.map((request) => (
//                     <tr
//                       key={request.id}
//                       className="border-b dark:border-gray-700"
//                     >
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <img
//                             src={
//                               request.tenant?.image ||
//                               "https://i.ibb.co/qMWG0D1/user-avatar.png"
//                             }
//                             alt={request.tenant?.username}
//                             className="mr-2 h-8 w-8 rounded-full"
//                           />
//                           <span className="font-medium text-gray-900 dark:text-white">
//                             {request.tenant?.full_name}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {request.house}
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {request.duration} days
//                       </td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`rounded-full px-2 py-1 text-xs ${
//                             request.status === "approved"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
//                               : request.status === "rejected"
//                                 ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
//                                 : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
//                           }`}
//                         >
//                           {request.status.charAt(0).toUpperCase() +
//                             request.status.slice(1)}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`rounded-full px-2 py-1 text-xs ${
//                             request.paid
//                               ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
//                               : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
//                           }`}
//                         >
//                           {request.paid ? "Paid" : "Unpaid"}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {new Date(request.created_at).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center space-x-2">
//                           {request.status === "pending" && (
//                             <>
//                               <Button size="sm" variant="success">
//                                 Accept
//                               </Button>
//                               <Button size="sm" variant="danger">
//                                 Reject
//                               </Button>
//                             </>
//                           )}
//                           {request.status === "approved" && !request.paid && (
//                             <Button size="sm">Send Reminder</Button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               className="mt-6"
//             />
//           </Card>
//         );

//       case "categories":
//         return (
//           <Card>
//             <div className="mb-6 flex items-center justify-between">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Manage Categories
//               </h3>

//               <Button onClick={() => openModal("addCategory")}>
//                 <Plus size={18} className="mr-1" /> Add Category
//               </Button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
//                   <tr>
//                     <th className="px-4 py-3">ID</th>
//                     <th className="px-4 py-3">Name</th>
//                     <th className="px-4 py-3">Description</th>
//                     <th className="px-4 py-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categories.map((category) => (
//                     <tr
//                       key={category.id}
//                       className="border-b dark:border-gray-700"
//                     >
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {category.id}
//                       </td>
//                       <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
//                         {category.name}
//                       </td>
//                       <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
//                         {category.description}
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center space-x-2">
//                           <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                             <Edit size={18} />
//                           </button>
//                           <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
//                             <Trash2 size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               className="mt-6"
//             />
//           </Card>
//         );

//       default:
//         return <div>Select a tab to view content</div>;
//     }
//   };
//   console.log(houses);
//   return (
//     <div className="mx-auto max-w-[90vw] px-4 py-8 sm:px-6 lg:px-8">
//       <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
//         Admin Dashboard
//       </h1>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
//         {/* Sidebar */}
//         <div className="md:col-span-1">
//           <Card className="sticky top-24">
//             <nav className="space-y-1">
//               <button
//                 onClick={() => setActiveTab("overview")}
//                 className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
//                   activeTab === "overview"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <LayoutDashboard size={18} className="mr-3" />
//                 <span>Overview</span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("users")}
//                 className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
//                   activeTab === "users"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Users size={18} className="mr-3" />
//                 <span>Users</span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("houses")}
//                 className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
//                   activeTab === "houses"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Home size={18} className="mr-3" />
//                 <span>Houses</span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("rentRequests")}
//                 className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
//                   activeTab === "rentRequests"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Clock size={18} className="mr-3" />
//                 <span>Rent Requests</span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("categories")}
//                 className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
//                   activeTab === "categories"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Tag size={18} className="mr-3" />
//                 <span>Categories</span>
//               </button>
//             </nav>
//           </Card>
//         </div>

//         {/* Main Content */}
//         <div className="md:col-span-4">{renderTabContent()}</div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         title={
//           modalType === "addUser"
//             ? "Add New User"
//             : modalType === "editUser"
//               ? "Edit User"
//               : modalType === "addCategory"
//                 ? "Add New Category"
//                 : "Modal"
//         }
//         size="lg"
//       >
//         {renderModalContent()}
//       </Modal>
//     </div>
//   );
// };

// export default AdminDashboard;

import AdminLayout from "../../components/dashboard/AdminLayout";

const AdminDashboard = () => {
  return <AdminLayout />;
};

export default AdminDashboard;
