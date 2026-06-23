import * as React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Monitor, Layers, Zap, TrendingUp, Check } from "lucide-react";
import { GlobalLayout } from "../components/global-layout";
import { SectionWrapper } from "../components/section-wrapper";
import { Container } from "../components/container";
import { SectionHeading } from "../components/section-heading";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Badge } from "../components/badge";
import { ImageWrapper } from "../components/image-wrapper";
import { Divider } from "../components/divider";
import { CTA } from "../components/cta";

// Mock data imports
import { solutions } from "../mock/solutions";
import { getFeaturedProjects } from "../mock/projects";
import { getFeaturedTestimonials } from "../mock/testimonials";
import { getFeaturedArticle } from "../mock/articles";

// Mapping icons by name
const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Monitor,
  Layers,
  Zap,
  TrendingUp,
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredTestimonials = getFeaturedTestimonials();
  const featuredArticle = getFeaturedArticle();

  return (
    <GlobalLayout>
      {/* 1. Hero Section */}
      <SectionWrapper animate={true} delay={0} className="pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionHeading tag="h1" subtitle="Triads Future — Business Growth & Technology Partner">
                We build the systems and digital presence growing businesses need to scale.
              </SectionHeading>
              
              <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed max-w-2xl">
                No complex jargon, no custom frameworks you cannot maintain, and no aesthetic shortcuts. 
                Just practical strategy, clean code, and business automation that removes friction from your operations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Book a strategy call
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" size="lg">
                    See our work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full aspect-[4/3] lg:aspect-[1/1] relative">
              <ImageWrapper
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern, clean workspace with natural lighting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                containerClassName="w-full h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 2. Business Intro Section */}
      <SectionWrapper animate={true} delay={1}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-sans text-xs uppercase tracking-wider text-[#5F5F5F] block mb-4">
              Our philosophy
            </span>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-[#111111] leading-snug">
              &ldquo;Most agencies sell complexity because it makes them look smart. We do the opposite. We believe the best solution is always the simplest one that solves the business problem.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#111111]" />
              <p className="font-sans text-sm text-[#111111] font-medium">
                The founders, Triads Future
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 3. Solutions Outcome Highlights (3 of 5) */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading tag="h2" subtitle="Our capabilities">
              How we help you grow
            </SectionHeading>
            <Link href="/solutions">
              <Button variant="text" className="group">
                View all solutions <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.slice(0, 3).map((solution) => {
              const Icon = iconMap[solution.icon] || Globe;
              return (
                <Card key={solution.id} hoverEffect className="flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-[#111111] stroke-[1.5]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#111111] mb-3">
                      {solution.title}
                    </h3>
                    <p className="font-sans text-[#5F5F5F] text-sm leading-relaxed mb-6">
                      {solution.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E8E8E8]/60">
                    <p className="font-sans text-xs uppercase tracking-wider text-[#5F5F5F] mb-3">
                      Core services
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {solution.services.slice(0, 3).map((service, idx) => (
                        <li key={idx} className="font-sans text-xs text-[#111111] flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#5F5F5F]" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/solutions#${solution.id}`}>
                      <Button variant="text" size="sm">
                        {solution.ctaText}
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 4. Selected Work Showcase */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading tag="h2" subtitle="Case studies">
              Selected work
            </SectionHeading>
            <Link href="/work">
              <Button variant="text" className="group">
                View all case studies <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image panel */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Link href={`/work/${project.slug}`}>
                    <div className="aspect-[16/10] w-full relative overflow-hidden group">
                      <ImageWrapper
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        containerClassName="w-full h-full"
                        className="transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>
                  </Link>
                </div>

                {/* Text and stats panel */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{project.client}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#111111] leading-tight">
                    <Link href={`/work/${project.slug}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-[#5F5F5F] text-base leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-6 py-4 border-y border-[#E8E8E8]/80 my-2">
                    {project.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="font-heading text-2xl md:text-3xl font-bold text-[#111111] tracking-tight">
                          {res.value}
                        </span>
                        <span className="font-sans text-xs text-[#5F5F5F] leading-tight">
                          {res.metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link href={`/work/${project.slug}`}>
                      <Button variant="text" className="group">
                        Read case study <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 5. Process Section */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading tag="h2" subtitle="Our method">
              How we work with you
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed mt-4">
              We do not believe in long discovery phases that lead to thick slide decks. We work in sprints, 
              focusing on delivering visible progress every single week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnosis",
                description: "We audit your current tech, map your bottlenecks, and interview your team to uncover the real operational friction.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We design a clean, practical roadmap specifying the exact outcomes, technology stacks, and timeline.",
              },
              {
                step: "03",
                title: "Execution",
                description: "We build. Clean code, visible progress in weekly demos, and integration with your existing CRM or tools.",
              },
              {
                step: "04",
                title: "Optimization",
                description: "We monitor production usage, gather client and team feedback, and refine workflows to maximize scale.",
              },
            ].map((p, idx) => (
              <div key={idx} className="flex flex-col border-t border-[#E8E8E8] pt-6 gap-4">
                <span className="font-heading text-5xl md:text-6xl font-semibold text-[#111111]/20 block tracking-tight leading-none select-none">
                  {p.step}
                </span>
                <h4 className="font-heading text-lg font-semibold text-[#111111]">
                  {p.title}
                </h4>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 6. Why Choose Us Section */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading tag="h2" subtitle="Our edge">
                Why businesses choose Triads Future
              </SectionHeading>
              <p className="font-sans text-[#5F5F5F] text-base leading-relaxed mt-4">
                We are business operators who write code, not just developers following specifications. 
                We design systems around the commercials of your business.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-2">
              {[
                {
                  title: "No agency layers",
                  description: "You work directly with the seniors doing the work. No account managers, no translation errors, and no communication lags.",
                },
                {
                  title: "Practical technology",
                  description: "We use standard, widely-adopted tools and languages. We write clean code so any competent developer can maintain it later.",
                },
                {
                  title: "Focus on outcomes",
                  description: "We measure success by business results — hours saved, client portal satisfaction, or increases in enterprise leads.",
                },
                {
                  title: "Monochrome, clean style",
                  description: "Our designs do not rely on passing trends or flashy animations. We build clean, professional interfaces that build trust.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="font-heading text-base font-semibold text-[#111111] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#111111]" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 7. Testimonials Section */}
      <SectionWrapper animate={true}>
        <Container>
          <div className="mb-12">
            <SectionHeading tag="h2" subtitle="Client voices">
              What our clients say
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map((t) => (
              <Card key={t.id} className="flex flex-col justify-between p-8 bg-[#FAF9F6] min-h-[250px]">
                <blockquote className="font-sans text-base text-[#111111] italic leading-relaxed mb-6">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 border-t border-[#E8E8E8]/60 pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <ImageWrapper
                      src={t.photo}
                      alt={t.clientName}
                      fill
                      sizes="40px"
                      containerClassName="w-full h-full border-none"
                    />
                  </div>
                  <div>
                    <cite className="font-sans text-sm font-semibold text-[#111111] not-italic block">
                      {t.clientName}
                    </cite>
                    <span className="font-sans text-xs text-[#5F5F5F] block">
                      {t.clientRole}, {t.company}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 8. Insights Section (Teaser of Featured Article) */}
      {featuredArticle && (
        <SectionWrapper animate={true}>
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <SectionHeading tag="h2" subtitle="Insights">
                Strategy & thinking
              </SectionHeading>
              <Link href="/insights">
                <Button variant="text" className="group">
                  Read all articles <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative min-h-[300px] aspect-[16/9] lg:aspect-auto">
                  <ImageWrapper
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    containerClassName="w-full h-full border-none"
                  />
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{featuredArticle.category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                      <span className="font-sans text-xs text-[#5F5F5F]">{featuredArticle.readingTime} min read</span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#111111] leading-snug">
                      <Link href={`/insights/${featuredArticle.slug}`} className="hover:underline">
                        {featuredArticle.title}
                      </Link>
                    </h3>

                    <p className="font-sans text-[#5F5F5F] text-sm leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div>
                    <Link href={`/insights/${featuredArticle.slug}`}>
                      <Button variant="text" className="group">
                        Read article <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </SectionWrapper>
      )}

      {/* 9. Strategy Call CTA */}
      <CTA 
        headline="Ready to scale your business?"
        description="Book a brief, 30-minute consultation call. We will discuss your current technology bottlenecks and map out a practical solution strategy. No pushy sales pitch, just real feedback."
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
