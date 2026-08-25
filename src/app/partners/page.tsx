import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPartners } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Meet the organizations that trust Skyward Media for their outdoor advertising needs across Kenya.",
};

export default function PartnersPage() {
  const partners = getAllPartners();

  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/brand/logo-icon.svg" alt="" width={300} height={300} className="absolute -top-20 -right-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">Our Partners</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted By Leading Organizations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are proud to work with a diverse portfolio of clients across various sectors in Kenya.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.slug}
                className="group bg-surface rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border"
              >
                <div className="relative w-32 h-24 mx-auto mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{partner.name}</h3>
                <p className="text-sm text-text-muted">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Become a Partner
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let Skyward Media help you achieve unparalleled brand visibility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
