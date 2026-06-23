"use client";

import * as React from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Code2,
  Gauge,
  Layers3,
  Megaphone,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Divider } from "../../components/divider";
import { ImageWrapper } from "../../components/image-wrapper";
import { CTA } from "../../components/cta";
import { cn } from "../../utils/cn";
import { faqs, type FAQ } from "../../mock/faq";

type Capability = {
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  outcome: string;
  details: string[];
};

const principles = [
  {
    title: "Business first, always",
    description: "We start with commercial friction, not with the tool stack. Every recommendation must improve revenue, margin, time, or clarity.",
  },
  {
    title: "Standard beats clever",
    description: "We prefer proven patterns that can be maintained by a competent team over bespoke solutions that trap you in future dependency.",
  },
  {
    title: "Visible progress every week",
    description: "Engagements are structured to show working output early, so you can validate direction and course-correct before waste compounds.",
  },
  {
    title: "Own the asset",
    description: "You keep control of your code, content, data, and infrastructure. The work should strengthen your business, not lock it away.",
  },
  {
    title: "Measure the result",
    description: "We define success in concrete terms like lead quality, admin hours saved, conversion lift, or reduced operational risk.",
  },
  {
    title: "Design earns trust",
    description: "A calm, precise interface tells users you are competent before they read a single word. We treat visual discipline as part of the product.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your current website, workflows, systems, and bottlenecks to understand the real problem beneath the request.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We define the shortest practical route to the outcome, with priorities, milestones, risks, and success criteria.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design and ship in small, visible increments so the work stays grounded in reality and the end result is easier to maintain.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We refine after launch using feedback, performance data, and commercial signals to improve what matters most.",
  },
];

const capabilities: Capability[] = [
  {
    title: "Strategy",
    eyebrow: "Direction and clarity",
    description: "We turn vague growth goals into a practical plan that teams can execute without confusion.",
    icon: Target,
    outcome: "A clearer roadmap, fewer misfires, and stronger decisions.",
    details: ["Market and offer framing", "Prioritized roadmap", "Operational review"],
  },
  {
    title: "Branding",
    eyebrow: "Trust and positioning",
    description: "We shape a brand system that feels credible, calm, and consistent across every touchpoint.",
    icon: Sparkles,
    outcome: "A sharper first impression that supports pricing and trust.",
    details: ["Messaging refinement", "Visual language", "Identity alignment"],
  },
  {
    title: "Websites",
    eyebrow: "High-conviction presence",
    description: "We build fast, editorial websites that communicate value without looking templated.",
    icon: Layers3,
    outcome: "A site that looks considered and converts with less friction.",
    details: ["Design systems", "Next.js builds", "Performance tuning"],
  },
  {
    title: "AI Automation",
    eyebrow: "Time saved at scale",
    description: "We reduce repetitive work with practical automation that fits the way your business already operates.",
    icon: BrainCircuit,
    outcome: "More leverage, fewer manual handoffs, and less busywork.",
    details: ["Workflow automation", "Assistive AI tools", "Internal operations"],
  },
  {
    title: "Software",
    eyebrow: "Systems that stick",
    description: "We design and ship software that solves a specific operational problem without becoming a maintenance burden.",
    icon: Code2,
    outcome: "Stable tools that your team can actually use and own.",
    details: ["Internal tools", "Client portals", "Process systems"],
  },
  {
    title: "Growth Marketing",
    eyebrow: "Demand with discipline",
    description: "We support acquisition with a measured system that improves visibility without noise or gimmicks.",
    icon: Megaphone,
    outcome: "Better qualified attention and more consistent demand.",
    details: ["Content strategy", "SEO direction", "Conversion support"],
  },
];

