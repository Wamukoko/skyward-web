"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Skyward Media offer?",
    answer:
      "Skyward Media offers four core outdoor advertising services: Sky Signs, Wall Wraps, Billboards, and Billboard Fabrication. We provide end-to-end solutions from design to installation and maintenance.",
  },
  {
    question: "Which areas do you cover in Kenya?",
    answer:
      "We currently have active installations in Nairobi, Nakuru, Thika, and along Thika Road. We are expanding our coverage to other major cities and highways across Kenya.",
  },
  {
    question: "How much does billboard advertising cost?",
    answer:
      "[DRAFT — confirm with client] Pricing varies based on location, size, and duration of the campaign. Contact us for a customized quote tailored to your marketing budget and objectives.",
  },
  {
    question: "What is the minimum contract period?",
    answer:
      "[DRAFT — confirm with client] Our minimum contract period is typically 1 month, but we offer flexible terms for longer commitments. Contact us to discuss options that work for your business.",
  },
  {
    question: "Do you provide design services for advertisements?",
    answer:
      "Yes, our team of creative professionals can help design your outdoor advertisement content. We ensure your messaging is optimized for maximum impact and visibility.",
  },
  {
    question: "How long does installation take?",
    answer:
      "[DRAFT — confirm with client] Installation timelines vary depending on the type and complexity of the project. Standard billboard installations typically take 3-5 business days after design approval.",
  },
  {
    question: "Do you offer fabrication services?",
    answer:
      "Yes, we are certified billboard fabricators. We handle everything from structural design to steel fabrication and final installation, ensuring all structures meet safety standards.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can reach us through our Contact page, call us at +254 738 595 880, or email us at skywardmedialtd@gmail.com. We'll discuss your requirements and provide a detailed quote within 24 hours.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-surface transition-colors"
      >
        <span className="font-semibold text-primary pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-text-muted leading-relaxed bg-surface/50">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/faqs.jpg" alt="" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-accent-red font-semibold tracking-widest uppercase text-sm mb-4">FAQs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Find answers to common questions about our outdoor advertising services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Contact us and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-red hover:bg-accent-red-hover text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-red/25"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
