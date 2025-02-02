import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Since we're not using authentication, this component is just a placeholder
  return <Outlet />;
};

export default PrivateRoute;
