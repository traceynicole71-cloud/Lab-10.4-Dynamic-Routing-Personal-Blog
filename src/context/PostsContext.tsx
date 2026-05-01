import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { posts as initialPosts } from '../library/posts';
import type { Post } from '../library/posts';

interface PostsContextType {
    posts: Post[];
    addPost: (post: Omit<Post, 'id'>) => void;
    deletePost: (id: number) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    const addPost = (post: Omit<Post, 'id'>) => {
        const newPost: Post = {
            ...post,
            id: Date.now(),
        };
        setPosts((prev) => [newPost, ...prev]);
    };

    const deletePost = (id: number) => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <PostsContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) throw new Error('usePosts must be used within PostsProvider');
    return context;
};
