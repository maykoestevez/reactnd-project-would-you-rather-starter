import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children, authed }) {
    const location = useLocation();
  
    return authed !== undefined ? (
      children
    ) : (
      <Navigate to="/" replace state={{ path: location.pathname }} />
    );
  }