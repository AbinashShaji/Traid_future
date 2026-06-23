"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Search, Mail } from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Divider } from "../../components/divider";
import { ImageWrapper } from "../../components/image-wrapper";
import { FormInput } from "../../components/form-input";
import { Badge } from "../../components/badge";
import { Tag } from "../../components/tag";
import { toast } from "sonner";

// Mock data imports
import { articles, categories } from "../../mock/articles";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");

  // Get featured article
  const featuredArticle = articles.find((a) => a.featured);

  // Filter articles based on search query and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory 
      ? article.category === selectedCategory 
      : true;
      
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to our strategy letters.");
    setEmail("");
  };

  return (
    <GlobalLayout>
      {/* 1. Hero Section */}
      <SectionWrapper animate={true} className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#FAF9F6]">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <SectionHeading tag="h1" subtitle="Insights">
              Strategy & thinking
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed">
              Practical guides, engineering write-ups, and operational systems design. 
              We write about real challenges we solve in production. No theories, no marketing fluff.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 2. Featured Article Block */}
      {featuredArticle && !searchQuery && !selectedCategory && (
        <>
          <SectionWrapper animate={true} className="py-16 md:py-24">
            <Container>
              <div className="mb-8">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block font-semibold">
                  Featured Article
                </span>
              </div>
              
              <Card className="p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative min-h-[350px] aspect-[16/9] lg:aspect-auto">
                    <ImageWrapper
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      containerClassName="w-full h-full border-none rounded-none"
                    />
                  </div>
                  <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{featuredArticle.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                        <span className="font-sans text-xs text-[#5F5F5F]">{featuredArticle.readingTime} min read</span>
                      </div>

                      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#111111] leading-snug">
                        <Link href={`/insights/${featuredArticle.slug}`} className="hover:underline">
                          {featuredArticle.title}
                        </Link>
                      </h2>

                      <p className="font-sans text-[#5F5F5F] text-base leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#E8E8E8]/60 pt-6">
                      <div>
                        <cite className="font-sans text-sm font-semibold text-[#111111] not-italic block">
                          {featuredArticle.author}
                        </cite>
                        <span className="font-sans text-xs text-[#5F5F5F]">
                          {featuredArticle.authorRole}
                        </span>
                      </div>
                      <Link href={`/insights/${featuredArticle.slug}`}>
                        <Button variant="primary" className="group">
                          Read article <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
          </SectionWrapper>
          <Divider />
        </>
      )}

      {/* 3. Grid Filters & Search */}
      <SectionWrapper animate={true} className="py-12 bg-[#FAF9F6]/50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex-1 flex flex-col gap-4">
              <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block font-semibold">
                Categories
              </span>
              <div className="flex flex-wrap gap-2">
                <Tag 
                  active={selectedCategory === null} 
                  onClick={() => setSelectedCategory(null)}
                >
                  All articles
                </Tag>
                {categories.map((cat) => (
                  <Tag 
                    key={cat}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="w-full md:w-80 relative flex flex-col gap-2">
              <label htmlFor="search-input" className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider font-semibold">
                Search Articles
              </label>
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-[#E8E8E8] rounded-sm font-sans text-sm text-[#111111] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none transition-all"
                />
                <Search className="w-4 h-4 text-[#5F5F5F] absolute left-3.5 top-3.5" />
              </div>
            </div>
          </div>

          {/* 4. Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 border border-[#E8E8E8] border-dashed rounded-sm">
              <p className="font-sans text-[#5F5F5F] text-base mb-4">
                No articles matches your filters.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} hoverEffect className="flex flex-col justify-between p-0 overflow-hidden">
                  <div>
                    <div className="aspect-[16/10] relative">
                      <ImageWrapper
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        containerClassName="w-full h-full border-none rounded-none"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-sans text-xs text-[#5F5F5F] font-semibold">{article.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8]" />
                        <span className="font-sans text-xs text-[#5F5F5F]">{article.readingTime} min read</span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-[#111111] mb-2 leading-snug">
                        <Link href={`/insights/${article.slug}`} className="hover:underline">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#E8E8E8]/40">
                    <span className="font-sans text-xs text-[#5F5F5F]">
                      By {article.author}
                    </span>
                    <Link href={`/insights/${article.slug}`}>
                      <Button variant="text" size="sm" className="group">
                        Read <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* 5. Pagination Placeholder */}
          {filteredArticles.length > 0 && (
            <div className="flex items-center justify-between border-t border-[#E8E8E8] mt-16 pt-8">
              <span className="font-sans text-xs text-[#5F5F5F]">
                Showing {filteredArticles.length} of {articles.length} articles
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          )}
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 6. Newsletter Card */}
      <section className="w-full py-16 md:py-24 bg-[#FAF9F6]">
        <Container>
          <div className="max-w-4xl mx-auto border border-[#E8E8E8] rounded-sm p-8 md:p-12 bg-white/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#111111]/5 flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-[#111111]" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#111111]">
                  Subscribe to our strategy letters
                </h3>
                <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
                  We write every two weeks. Detailed write-ups on technology architecture, 
                  operations automation, and growth strategy. Never any advertising or spam.
                </p>
              </div>
              
              <div className="lg:col-span-6">
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <FormInput
                    label="Email address"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button variant="primary" type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </GlobalLayout>
  );
}
