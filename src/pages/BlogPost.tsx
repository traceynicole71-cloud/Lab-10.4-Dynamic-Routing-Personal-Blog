import { useParams } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';
import { usePosts } from '../context/PostsContext';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { posts } = usePosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="text-center mt-20">
<h1 className="text-3xl text-pink-600 font-bold">404: Post Not Found</h1>
</div>
        );
    }

    return (
        <AnimatedPage>
            <article className="max-w-2xl mx-auto p-8">
                <h1 className="text-5xl font-extrabold text-zinc-800 mb-4">{post.title}</h1>
                <div className="h-1 w-20 bg-green-500 mb-8"></div>
<p className="text-lg text-zinc-600 leading-relaxed">{post.content}</p>
            </article>
        </AnimatedPage>
    );
};

export default BlogPost;