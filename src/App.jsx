import AppRouter from "./routes/AppRouter"
import AuthProvider from "./auth/AuthProvider";

export function App() {
    

    return (
        <div className="text-white">
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    ); 
}