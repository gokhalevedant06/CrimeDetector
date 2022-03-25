import { useCallback } from "react";

import { loginSuccess, logoutSuccess,initialize } from "../redux/slices/auth";
import { useSnackbar } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { setSession, isValidToken } from "../utils/jwt";
import axios from "../utils/axios";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn,user } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  

  const login = useCallback(async (userData) => {
    const response = await axios.post("/admin/login", userData);
    console.log(response, "i am login response");
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
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
    console.log(response,"admin respose");
    if (!response.data.ok) {
      console.log(response.data.message);
      enqueueSnackbar(response.data.message, { variant: "error" });
      return false;
    } else {
      console.log(response);
      enqueueSnackbar(response.data.message,{variant:'success'});
      return true;
    }
  }, []);

  const initializeAuth = useCallback(async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get("/admin/verify");
      if (response) {
        const { user } = response.data;
        delete user.password;
        dispatch(
          initialize({
            user,
            isLoggedIn: true,
          })
        );
      } else {
        dispatch(
          initialize({
            user: null,
            isLoggedIn: false,
          })
        );
      }
    } else {
      dispatch(
        initialize({
          user: null,
          isLoggedIn: false,
        })
      );
    }
  });


  const deleteAdmin = useCallback(async (id)=>{
    const response = await axios.delete(`/admin/${id}`);
    if(response.data.ok){
      enqueueSnackbar(response.data.message,{variant:'success'});
    }else{
      enqueueSnackbar('Error deleting admin!',{variant:'error'});
    }
  },[])


  return {
    login,
    isLoggedIn,
    logout,
    registerAdmin,
    initializeAuth,
    deleteAdmin,
    user
  };
};

export default useAuth;
