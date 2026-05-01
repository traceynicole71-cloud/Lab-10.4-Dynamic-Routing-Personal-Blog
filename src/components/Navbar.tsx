import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-zinc-900 text-zinc-100 p-4 flex justify-between items-center shadow-lg border-b-4 border-pink-500">
         <Link to="/blog" className="text-xl font-bold text-pink-400">THE PINK POST BLOG</Link>
         <div className="space-x-6 flex items-center">
            <Link to="/blog" className="hover:text-pink-400 transition-colors">BLOG</Link>
            {isAuthenticated ? (
                <>
                <Link to="/admin" className="hover:text-pink-400 transition-colors">ADMIN</Link>
                <button
                onClick={handleLogout}
                className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white font-medium"
                >
                    Logout
                    </button>
                    </>
            ) : (
                <Link to="/login" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium">
                    Login
                </Link>
            )}
            </div>   
        </nav>
    );
};