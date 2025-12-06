import Link from 'next/link';

export default function CategoryList({ categories, current }: { categories: string[], current?: string }) {
    if (categories.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!current
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
            >
                All
            </Link>
            {categories.map((category) => (
                <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase()}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${current?.toLowerCase() === category.toLowerCase()
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                >
                    {category}
                </Link>
            ))}
        </div>
    );
}
