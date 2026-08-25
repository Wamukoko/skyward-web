import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/content";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest News</h2>
            <p className="text-text-muted">Stay updated with Skyward Media</p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-accent-red hover:text-accent-red-hover font-semibold transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-primary group-hover:text-accent-red transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red-hover font-semibold transition-colors"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
