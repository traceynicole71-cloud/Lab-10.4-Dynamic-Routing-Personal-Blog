import { AnimatedPage } from '../components/AnimatedPage';

const Admin = () => {
    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto p-8 bg-slate-100 rounded-2xl border-2 border-dashed borde-slate-300">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Admin Dashboard</h1>
                <p className="text-xl text-emerald-700 font-medium mb-6">Welcome Back, Administrator.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-rose-400">
                        <span className="block text-2xl font-bold">12</span>
                        <span className="text-slate-500">Total Posts</span>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-emerald-400">
                        <span className="block text-2xl font-bold">450</span>
                        <span className="text-slate-500">Views Today</span>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-slate-400">
                        <span className="block text-2xl font-bold">Active</span>
                        <span className="text-slate-500">Status</span>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Admin;