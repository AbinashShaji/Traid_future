"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Monitor, Layers, Zap, TrendingUp, Check, HelpCircle, type LucideIcon } from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Divider } from "../../components/divider";
import { CTA } from "../../components/cta";
import { Badge } from "../../components/badge";
import { ImageWrapper } from "../../components/image-wrapper";
import { motion } from "framer-motion";
import { useViewportReveal } from "../../animations/viewport";

// Mock data imports
import { solutions } from "../../mock/solutions";
import { getFeaturedProjects } from "../../mock/projects";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Monitor,
  Layers,
  Zap,
  TrendingUp,
};

export default function SolutionsPage() {
  const featuredProjects = getFeaturedProjects();
  const reveal = useViewportReveal();

  return (
    <GlobalLayout>
      {/* 1. Hero Section */}
      <SectionWrapper animate={true} className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#FAF9F6]">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <SectionHeading tag="h1" subtitle="Our capabilities">
              Business-driven technology outcomes
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed">
              We do not sell billable hours or arbitrary features. We deliver specific digital systems 
              designed to solve immediate operational bottlenecks and establish a foundation for commercial growth.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 2. Common Challenges / Why It Matters */}
      <SectionWrapper animate={true} className="bg-[#FAF9F6]/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading tag="h2" subtitle="The problem">
                When systems fail to scale
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base leading-relaxed mt-4">
                Many growing businesses reach a point where manual workarounds and disconnected tools 
                begin to limit their capacity. We help you transition to systematic, automated operations.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-base font-semibold text-[#111111] flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-[#5F5F5F]" />
                  <span>Drowning in administration</span>
                </h4>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  Your team is spending hours copy-pasting data between spreadsheets and sending manual updates 
                  to clients instead of focusing on high-value tasks.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-base font-semibold text-[#111111] flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-[#5F5F5F]" />
                  <span>Invisible online presence</span>
                </h4>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  You deliver world-class service, but your website looks outdated. When enterprise prospects 
                  research you, they find a layout that does not reflect your calibre.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-base font-semibold text-[#111111] flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-[#5F5F5F]" />
                  <span>Fragile off-the-shelf tools</span>
                </h4>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  You are combining multiple general software products, but they do not talk to each other 
                  properly. If one integration breaks, key customer data gets lost.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-base font-semibold text-[#111111] flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-[#5F5F5F]" />
                  <span>Fear of scaling complexities</span>
                </h4>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  You have the demand to double your revenue, but your operations cannot support the extra load. 
                  Taking on more clients threatens to break your delivery quality.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 3. Outcomes Catalog (The 5 Solutions) */}
      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading tag="h2" subtitle="Our catalog">
              Outcome areas
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed mt-2">
              Every outcome we deliver is fully documented, uses stable technologies, and belongs completely to you. 
              We build no vendor-lock systems.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon] || Globe;
              return (
                <div key={solution.id} id={solution.id} className="scroll-mt-24 border-t border-[#E8E8E8] pt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: Solution Identity & Description */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#111111] stroke-[1.5]" />
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-[#111111]">
                          {solution.title}
                        </h3>
                      </div>
                      
                      <p className="font-sans text-[#5F5F5F] text-base leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="pt-2">
                        <Link href={`/contact?interest=${solution.id}`}>
                          <Button variant="primary">
                            {solution.ctaText}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Technical Details & Business Value */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111111]/[0.01] border border-[#E8E8E8] rounded-sm p-6 md:p-8">
                      <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#111111]">
                          Commercial impact
                        </h4>
                        <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                          {solution.businessValue}
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-[#E8E8E8]">
                          <h5 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                            Ideal situation
                          </h5>
                          <p className="font-sans text-xs text-[#5F5F5F] leading-relaxed">
                            {solution.idealFor}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#111111]">
                          Services included
                        </h4>
                        <ul className="space-y-3">
                          {solution.services.map((service, index) => (
                            <li key={index} className="font-sans text-sm text-[#111111] flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 4. Onboarding Process */}
      <SectionWrapper animate={true} className="bg-[#FAF9F6]/50">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading tag="h2" subtitle="Our process">
              How we partner with you
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed mt-2">
              Our engagement model is structured to reduce risk, maintain complete transparency, and demonstrate progress weekly.
            </p>
          </div>

          <motion.div
            initial={reveal.containerMotion.initial}
            whileInView={reveal.containerMotion.whileInView}
            viewport={reveal.containerMotion.viewport}
            variants={reveal.containerMotion.variants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "Phase 01",
                title: "Discovery & diagnosis",
                duration: "30-minute consultation",
                details: "We review your current systems, isolate immediate operational leaks, and establish if there is a commercial match. No pressure or sales pitches.",
              },
              {
                step: "Phase 02",
                title: "Deep-dive audit",
                duration: "1 to 2 weeks",
                details: "We embed with your team, map your exact processes, analyze codebases (if any), and deliver a technical proposal outlining the stack, timeline, and cost.",
              },
              {
                step: "Phase 03",
                title: "Incremental build",
                duration: "Sprint-based delivery",
                details: "We work in weekly sprints. You receive a working staging URL and a live video demonstration every Friday. No black-box development.",
              },
              {
                step: "Phase 04",
                title: "Deployment & scale",
                duration: "Production launch",
                details: "We manage the transition, train your team, deploy analytics, and monitor performance. All code, repository ownership, and licenses transfer to you.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={reveal.itemMotion.variants}
                className="w-full h-full flex flex-col"
              >
                <Card className="flex flex-col justify-between p-6 w-full h-full">
                  <div>
                    <span className="font-sans text-xs font-semibold text-[#5F5F5F] uppercase tracking-wider block mb-2">
                      {phase.step}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-[#111111] mb-1">
                      {phase.title}
                    </h4>
                    <span className="font-sans text-xs text-[#5F5F5F] font-medium block mb-4 italic">
                      {phase.duration}
                    </span>
                    <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                      {phase.details}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 5. Relevant Case Studies */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading tag="h2" subtitle="Proof of delivery">
              See these solutions in action
            </SectionHeading>
            <Link href="/work">
              <Button variant="text" className="group">
                Explore all case studies <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="p-0 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/9] relative">
                    <ImageWrapper
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      containerClassName="w-full h-full border-none rounded-none"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{project.client}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                      <Badge variant="outline">{project.industry}</Badge>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#111111] mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[#5F5F5F] text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-[#E8E8E8]/80">
                      {project.results.slice(0, 2).map((res, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="font-heading text-xl font-bold text-[#111111]">
                            {res.value}
                          </span>
                          <span className="font-sans text-[10px] text-[#5F5F5F] uppercase tracking-wide mt-0.5 leading-tight">
                            {res.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <Link href={`/work/${project.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read full case study
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Conversion CTA */}
      <CTA
        headline="Not sure where your bottlenecks are?"
        description="Book a free, 30-minute diagnosis call. We will review your current spreadsheets, software, and marketing platforms, and tell you exactly where you are losing hours or leads. No strings attached."
      >
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Book a diagnosis call
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Ask a question
          </Button>
        </Link>
      </CTA>
    </GlobalLayout>
  );
}
