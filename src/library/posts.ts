export interface Post {
    id: number;
    slug: string;
    title: string;
    content: string;
}

export const posts: Post[] = [
    {
        id: 1,
        slug: 'getting-started-tailwind',
        title: 'Getting Started With Tailwind',
        content: 'Tailwind CSS is a utility-first CSS framework for rapidly building cutsom UI...'
    },
    {
        id: 2,
        slug: 'react-router-v6',
        title: 'Mastering Dynamic Routes',
        content: 'Dynamic rounting allows you to map URL parameters to specific data components...'
    },
    {
        id: 3,
        slug: 'typescript-tips',
        title: 'Typescript Best Practices',
        content: 'Using interfaces and types ensure your application remains scalable and bug-free.'
    }
];