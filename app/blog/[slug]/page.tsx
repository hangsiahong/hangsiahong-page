import { getBlogPosts, getPost } from '@/lib/blog';
import { CustomMDX } from '@/components/blog/CustomMDX';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) {
        return;
    }
    return {
        title: `${post.metadata.title} | Hangsia Hong`,
        description: post.metadata.summary,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: 'article',
            publishedTime: post.metadata.publishedAt,
            url: `https://hangsiahong.com/blog/${post.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metadata.title,
            description: post.metadata.summary,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-24 max-w-3xl">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
            >
                <ArrowLeft size={16} />
                Back to Blog
            </Link>

            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {post.metadata.title}
                </h1>
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                    <p className="text-sm">
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <CustomMDX source={post.content} />
            </div>
        </article>
    );
}
