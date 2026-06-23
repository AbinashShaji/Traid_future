import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Quote } from "lucide-react";
import { GlobalLayout } from "../../../components/global-layout";
import { SectionWrapper } from "../../../components/section-wrapper";
import { Container } from "../../../components/container";
import { SectionHeading } from "../../../components/section-heading";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { Divider } from "../../../components/divider";
import { ImageWrapper } from "../../../components/image-wrapper";
import { CTA } from "../../../components/cta";

// Mock data imports
import { projects, getProjectBySlug } from "../../../mock/projects";
import { getTestimonialById } from "../../../mock/testimonials";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const testimonial = project.testimonialId 
    ? getTestimonialById(project.testimonialId) 
    : undefined;

  return (
    <GlobalLayout>
      {/* 1. Back button & Header */}
      <SectionWrapper animate={true} className="pt-24 pb-8 md:pt-32 md:pb-12 bg-[#FAF9F6]">
        <Container>
          <div className="mb-8">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#5F5F5F] hover:text-[#111111] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all work</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{project.client}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                <span className="font-sans text-xs text-[#5F5F5F] font-medium">{project.industry}</span>
              </div>
              <SectionHeading tag="h1" className="leading-tight">
                {project.title}
              </SectionHeading>
            </div>
            
            <div className="lg:col-span-4 grid grid-cols-1 gap-4 lg:pl-8">
              <div className="border border-[#E8E8E8] rounded-sm p-4 bg-[#FAF9F6]">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block mb-2">
                  Project Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="font-sans text-xs text-[#111111] bg-[#111111]/5 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 2. Results Metrics Banner */}
      <section className="w-full bg-[#111111] text-[#FAF9F6] py-12 px-6 md:px-12 lg:px-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((res, idx) => (
              <div key={idx} className="flex flex-col border-l border-[#FAF9F6]/20 pl-6 gap-2">
                <span className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#FAF9F6]">
                  {res.value}
                </span>
                <span className="font-sans text-xs text-[#FAF9F6]/75 leading-tight">
                  {res.metric}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Cover Image */}
      <SectionWrapper animate={true} padded={false} className="py-0">
        <div className="w-full aspect-[21/9] min-h-[300px] relative">
          <ImageWrapper
            src={project.coverImage}
            alt={`${project.client} cover showcase`}
            fill
            sizes="100vw"
            priority
            containerClassName="w-full h-full border-y border-[#E8E8E8] rounded-none"
          />
        </div>
      </SectionWrapper>

      {/* 4. Case Study Narrative details */}
      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar Meta */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="border-t border-[#E8E8E8] pt-6">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block mb-2">
                  Client profile
                </span>
                <p className="font-heading text-lg font-medium text-[#111111]">
                  {project.client}
                </p>
                <p className="font-sans text-sm text-[#5F5F5F] mt-1">
                  Operating in the {project.industry.toLowerCase()} sector.
                </p>
              </div>

              <div className="border-t border-[#E8E8E8] pt-6">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block mb-2">
                  Key focus areas
                </span>
                <ul className="space-y-2">
                  {project.tags.map((tag, idx) => (
                    <li key={idx} className="font-sans text-sm text-[#111111] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5F5F5F]" />
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Narrative Sections */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-[#111111] border-b border-[#E8E8E8] pb-3">
                  The challenge
                </h3>
                <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {project.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-[#111111] border-b border-[#E8E8E8] pb-3">
                  The strategy
                </h3>
                <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {project.strategy}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-[#111111] border-b border-[#E8E8E8] pb-3">
                  The solution
                </h3>
                <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Client Testimonial Panel */}
      {testimonial && (
        <section className="w-full bg-[#111111]/[0.01] border-y border-[#E8E8E8] py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <Container>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <Quote className="w-10 h-10 text-[#111111]/15" />
              <blockquote className="font-heading text-xl md:text-2xl font-medium text-[#111111] leading-relaxed italic">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <ImageWrapper
                    src={testimonial.photo}
                    alt={testimonial.clientName}
                    fill
                    sizes="40px"
                    containerClassName="w-full h-full border-none"
                  />
                </div>
                <div className="text-left">
                  <cite className="font-sans text-sm font-semibold text-[#111111] not-italic block">
                    {testimonial.clientName}
                  </cite>
                  <span className="font-sans text-xs text-[#5F5F5F] block">
                    {testimonial.clientRole}, {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 6. Gallery Showcase */}
      {project.gallery && project.gallery.length > 0 && (
        <SectionWrapper animate={true}>
          <Container>
            <div className="mb-12">
              <SectionHeading tag="h2" subtitle="Gallery">
                System interfaces
              </SectionHeading>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="aspect-[16/10] relative">
                  <ImageWrapper
                    src={img}
                    alt={`${project.client} interface view ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    containerClassName="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* 7. Conversion CTA */}
      <CTA 
        headline="Ready to build your system?"
        description="Book a free, 30-minute diagnosis call to discuss your business operations. We will help you isolate technical bottlenecks and outline a practical path forward."
      >
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Book a strategy call
          </Button>
        </Link>
        <Link href="/work">
          <Button variant="outline" size="lg">
            See all work
          </Button>
        </Link>
      </CTA>
    </GlobalLayout>
  );
}
