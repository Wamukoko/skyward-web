"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileText,
  Users,
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
  Eye,
  EyeOff,
  LayoutDashboard,
} from "lucide-react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  published: boolean;
  content: string;
}

interface Partner {
  slug: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  order: number;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"posts" | "partners">("posts");
  const [posts, setPosts] = useState<Post[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postsRes, partnersRes] = await Promise.all([
        fetch("/api/posts"),
        fetch("/api/partners"),
      ]);
      const postsData = await postsRes.json();
      const partnersData = await partnersRes.json();
      setPosts(postsData);
      setPartners(partnersData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  const handleSavePost = async () => {
    if (!editingPost) return;
    try {
      const postToSave = {
        ...editingPost,
        slug: editingPost.slug || slugify(editingPost.title),
      };
      if (isCreating) {
        const res = await fetch("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postToSave),
        });
        if (res.ok) {
          setEditingPost(null);
          setIsCreating(false);
          fetchData();
        }
      } else {
        const res = await fetch(`/api/posts/${postToSave.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postToSave),
        });
        if (res.ok) {
          setEditingPost(null);
          setIsCreating(false);
          fetchData();
        }
      }
    } catch (error) {
      console.error("Failed to save post:", error);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      fetchData();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleSavePartner = async () => {
    if (!editingPartner) return;
    try {
      const partnerToSave = {
        ...editingPartner,
        slug: editingPartner.slug || slugify(editingPartner.name),
      };
      if (isCreating) {
        const res = await fetch("/api/partners", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(partnerToSave),
        });
        if (res.ok) {
          setEditingPartner(null);
          setIsCreating(false);
          fetchData();
        }
      } else {
        const res = await fetch(`/api/partners/${partnerToSave.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(partnerToSave),
        });
        if (res.ok) {
          setEditingPartner(null);
          setIsCreating(false);
          fetchData();
        }
      }
    } catch (error) {
      console.error("Failed to save partner:", error);
    }
  };

