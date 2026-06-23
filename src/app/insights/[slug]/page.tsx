import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
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
import { articles, getArticleBySlug, getRelatedArticles } from "../../../mock/articles";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * A simple helper to parse and render basic Markdown paragraphs, 
 * list items, and headers into clean React elements.
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  let inList = false;
  const listItems: string[] = [];
  const elements: React.ReactNode[] = [];

  const flushList = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key} className="list-disc pl-6 mb-6 space-y-2 text-[#5F5F5F] font-sans text-base md:text-lg">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      listItems.length = 0;
      inList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Header 2 (##)
    if (trimmed.startsWith("##")) {
      flushList(`list-before-h2-${index}`);
      elements.push(
        <h3 key={`h2-${index}`} className="font-heading text-xl md:text-2xl font-semibold text-[#111111] mt-8 mb-4 border-b border-[#E8E8E8] pb-2">
          {trimmed.replace(/^##\s*/, "")}
        </h3>
      );
    }
    // Header 3 (###)
    else if (trimmed.startsWith("###")) {
      flushList(`list-before-h3-${index}`);
      elements.push(
        <h4 key={`h3-${index}`} className="font-heading text-lg md:text-xl font-semibold text-[#111111] mt-6 mb-3">
          {trimmed.replace(/^###\s*/, "")}
        </h4>
      );
    }
    // List Items (* or -)
    else if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
      inList = true;
      listItems.push(trimmed.replace(/^[\*\-]\s*/, ""));
    }
    // Regular paragraphs or spacers
    else {
      if (trimmed === "") {
        flushList(`list-before-empty-${index}`);
      } else {
        flushList(`list-before-p-${index}`);
        elements.push(
          <p key={`p-${index}`} className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
            {trimmed}
          </p>
        );
      }
    }
  });

  // Flush any remaining list items
  flushList("list-final");

  return elements;
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <GlobalLayout>
      {/* 1. Header & Back Button */}
      <SectionWrapper animate={true} className="pt-24 pb-8 md:pt-32 md:pb-12 bg-[#FAF9F6]">
        <Container>
          <div className="mb-8">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-[#5F5F5F] hover:text-[#111111] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5F5F5F] font-semibold">
              <span>{article.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
                {formattedDate}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
                {article.readingTime} min read
              </span>
            </div>

            <SectionHeading tag="h1" className="leading-tight">
              {article.title}
            </SectionHeading>

            <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed mt-2 border-l-2 border-[#111111] pl-4">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#E8E8E8]">
              <div>
                <span className="font-sans text-xs text-[#5F5F5F] block">Written by</span>
                <cite className="font-sans text-sm font-semibold text-[#111111] not-italic block">
                  {article.author}
                </cite>
                <span className="font-sans text-xs text-[#5F5F5F] block">
                  {article.authorRole}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 2. Cover Photo */}
      <SectionWrapper animate={true} padded={false} className="py-0">
        <div className="w-full aspect-[21/9] min-h-[300px] relative">
          <ImageWrapper
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="100vw"
            priority
            containerClassName="w-full h-full border-y border-[#E8E8E8] rounded-none"
          />
        </div>
      </SectionWrapper>

      {/* 3. Article Content */}
      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Author card & Tags */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="border-t border-[#E8E8E8] pt-6">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block mb-2 font-semibold">
                  Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="font-sans text-xs text-[#111111] bg-[#111111]/5 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E8E8E8] pt-6">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block mb-2 font-semibold">
                  Share article
                </span>
                <div className="flex gap-4 font-sans text-xs text-[#5F5F5F]">
                  <button className="hover:text-[#111111] transition-colors">Copy link</button>
                  <button className="hover:text-[#111111] transition-colors">LinkedIn</button>
                  <button className="hover:text-[#111111] transition-colors">Twitter</button>
                </div>
              </div>
            </div>

            {/* Right Column: Parsed text */}
            <div className="lg:col-span-8 max-w-2xl">
              {renderContent(article.content)}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Related Articles Section */}
      {relatedArticles.length > 0 && (
        <>
          <Divider />
          <SectionWrapper animate={true} className="py-16 bg-[#FAF9F6]/50">
            <Container>
              <div className="mb-12">
                <SectionHeading tag="h2" subtitle="More strategy">
                  Related insights
                </SectionHeading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((rel) => (
                  <Card key={rel.id} hoverEffect className="flex flex-col justify-between p-0 overflow-hidden">
                    <div>
                      <div className="aspect-[16/10] relative">
                        <ImageWrapper
                          src={rel.coverImage}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          containerClassName="w-full h-full border-none rounded-none"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{rel.category}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                          <span className="font-sans text-xs text-[#5F5F5F]">{rel.readingTime} min read</span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-[#111111] mb-2 leading-snug">
                          <Link href={`/insights/${rel.slug}`} className="hover:underline">
                            {rel.title}
                          </Link>
                        </h3>
                        <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2 border-t border-[#E8E8E8]/40">
                      <Link href={`/insights/${rel.slug}`}>
                        <Button variant="text" className="group w-full justify-between">
                          <span>Read article</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </SectionWrapper>
        </>
      )}

      {/* 5. General strategy call CTA */}
      <CTA
        headline="Want custom advice for your business?"
        description="Book a free, 30-minute diagnosis call. We will review your operations pipelines, software, and marketing stack and offer clear recommendations."
      >
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Book a strategy call
          </Button>
        </Link>
        <Link href="/insights">
          <Button variant="outline" size="lg">
            Back to insights
          </Button>
        </Link>
      </CTA>
    </GlobalLayout>
  );
}
