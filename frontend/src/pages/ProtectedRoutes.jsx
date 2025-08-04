import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate , NavLink} from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    async function tokenhandling (){
      const config= {
        headers : {
          token : localStorage.getItem('token'),
        },
      }
      try{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/loginauthentication`,config);
      }catch(err){
        // console.log(err);
        localStorage.clear();
        navigate("/login")
      }
    }    
    tokenhandling();
  }, [])

  return localStorage.getItem("token") ? children : <NavLink to={"/login"}/>
};

export default ProtectedRoutes;
