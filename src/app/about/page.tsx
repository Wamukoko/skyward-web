import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, MapPin, Users, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Skyward Media Limited — Kenya's leading outdoor advertising company with active installations across Nairobi, Nakuru, Thika, and Thika Road.",
};

const values = [
  {
    icon: TrendingUp,
    title: "Innovative",
    description: "We continuously push boundaries in outdoor advertising technology and creative design.",
  },
  {
    icon: Award,
    title: "Impactful",
    description: "Every campaign we deliver is designed to create maximum brand visibility and recall.",
  },
  {
    icon: Users,
    title: "Affordable",
    description: "We provide premium outdoor advertising solutions at competitive prices.",
  },
  {
    icon: Heart,
    title: "Professional",
    description: "Our team of experts ensures every project meets the highest standards of quality.",
  },
];

const locations = [
  { city: "Nairobi", description: "Major installations across the capital" },
  { city: "Nakuru", description: "Growing presence in the Rift Valley hub" },
  { city: "Thika", description: "Strategic placements in the industrial town" },
  { city: "Thika Road", description: "High-visibility billboards on the busy highway corridor" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/about.jpg" alt="" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kenya&apos;s Trusted Outdoor Advertising Partner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Building brand visibility across East Africa through innovative outdoor advertising solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Skyward Media Ltd is a limited liability company incorporated and
                  operating in Kenya. With an impressive list of prime clientele from
                  different sectors, our unprecedented growth can be directly attributed
                  to our continuous innovations in billboard advertisement and a pool
                  of ultra-talented staff behind the brand.
                </p>
                <p>
                  We are market leaders in outdoor advertisement, with billboard
                  advertising accounting for a bigger chunk of our core business. Other
                  creative outdoor advertising we excel in include the setting up and
                  maintenance of quality sky signs and wall wraps.
                </p>
                <p>
                  Our qualified team of experts and marketing gurus ensure proper
                  placement and messaging gets the most out of our clients&apos; targeted
                  campaigns. Presently, we have active billboards and outdoor
                  advertisement signages in major cities and urban areas such as
                  Nairobi, Nakuru, and Thika, and busy highways such as Thika Road.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/azima-install.jpg"
                alt="Skyward Media billboard installation in Kenya"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-red" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-text-muted leading-relaxed">
                To satisfy our clients by offering the most innovative and practical
                outdoor advertisement solutions through billboards, sky signs and wall
                wraps to our clients.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-text-muted leading-relaxed">
                To be the leading out of home advertising company in East Africa by
                providing quality service to our esteemed clients.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Values</h3>
              </div>
              <p className="text-text-muted leading-relaxed">
                We pride ourselves as being an innovative, impactful, affordable and
                professional company. These core values guide every project we
                undertake and every relationship we build.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Where We Operate</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Active installations across Kenya&apos;s key urban centers and highway corridors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-surface rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent-red" />
                </div>
                <h4 className="font-bold text-primary mb-1">{loc.city}</h4>
                <p className="text-sm text-text-muted">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
