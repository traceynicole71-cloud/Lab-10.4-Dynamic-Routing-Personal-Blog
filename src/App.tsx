import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
          <Navbar />
          <main className="container mx-auto py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/blog" />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                  </ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

  export default App;
