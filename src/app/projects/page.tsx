import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View Skyward Media's portfolio of outdoor advertising projects across Kenya, including billboard installations, sky signs, and wall wraps.",
};

const projects = [
  {
    title: "Azima Sacco Billboard",
    location: "Kenya",
    type: "Billboard",
    image: "/images/projects/azima-install.jpg",
    description: "A genuine client billboard installation for Azima Sacco, demonstrating our commitment to quality outdoor advertising.",
    real: true,
  },
  {
    title: "Sky Sign Installation",
    location: "[TO CONFIRM]",
    type: "Sky Sign",
    image: "/images/services/skysign.webp",
    description: "Elevated sky sign providing maximum visibility for brand messaging in urban settings.",
    real: false,
  },
  {
    title: "Highway Billboard Display",
    location: "[TO CONFIRM]",
    type: "Billboard",
    image: "/images/services/billboards.jpg",
    description: "Strategic billboard placement along a major highway corridor for extended brand exposure.",
    real: false,
  },
  {
    title: "Building Wall Wrap",
    location: "[TO CONFIRM]",
    type: "Wall Wrap",
    image: "/images/services/billboards.jpg",
    description: "Large-format building wrap transforming a commercial facade into a powerful advertising canvas.",
    real: false,
  },
  {
    title: "Billboard Fabrication",
    location: "[TO CONFIRM]",
    type: "Fabrication",
    image: "/images/services/fabrication.jpg",
    description: "Custom billboard structure fabricated to exact specifications for a client campaign.",
    real: false,
  },
  {
    title: "Urban Campaign Display",
    location: "[TO CONFIRM]",
    type: "Billboard",
    image: "/images/services/billboards.jpg",
    description: "Multi-location billboard campaign reaching urban audiences across key commercial districts.",
    real: false,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/brand/logo-icon.svg" alt="" width={300} height={300} className="absolute -top-20 -right-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A showcase of our outdoor advertising installations across Kenya.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Skyward Media project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!project.real && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                        Illustrative Render
                      </span>
                    </div>
                  )}
                  {project.real && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-accent-green text-white text-xs font-bold rounded-full">
                        Real Installation
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                    <span className="font-medium text-primary">{project.type}</span>
                    <span>·</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-text-muted">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Want to See Your Brand Here?
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Let us help you create an impactful outdoor advertising campaign. Contact us to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
          >
            Start Your Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
