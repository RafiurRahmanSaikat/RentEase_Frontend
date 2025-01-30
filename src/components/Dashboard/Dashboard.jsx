import React, { useContext } from "react";
import { Loading } from "..";
import AuthContext from "../../context/AuthContext";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

export default function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  if (loading) return <Loading />;

  return (
    <section>
      {user?.account_type == "User" && <UserDashboard user={user} />}
      {user?.account_type == "Admin" && <AdminDashboard />}
    </section>
  );
}
