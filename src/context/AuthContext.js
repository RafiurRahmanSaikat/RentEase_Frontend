import { createContext } from "react";

const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [user, setUser] = useState(null);

//   // Fetch user info when the token changes
//   const {
//     data: userData,
//     error: userError,
//     refetch: fetchUser,
//   } = useFetch("/accounts/users/me/", "GET", {}, [token]);

//   // Update user state when data is available
//   useEffect(() => {
//     if (userData) {
//       setUser(userData);
//     }
//   }, [userData]);

//   // Login function
//   const login = async (username, password) => {
//     const { data, error } = await UseFetch("/token/", "POST", {
//       body: { username, password },
//     });

//     if (data) {
//       setToken(data.access);
//       localStorage.setItem("token", data.access);
//       fetchUser(); // Fetch user data after login
//     }

//     return { data, error };
//   };

//   // Signup function
//   const signup = async (userData) => {
//     const { data, error } = await UseFetch("/accounts/users/", "POST", {
//       body: userData,
//     });

//     return { data, error };
//   };

//   // Logout function
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ token, user, login, signup, logout, fetchUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

export default AuthContext;
