import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../Context/authProvider";

import React from 'react'

const Auth = ({ allowedRoles }) => {
    const {auth} = useContext(AuthContext);
    const location = useLocation();

  return (
    allowedRoles.find(role => auth?.role?.includes(role))
     // auth.role.find(role => allowedRoles?.includes(role))
      ? <Outlet/>
      : auth?.name
        ? <Navigate to="/unauthorized" state={{ from: location}} replace/>
        : <Navigate to="/register" state={{from: location}} replace/>
  )
}

export default Auth;
