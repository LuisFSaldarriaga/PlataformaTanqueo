import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PrivateRouter({ children }) {
    
    const auth = useAuth();
    const location = useLocation();
    
    return (
        auth.esExterno() ? children : <Navigate to={{pathname: "/ingresar"}} state={{from: location}} />
    )
}