const clientReasons = [
  "We focus on measurable business outcomes, not activity for its own sake.",
  "You get direct, transparent communication from the people doing the work.",
  "We build for long-term partnership, not a one-time handoff.",
  "We use modern technology where it is genuinely useful and stable.",
  "Execution is treated as a craft, with strong attention to detail and maintainability.",
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#E8E8E8] rounded-sm bg-white overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 md:px-6 py-4 flex items-center justify-between gap-4 text-left font-sans font-medium text-[#111111] hover:bg-[#FAF9F6]/40 transition-colors"
      >
        <span className="text-sm md:text-base leading-snug">{faq.question}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#5F5F5F] transition-transform duration-300 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 border-t border-[#E8E8E8]" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-5 md:p-6 font-sans text-sm md:text-base text-[#5F5F5F] leading-relaxed bg-[#FAF9F6]/10">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPageContent() {
  const [selectedCapability, setSelectedCapability] = React.useState<Capability>(capabilities[0]);
  const [openFaq, setOpenFaq] = React.useState<string | null>("faq-002");

  const faqsForPage = faqs.slice(0, 6);

  return (
    <GlobalLayout>
      <SectionWrapper animate={true} className="pt-20 pb-12 md:pt-28 md:pb-16 bg-[#FAF9F6]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                Who We Are
              </span>
              <div className="flex flex-col gap-5">
                <SectionHeading tag="h1">
                  We build the systems behind serious growth.
                </SectionHeading>
                <p className="font-sans text-lg md:text-xl text-[#111111] leading-relaxed max-w-2xl">
                  Triads Future exists to help businesses turn operational friction into a competitive advantage.
                </p>
                <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed max-w-2xl">
                  We combine strategy, design, software, automation, and growth thinking so companies can move
                  with more clarity, less waste, and a stronger sense of ownership over the systems that matter.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Book a strategy call
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="lg">
                    Explore capabilities
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 aspect-[4/5] relative">
                  <ImageWrapper
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80"
                    alt="Team collaborating around digital strategy and planning"
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 28vw"
                    containerClassName="w-full h-full shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="aspect-[1/1.1] rounded-sm border border-[#E8E8E8] bg-white p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                        Mission
                      </span>
                      <p className="font-heading text-lg md:text-xl font-semibold text-[#111111] mt-3 leading-tight">
                        Make growth easier to execute and harder to outgrow.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#111111]/5 flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-[#111111]" />
                    </div>
                  </div>
                  <div className="aspect-[1/1.1] rounded-sm bg-[#111111] text-[#FAF9F6] p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/70 font-semibold">
                        Promise
                      </span>
                      <p className="font-heading text-lg md:text-xl font-semibold mt-3 leading-tight">
                        Clear direction, visible progress, and work that lasts.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF9F6]/80">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Trusted, standard, maintainable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <SectionHeading tag="h2" subtitle="Our Story">
                Built because business needed more than a prettier website.
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Triads Future was created from a simple observation: many businesses do not need more noise,
                more vendors, or more disconnected tools. They need someone who understands how the business
                actually works and can use technology to make that business run better.
              </p>
              <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Our approach is deliberately business-first. We begin with the commercial objective, then shape
                the right digital presence, internal systems, automation, and growth support around it.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 aspect-[4/5] relative">
                <ImageWrapper
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80"
                  alt="Strategic planning session with documents and screens"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="md:col-span-7 flex flex-col gap-4">
                <Card className="p-6 md:p-8 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-[#111111]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#111111]">Technology as a growth partner</h3>
                  </div>
                  <p className="font-sans text-[#5F5F5F] text-sm md:text-base leading-relaxed">
                    We are not here to make technology feel impressive for its own sake. We are here to make it
                    useful, readable, measurable, and aligned with the next stage of your business.
                  </p>
                </Card>
                <Card className="p-6 md:p-8 bg-[#FAF9F6]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center">
                      <MessageSquareQuote className="w-5 h-5 text-[#111111]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#111111]">What that means in practice</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "We help owners make better decisions with less guesswork.",
                      "We replace manual work with systems that reduce repeat effort.",
                      "We make digital experiences feel calm, trustworthy, and polished.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                        <Check className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true} className="bg-[#FAF9F6]/50">
        <Container>
          <div className="max-w-3xl mb-12">
            <SectionHeading tag="h2" subtitle="What We Believe">
              Principles that shape how we work.
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                hoverEffect
                className={cn(
                  "p-6 md:p-7 flex flex-col gap-4 min-h-[210px]",
                  index === 0 && "md:col-span-2 xl:col-span-1"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#111111]" />
                  </div>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-[#111111] leading-tight">
                  {principle.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <SectionHeading tag="h2" subtitle="How We Work">
                A process designed to reduce risk and build confidence.
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Every engagement follows a clear sequence. That keeps the work grounded, visible, and easier
                to trust from start to finish.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute left-[18px] md:left-[20px] top-4 bottom-4 w-px bg-[#E8E8E8]" />
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <div key={step.step} className="relative pl-12 md:pl-16">
                      <div className="absolute left-0 top-1 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#111111] bg-[#FAF9F6] text-[#111111] font-heading text-sm md:text-base font-semibold">
                        {step.step}
                      </div>
                      <Card
                        hoverEffect
                        className={cn(
                          "p-5 md:p-6",
                          index % 2 === 1 ? "bg-[#FAF9F6]" : "bg-white"
                        )}
                      >
                        <div className="flex flex-col gap-2">
                          <h3 className="font-heading text-xl font-semibold text-[#111111]">
                            {step.title}
                          </h3>
                          <p className="font-sans text-sm md:text-base text-[#5F5F5F] leading-relaxed max-w-2xl">
                            {step.description}
                          </p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true} className="bg-[#FAF9F6]/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading tag="h2" subtitle="Why Clients Choose Us">
                The reasons are practical, not decorative.
              </SectionHeading>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {clientReasons.map((reason, index) => (
                <Card key={reason} hoverEffect className="p-5 md:p-6 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-[#111111]/5 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#111111]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-sans text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-5">
              <SectionHeading tag="h2" subtitle="Our Capabilities">
                Select a capability to see how we think.
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                This is not a list of services to scan. It is a set of disciplines we combine depending on
                the problem.
              </p>
              <div className="rounded-sm border border-[#E8E8E8] bg-[#FAF9F6] p-5 md:p-6 flex flex-col gap-4">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                  Selected
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center">
                    <selectedCapability.icon className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#111111]">
                      {selectedCapability.title}
                    </h3>
                    <p className="font-sans text-sm text-[#5F5F5F]">{selectedCapability.eyebrow}</p>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                  {selectedCapability.outcome}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {capabilities.map((capability) => {
                  const isActive = selectedCapability.title === capability.title;
                  const Icon = capability.icon;
                  return (
                    <button
                      key={capability.title}
                      type="button"
                      onMouseEnter={() => setSelectedCapability(capability)}
                      onFocus={() => setSelectedCapability(capability)}
                      onClick={() => setSelectedCapability(capability)}
                      className={cn(
                        "text-left rounded-sm border p-5 md:p-6 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]",
                        isActive
                          ? "border-[#111111] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
                          : "border-[#E8E8E8] bg-transparent hover:border-[#111111] hover:bg-[#111111]/[0.01]"
                      )}
                    >
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#111111]" />
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5F5F5F] font-semibold">
                          {capability.eyebrow}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-[#111111] leading-tight mb-2">
                        {capability.title}
                      </h3>
                      <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed mb-5">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs text-[#111111]">
                            <Zap className="w-3.5 h-3.5 text-[#5F5F5F]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <SectionWrapper animate={true} className="bg-[#FAF9F6]/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-5">
              <SectionHeading tag="h2" subtitle="FAQ">
                Common questions, answered plainly.
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base leading-relaxed">
                These are the questions most clients ask before starting. We keep the answers direct so you
                can decide quickly whether Triads Future is the right fit.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {faqsForPage.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaq === faq.id}
                  onToggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      <CTA
        headline="Ready to work with a partner that thinks like an operator?"
        description="If you want a business-first team that can clarify direction, improve execution, and build systems that last, book a strategy call."
      >
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Book a strategy call
          </Button>
        </Link>
        <Link href="/solutions">
          <Button variant="outline" size="lg">
            Explore how we work
          </Button>
        </Link>
      </CTA>
    </GlobalLayout>
  );
}
