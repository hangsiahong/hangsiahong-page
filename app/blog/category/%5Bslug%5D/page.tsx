import { getPostsByCategory, getCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import CategoryList from '@/components/blog/CategoryList';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((category) => ({
        slug: category.toLowerCase(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return {
        title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Blog | Hangsia Hong`,
        description: `Articles about ${slug}`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const categories = getCategories();
    const posts = getPostsByCategory(slug);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Blog</h1>

            <CategoryList categories={categories} current={slug} />

            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
