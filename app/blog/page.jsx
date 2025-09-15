import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "W567 Game Blog",
  description: "All guides and tutorials for W567 Game.",
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
