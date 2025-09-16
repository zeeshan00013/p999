import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | W567 Game",
  description:
    "Read the latest blog posts from W567 Game covering updates, guides, and insights into online gaming and casino experiences.",
  keywords: [
    "W567 blog",
    "W567 Game news",
    "casino tips",
    "online gaming updates",
    "Pakistan gaming blog",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Blog | W567 Game",
    description:
      "Stay updated with the latest articles and insights from W567 Game. Discover gaming tips, updates, and news.",
    url: "https://www.w567game.cc/blog",
    siteName: "W567 Game",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.w567game.cc/blog",
  },
};

export default function BlogListPage() {
  const posts = getAllBlogs();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-green-500">
        W567 Blog Articles
      </h1>
      <ul className="space-y-6  md:grid-cols-2 grid grid-cols-1 border gap-3  ">
        {posts.map((post) => (
          <li key={post.slug} className="bg-yellow-600 p-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl text-white hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-200 text-sm">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
