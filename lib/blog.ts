import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const blogDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
    slug: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        category?: string;
    };
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(blogDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug: id,
            metadata: data as BlogPost['metadata'],
            content,
        }
    })

    return allPostsData.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
        }
        return 1
    })
}

export function getPost(slug: string): BlogPost | null {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        metadata: data as BlogPost['metadata'],
        content,
    }
}

export function getCategories(): string[] {
    const posts = getBlogPosts();
    const categories = new Set(posts.map((post) => post.metadata.category).filter(Boolean));
    return Array.from(categories) as string[];
}

export function getPostsByCategory(category: string): BlogPost[] {
    if (!category) return [];
    const posts = getBlogPosts();
    return posts.filter((post) =>
        post.metadata.category && post.metadata.category.toLowerCase() === category.toLowerCase()
    );
}
