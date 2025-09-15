import { getBlogBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.w567game.cc/blog/${params.slug}`,
    },
    alternates: {
      canonical: `https://www.w567game.cc/blog/${params.slug}`,
    },
  };
}

export default function BlogPage({ params }) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return (
      <div className="p-10 text-center text-red-500">Blog post not found.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-500">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <div
        className="prose prose-lg dark:prose-invert  text-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
