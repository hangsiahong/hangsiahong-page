import { getBlogPosts, getCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import CategoryList from '@/components/blog/CategoryList';

export const metadata = {
    title: 'Blog | Hangsia Hong',
    description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
    const posts = getBlogPosts();
    const categories = getCategories();

    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Blog</h1>

            <CategoryList categories={categories} />

            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
                {posts.length === 0 && (
                    <p className="text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}
