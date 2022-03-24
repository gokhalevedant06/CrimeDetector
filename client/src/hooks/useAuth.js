import { useCallback } from "react";

import { loginSuccess, logoutSuccess } from "../redux/slices/auth";
import { useSnackbar } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { setSession, isValidToken } from "../utils/jwt";
import axios from "../utils/axios";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  // const { enqueueSnackbar } = useSnackbar();

  const login = useCallback(async (userData) => {
    const response = await axios.post("/admin/login", userData);
    console.log(response, "i am login response");
    if (!response.data.ok) {
      // enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      const { token, AdminLogin } = response.data;
      setSession(token);
      dispatch(loginSuccess({ ...AdminLogin }));
    }
  }, []);

  const logout = useCallback(async () => {
    setSession(null);
    dispatch(logoutSuccess());
  }, []);

  const registerAdmin = useCallback(async (adminData) => {
    const response = await axios.post("/admin/addAdmin", adminData);
    if (!response.data.ok) {
      console.log(response.data.message);
      // enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      console.log(response);
    }
  }, []);

  return {
    login,
    isLoggedIn,
    logout,
    registerAdmin
  };
};

export default useAuth;