  const handleDeletePartner = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this partner?")) return;
    try {
      await fetch(`/api/partners/${slug}`, { method: "DELETE" });
      fetchData();
    } catch (error) {
      console.error("Failed to delete partner:", error);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-primary text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <LayoutDashboard className="w-6 h-6 text-accent-red" />
          <h1 className="text-2xl font-bold">Content Manager</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => {
              setActiveTab("posts");
              setEditingPost(null);
              setEditingPartner(null);
              setIsCreating(false);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "posts"
                ? "bg-accent-red text-white"
                : "bg-white text-primary hover:bg-surface border border-border"
            }`}
          >
            <FileText className="w-4 h-4" /> Blog Posts ({posts.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("partners");
              setEditingPost(null);
              setEditingPartner(null);
              setIsCreating(false);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "partners"
                ? "bg-accent-red text-white"
                : "bg-white text-primary hover:bg-surface border border-border"
            }`}
          >
            <Users className="w-4 h-4" /> Partners ({partners.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-text-muted">Loading...</div>
        ) : (
          <>
            {activeTab === "posts" && (
              <div>
                {editingPost ? (
                  <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-primary">
                        {isCreating ? "New Post" : "Edit Post"}
                      </h2>
                      <button onClick={() => { setEditingPost(null); setIsCreating(false); }} className="p-2 hover:bg-surface rounded-lg">
                        <X className="w-5 h-5 text-text-muted" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Title</label>
                        <input
                          type="text"
                          value={editingPost.title}
                          onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1">Category</label>
                          <input
                            type="text"
                            value={editingPost.category}
                            onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1">Date</label>
                          <input
                            type="date"
                            value={editingPost.date}
                            onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Excerpt</label>
                        <textarea
                          value={editingPost.excerpt}
                          onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                          rows={2}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red resize-none text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Content (Markdown)</label>
                        <textarea
                          value={editingPost.content}
                          onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                          rows={12}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red resize-none font-mono text-sm text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editingPost.published}
                            onChange={(e) => setEditingPost({ ...editingPost, published: e.target.checked })}
                            className="w-4 h-4 accent-accent-red"
                          />
                          <span className="text-sm font-semibold text-primary">Published</span>
                        </label>
                      </div>
                      <button
                        onClick={handleSavePost}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" /> Save Post
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingPost({
                          slug: "",
                          title: "",
                          excerpt: "",
                          date: new Date().toISOString().split("T")[0],
                          category: "Company News",
                          published: false,
                          content: "",
                        });
                        setIsCreating(true);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-colors mb-6"
                    >
                      <Plus className="w-4 h-4" /> New Post
                    </button>
                    <div className="space-y-3">
                      {posts.map((post) => (
                        <div key={post.slug} className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-border">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-primary">{post.title}</h3>
                              {post.published ? (
                                <Eye className="w-4 h-4 text-accent-green" />
                              ) : (
                                <EyeOff className="w-4 h-4 text-text-muted" />
                              )}
                            </div>
                            <p className="text-sm text-text-muted">
                              {post.category} · {post.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => { setEditingPost(post); setIsCreating(false); }} className="p-2 hover:bg-surface rounded-lg">
                              <Edit3 className="w-4 h-4 text-text-muted" />
                            </button>
                            <button onClick={() => handleDeletePost(post.slug)} className="p-2 hover:bg-red-50 rounded-lg">
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {posts.length === 0 && (
                        <p className="text-center py-8 text-text-muted">No posts yet. Create your first post!</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === "partners" && (
              <div>
                {editingPartner ? (
                  <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-primary">
                        {isCreating ? "New Partner" : "Edit Partner"}
                      </h2>
                      <button onClick={() => { setEditingPartner(null); setIsCreating(false); }} className="p-2 hover:bg-surface rounded-lg">
                        <X className="w-5 h-5 text-text-muted" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Name</label>
                        <input
                          type="text"
                          value={editingPartner.name}
                          onChange={(e) => setEditingPartner({ ...editingPartner, name: e.target.value })}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Logo Path</label>
                        <input
                          type="text"
                          value={editingPartner.logo}
                          onChange={(e) => setEditingPartner({ ...editingPartner, logo: e.target.value })}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                          placeholder="/images/partners/example.png"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Description</label>
                        <textarea
                          value={editingPartner.description}
                          onChange={(e) => setEditingPartner({ ...editingPartner, description: e.target.value })}
                          rows={2}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red resize-none text-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1">Website</label>
                          <input
                            type="text"
                            value={editingPartner.website}
                            onChange={(e) => setEditingPartner({ ...editingPartner, website: e.target.value })}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1">Order</label>
                          <input
                            type="number"
                            value={editingPartner.order}
                            onChange={(e) => setEditingPartner({ ...editingPartner, order: parseInt(e.target.value) || 0 })}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent-red text-primary"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleSavePartner}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" /> Save Partner
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingPartner({
                          slug: "",
                          name: "",
                          logo: "/images/partners/",
                          description: "",
                          website: "",
                          order: partners.length + 1,
                        });
                        setIsCreating(true);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-colors mb-6"
                    >
                      <Plus className="w-4 h-4" /> New Partner
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {partners.map((partner) => (
                        <div key={partner.slug} className="bg-white rounded-xl p-5 shadow-sm border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <div className="relative w-20 h-12">
                              <Image src={partner.logo} alt={partner.name} fill className="object-contain" sizes="80px" />
                            </div>
                            <div className="flex items-center gap-1">
                              <button onClick={() => { setEditingPartner(partner); setIsCreating(false); }} className="p-2 hover:bg-surface rounded-lg">
                                <Edit3 className="w-4 h-4 text-text-muted" />
                              </button>
                              <button onClick={() => handleDeletePartner(partner.slug)} className="p-2 hover:bg-red-50 rounded-lg">
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </button>
                            </div>
                          </div>
                          <h3 className="font-semibold text-primary">{partner.name}</h3>
                          <p className="text-sm text-text-muted">{partner.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
