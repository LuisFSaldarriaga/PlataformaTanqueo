import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRouter({ children }) {
    const auth = useAuth();
    return (
        auth.user ? <Navigate to={{ pathname: "/precios"}} /> : children
    )
}
