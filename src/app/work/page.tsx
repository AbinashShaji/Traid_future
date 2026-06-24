"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { Divider } from "../../components/divider";
import { ImageWrapper } from "../../components/image-wrapper";
import { CTA } from "../../components/cta";
import { Badge } from "../../components/badge";
import { motion } from "framer-motion";
import { useViewportReveal } from "../../animations/viewport";

// Mock data imports
import { projects } from "../../mock/projects";

export default function WorkPage() {
  const reveal = useViewportReveal();

  return (
    <GlobalLayout>
      {/* 1. Hero Section */}
      <SectionWrapper animate={true} className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#FAF9F6]">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <SectionHeading tag="h1" subtitle="Case studies">
              Real results for real businesses
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed">
              We do not build templates or mock designs. Every case study below is a system 
              currently running in production, helping a business save hours, win clients, or scale.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 2. Projects Listing */}
      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <motion.div
            initial={reveal.containerMotion.initial}
            whileInView={reveal.containerMotion.whileInView}
            viewport={reveal.containerMotion.viewport}
            variants={reveal.containerMotion.variants}
            className="space-y-24"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={reveal.itemMotion.variants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image panel */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Link href={`/work/${project.slug}`}>
                    <div className="aspect-[16/10] w-full relative overflow-hidden group">
                      <ImageWrapper
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        containerClassName="w-full h-full"
                        className="transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>
                </div>

                {/* Content Panel */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{project.client}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>

                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#111111] leading-tight">
                    <Link href={`/work/${project.slug}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-[#5F5F5F] text-base leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Results Panel */}
                  <div className="grid grid-cols-2 gap-6 py-4 border-y border-[#E8E8E8]/80 my-2">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="font-heading text-xl md:text-2xl font-bold text-[#111111] tracking-tight">
                          {res.value}
                        </span>
                        <span className="font-sans text-xs text-[#5F5F5F] leading-tight">
                          {res.metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="font-sans text-xs text-[#5F5F5F] bg-[#111111]/5 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link href={`/work/${project.slug}`}>
                      <Button variant="primary" className="group">
                        Read full case study <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* 3. Strategy Call CTA */}
      <CTA 
        headline="Ready to achieve similar results?"
        description="Every project starts with a 30-minute diagnosis call to establish if we can help. No hard sales, just an honest conversation about your technology."
      >
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Book a strategy call
          </Button>
        </Link>
        <Link href="/solutions">
          <Button variant="outline" size="lg">
            Explore our solutions
          </Button>
        </Link>
      </CTA>
    </GlobalLayout>
  );
}
