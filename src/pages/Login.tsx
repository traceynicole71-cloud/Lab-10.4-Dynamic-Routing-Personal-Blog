import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';

const Login = () => {
    const { login, isAuthenticated } = useAuth();
    const nagivate = useNavigate();

    const handleLogin = () => {
        login();
        //redirect to admin after login
        nagivate('/admin');
    };

    return (
<AnimatedPage>
    <div className="flex flex-col items-center justify-center mt-20">
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-500 w-full max-w-md">
            <h1 className="text-3xl font-bold text-zinc-800 mb-6 text-center">Admin Login</h1>
{isAuthenticated ? (
    <p className="text-green-600 text-center mb-4">You are already logged in!</p>
) : (
    <button
    onClick={handleLogin}
    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
    >
        Log Into Dashboard
    </button>
)}
        </div>
    </div>
</AnimatedPage>    
);
};

export default Login;