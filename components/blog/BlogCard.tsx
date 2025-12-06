import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export default function BlogCard({ post }: { post: any }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block group p-6 -mx-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    {post.metadata.category && (
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full w-fit">
                            {post.metadata.category}
                        </span>
                    )}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(post.metadata.publishedAt)}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.metadata.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.metadata.summary}
                </p>
            </div>
        </Link>
    );
}
