import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backEndApi } from "../constants";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await loadUserInfo(token);
    }
  };
  const loadUserInfo = async (token) => {
    setLoading(true);
    try {
      const response = await axios.get(`${backEndApi}/account/profile/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // console.log("loadUserInfo AuthContext", response);
      setIsAuthenticated(true);
      setUser(response.data);
      // console.log("Loading user info...", response.data);
    } catch (error) {
      console.error("Error loading user info:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const Login = async (credentials) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${backEndApi}/account/login/`,
        credentials,
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      await loadUserInfo(token);
      toast.success("Logged in successfully!");

      return response;
    } catch (error) {
      // console.error("Error logging in:", error);
      toast.error("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  const LogOut = async () => {
    try {
      setLoading(true);
      await axios.get(`${backEndApi}/account/logout/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("token");
      toast.error("Logged out successfully!");
      // window.location.href = "/login";
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
      // console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImageToImgBB = async (imageFile) => {
    const imgbbApiKey = "1852d1780a7c1d17aff8afe66b4878a8";
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData,
      );
      return response.data.data.url;
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const SignUp = async (formData) => {
    try {
      setLoading(true);

      // console.log("Form data received:", formData);

      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadImageToImgBB(formData.image);
      }

      const signUpData = {
        username: formData.username,
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        account_type: formData.accountType,
        address: formData.address,
        image: imageUrl,
        mobile_number: formData.mobileNumber,
      };

      // console.log("Data being sent to backend:", signUpData);

      const response = await axios.post(
        `${backEndApi}/account/register/`,
        signUpData,
      );
      // console.log(response);
      toast.success(
        "Registration successful! Please check your email to verify your account.",
      );
      return response;
    } catch (error) {
      // console.error("Error signing up:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        SignUp,
        Login,
        LogOut,
        uploadImageToImgBB,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
