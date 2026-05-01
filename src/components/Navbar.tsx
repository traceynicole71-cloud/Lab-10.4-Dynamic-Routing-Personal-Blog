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
        <nav className="bg-slate-800 text-slate-100 p-4 justify-between items-center shadow-lg border-b-4 border-rose-500">
         <Link to="/blog" className="text-xl font-bold text-emerald-400">THE PINK POST Blog</Link>
         <div className="space-x-6 flex items-center">
            <Link to="/blog" className="hover:text-rose-400 transition-colors">BLOG</Link>
            {isAuthenticated ? (
                <>
                <Link to="/admin" className="hover:text-rose-400 transition-colors">ADMIN</Link>
                <button
                onClick={handleLogout}
                className="bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded text-white font-medium"
                >
                    Logout
                    </button>
                    </>
            ) : (
                <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded text-white font-medium">
                    Login
                </Link>
            )}
            </div>   
        </nav>
    );
};