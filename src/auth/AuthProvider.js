import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    toast.configure();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(() => {
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("user");
        }
    }, [user])

    const contextValue = {
        user,
        login(username, password) {
            fetch("http://localhost:8080/ingresar", {
                headers: { "Content-Type": "application/json"},
                method: "POST", 
                body: JSON.stringify({ username, password })
            })
            .then(data =>  data.json())
            .then((data) => {
                if (data.msg) {
                    setUser(JSON.stringify({ username: data.username, id: data.id, rol: "interno" } || null))
                    toast.success(data.msg, {autoClose: 3000, icon: "😉"})
                } else {
                    toast.error(data.err, {autoClose: 3000})
                }
            })
            .catch(error => alert("error"+ error))
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;