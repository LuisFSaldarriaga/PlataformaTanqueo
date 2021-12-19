import useAuth from "../auth/useAuth";

export default function PublicRouter({ children }) {
    const auth = useAuth();
    return (
        auth.user ? auth.internoExterno() : children 
    )
}
