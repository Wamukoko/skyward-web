import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles, Shield, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Skyward Media's outdoor advertising services: sky signs, wall wraps, billboards, and billboard fabrication across Kenya.",
};

const services = [
  {
    id: "sky-signs",
    title: "Sky Signs",
    icon: Eye,
    image: "/images/services/skysign.webp",
    description:
      "Skyward Media positions sky signs in major Kenyan cities, towns and highways to provide excellent coverage and attention to targeted audiences. Sky signs are elevated signage structures that command attention from a distance, making them ideal for brand visibility in urban and peri-urban settings.",
    features: [
      "High-visibility elevated positioning",
      "Suitable for urban and highway locations",
      "Durable weather-resistant materials",
      "Custom design and fabrication",
    ],
    illustration: true,
  },
  {
    id: "wall-wraps",
    title: "Wall Wraps",
    icon: Sparkles,
    image: "/images/projects/azima-install.jpg",
    description:
      "Our wall wraps are a unique and impactful platform for advertisers to interact with their audiences. We create awareness of the product or service to the public through large-format building wraps that transform ordinary walls into powerful advertising canvases.",
    features: [
      "Large-format building wraps",
      "High-resolution printing",
      "Weather-resistant vinyl materials",
      "Professional installation",
    ],
    illustration: true,
  },
  {
    id: "billboards",
    title: "Billboards",
    icon: Shield,
    image: "/images/services/billboards.jpg",
    description:
      "Billboard advertising provides a unique display of words and pictures to the public along major highways, road intersections and roundabouts. Our strategic billboard placements ensure maximum exposure for your brand to thousands of daily commuters.",
    features: [
      "Strategic highway placements",
      "Road intersection and roundabout locations",
      "24/7 brand exposure",
      "Flexible campaign durations",
    ],
    illustration: true,
  },
  {
    id: "fabrication",
    title: "Billboard Fabrication",
    icon: Hammer,
    image: "/images/services/fabrication.jpg",
    description:
      "We are certified billboard fabricators with an impressive portfolio of satisfied clientele. From structural design to final installation, our fabrication team delivers billboard structures that meet the highest standards of quality and safety.",
    features: [
      "Custom structural design",
      "Quality steel fabrication",
      "Safety-compliant structures",
      "End-to-end project management",
    ],
    illustration: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/brand/logo-icon.svg" alt="" width={300} height={300} className="absolute -top-20 -right-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Outdoor Advertising Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive outdoor media services designed for maximum brand visibility and impact.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-red" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
                {service.illustration && (
                  <p className="text-xs text-accent-blue italic mb-6">
                    [ILLUSTRATIVE — to be replaced with real installation photography]
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-text-muted">
                      <div className="w-2 h-2 rounded-full bg-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={`${service.title} - Skyward Media`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts can design a tailored outdoor advertising package to meet your specific marketing objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
          >
            Talk to Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
