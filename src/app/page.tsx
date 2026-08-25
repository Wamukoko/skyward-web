import Image from "next/image";
import Link from "next/link";
import PartnerStrip from "@/components/PartnerStrip";
import LatestPosts from "@/components/LatestPosts";
import {
  ArrowRight,
  Eye,
  Sparkles,
  Shield,
  DollarSign,
  ChevronRight,
  MapPin,
} from "lucide-react";

const services = [
  {
    title: "Sky Signs",
    description:
      "Skyward Media positions sky signs in major Kenyan cities, towns and highways to provide excellent coverage and attention to targeted audiences.",
    icon: Eye,
    image: "/images/services/skysign.webp",
    href: "/services#sky-signs",
  },
  {
    title: "Wall Wraps",
    description:
      "Our wall wraps are a unique and impactful platform for advertisers to interact with their audiences. We create awareness of the product or service to the public.",
    icon: Sparkles,
    image: "/images/projects/azima-install.jpg",
    href: "/services#wall-wraps",
  },
  {
    title: "Billboards",
    description:
      "Billboard advertising provides a unique display of words and pictures to the public along major highways, road intersections and roundabouts.",
    icon: Shield,
    image: "/images/services/billboards.jpg",
    href: "/services#billboards",
  },
  {
    title: "Billboard Fabrication",
    description:
      "We are certified billboard fabricators with an impressive portfolio of satisfied clientele.",
    icon: DollarSign,
    image: "/images/services/fabrication.jpg",
    href: "/services#fabrication",
  },
];

const stats = [
  { label: "Cities Covered", value: "4+" },
  { label: "Active Billboards", value: "50+" },
  { label: "Happy Clients", value: "100+" },
  { label: "Years of Service", value: "5+" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/azima-install.jpg"
            alt="Skyward Media billboard installation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-6 animate-fade-in-up">
              Outdoor Media Experts
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Elegance
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-accent-blue to-accent-green">
                In The Sky
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in-up animation-delay-200">
              Visibility With A Difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Kenya&apos;s Trusted Outdoor Advertising Partner
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Skyward Media Ltd is a limited liability company incorporated and
                operating in Kenya. With an impressive list of prime clientele from
                different sectors, our unprecedented growth can be directly attributed
                to our continuous innovations in billboard advertisement.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                We are market leaders in outdoor advertisement, with billboard
                advertising accounting for a bigger chunk of our core business. Other
                creative outdoor advertising we excel in include sky signs and wall
                wraps.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red-hover font-semibold transition-colors"
              >
                Read Our Story <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/azima-install.jpg"
                  alt="Azima Sacco billboard installation by Skyward Media"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent-red text-white p-6 rounded-xl shadow-lg">
                <MapPin className="w-8 h-8 mb-2" />
                <p className="font-bold text-lg">Nairobi</p>
                <p className="text-sm text-white/80">Nakuru • Thika • Thika Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Comprehensive outdoor advertising solutions tailored for maximum brand visibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent-red transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-gray-400">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-red mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerStrip />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary to-primary-light p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/brand/logo-icon.svg"
                alt=""
                width={200}
                height={200}
                className="absolute top-4 right-4 opacity-30"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Let&apos;s discuss how Skyward Media can help you reach millions of potential customers through strategic outdoor advertising.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25 relative z-10"
            >
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LatestPosts />
    </>
  );
}
