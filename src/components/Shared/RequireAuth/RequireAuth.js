import React from "react";
import auth from "../../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import HashLoader from "react-spinners/HashLoader";
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center  h-full min-h-[450px] sm:min-h-[575px] md:min-h-[625px]  items-center mt-[-35px]">
        <HashLoader color="#ed0b70" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
