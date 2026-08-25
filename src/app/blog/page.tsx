import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest news, insights, and tips from Skyward Media — Kenya's leading outdoor advertising agency.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/blog.jpg" alt="" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay updated with the latest from Skyward Media and the outdoor advertising industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No blog posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
                      <Calendar className="w-4 h-4" />
                      <time>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-primary group-hover:text-accent-red transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-text-muted line-clamp-3 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-accent-red font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
