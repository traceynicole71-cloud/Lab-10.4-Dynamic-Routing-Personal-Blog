import { useState } from 'react';
import { AnimatedPage } from '../components/AnimatedPage';
import { usePosts } from '../context/PostsContext';

const Admin = () => {
    const { posts, addPost, deletePost } = usePosts();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            setError('Title and content are required.');
            return;
        }
        const slug = title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        addPost({ title: title.trim(), content: content.trim(), slug });
        setTitle('');
        setContent('');
        setError('');
    };

    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto p-8 bg-zinc-100 rounded-2xl border-2 border-dashed border-zinc-300">
                <h1 className="text-4xl font-bold text-zinc-800 mb-4">Admin Dashboard</h1>
                <p className="text-xl text-green-700 font-medium mb-6">Welcome Back, Administrator.</p>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-pink-400">
                        <span className="block text-2xl font-bold">{posts.length}</span>
                        <span className="text-zinc-500">Total Posts</span>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-green-400">
                        <span className="block text-2xl font-bold">450</span>
                        <span className="text-zinc-500">Views Today</span>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center border-b-4 border-zinc-400">
                        <span className="block text-2xl font-bold">Active</span>
                        <span className="text-zinc-500">Status</span>
                    </div>
                </div>

                {/* Add Post Form */}
                <div className="bg-white p-6 rounded-xl shadow mb-10 border-t-4 border-pink-400">
                    <h2 className="text-2xl font-bold text-zinc-800 mb-4">Add New Post</h2>
                    {error && <p className="text-pink-600 mb-3 font-medium">{error}</p>}
                    <form onSubmit={handleAdd} className="space-y-4">
                        <div>
                            <label className="block text-zinc-700 font-medium mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                placeholder="Post title..."
                            />
                        </div>
                        <div>
                            <label className="block text-zinc-700 font-medium mb-1">Content</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={4}
                                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                placeholder="Write your post content..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Add Post
                        </button>
                    </form>
                </div>

                {/* Post List */}
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 mb-4">Manage Posts</h2>
                    <ul className="space-y-3">
                        {posts.map((post) => (
                            <li key={post.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow border-l-4 border-green-400">
                                <div>
                                    <p className="font-semibold text-zinc-800">{post.title}</p>
                                    <p className="text-sm text-zinc-400">/blog/{post.slug}</p>
                                </div>
                                <button
                                    onClick={() => deletePost(post.id)}
                                    className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold px-4 py-1 rounded-lg transition-colors"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Admin;