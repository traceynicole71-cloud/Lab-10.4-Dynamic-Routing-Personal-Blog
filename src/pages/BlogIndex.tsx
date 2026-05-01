import { Link } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';
import { usePosts } from '../context/PostsContext';

const BlogIndex = () => {
    const { posts } = usePosts();
    return <AnimatedPage>
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-zinc-800 mb-8 border-l-8 border-pink-500 pl-4">Latest Posts</h1>
            <div className="grid gap-6">
                {posts.length === 0 && (
                    <p className="text-zinc-500">No posts yet. Add one from the Admin panel.</p>
                )}
                {posts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`}>
<div className="bg-white border border-zinc-200 p-6 rounded-lg hover:border-green-500 hover:shadow-md transition-all group">
    <h2 className="text-2xl font-semibold text-zinc-700 group-hover:text-green-600">{post.title}</h2>
    <p className="text-zinc-500 mt-2">Click To Read More...</p>
</div>
                    </Link>
                ))}
            </div>
        </div>
    </AnimatedPage>
};

export default BlogIndex;