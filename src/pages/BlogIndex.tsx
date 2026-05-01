import { Link } from 'react-router-dom';
import { posts } from '../library/posts';
import { AnimatedPage } from '../components/AnimatedPage';

const BlogIndex = () => {
    <AnimatedPage>
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-8 border-l-8 border-rose-500 pl-4">Latest Posts</h1>
            <div className="grid gap-6">
                {posts.map((post) => (
                    <Link key={post.id} to={`/blog/{post.slug}`}>
<div className="bg-white border border-slate-200 p-6 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all group">
    <h2 className="text-2xl font-semibold text-slate-700 group-hover:text-emerald-600">{post.title}</h2>
    <p className="text-slate-500 mt-2">Click To Read More...</p>
</div>
                    </Link>
                ))}
            </div>
        </div>
    </AnimatedPage>
};

export default BlogIndex;