/**
 * Mock articles (insights) data simulating CMS blog collection.
 * Replace with API call to /api/articles when backend is ready.
 */

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  coverImage: string;
  category: string;
  tags: string[];
  readingTime: number; // minutes
  publishedAt: string; // ISO date string
  featured: boolean;
}

export const categories = [
  "Business Strategy",
  "Technology",
  "Brand & Marketing",
  "Operations",
  "Growth",
];

export const articles: Article[] = [
  {
    id: "art-001",
    slug: "why-most-business-websites-fail",
    title: "Why most business websites fail to convert visitors",
    excerpt:
      "Most business websites are built to look good. Very few are built to convert. Here is the difference — and what you can do about it.",
    content: `
Your website has one job. Not to win design awards. Not to impress your competitors. Its job is to turn a stranger into a qualified enquiry.

Most websites fail this test completely.

## The problem is not design

Businesses spend thousands on a website that looks polished. New photography, nice typography, a hero section with a confident headline. And then nothing happens.

The visitors arrive. They browse. They leave.

The design was not the problem. The structure was.

## Visitors make decisions in seconds

Research consistently shows that a visitor decides whether to stay or leave within the first few seconds. During that time, they are asking one question:

*Is this for me?*

If your homepage cannot answer that question immediately, you have already lost them.

Most business websites fail this test because they talk about themselves — their history, their team, their process — rather than the visitor's problem.

## What actually works

The businesses we have helped grow all share one thing in common. Their websites talk about the visitor first.

They lead with the problem the visitor is trying to solve. They explain how the business solves it. They provide evidence that they have solved it before. And then they make it easy to take the next step.

This is not complicated. But it requires discipline. Most business owners find it very difficult to write about their customers before writing about themselves.

## The single change that makes the biggest difference

Rewrite your homepage headline. Instead of stating what your business does, state what problem it solves.

Before: *We are a full-service digital agency.*

After: *We help growing businesses look and work like larger ones.*

The second version speaks directly to the visitor's situation. It creates immediate recognition. And recognition builds trust before a single word of body copy is read.

## Where to start

Audit your current website. On every page, ask:

- Is this talking about us or about the visitor?
- Can a business owner understand this in 10 seconds?
- Is there a clear next step?

If the answers are no, you know what to do.
    `.trim(),
    author: "James Okafor",
    authorRole: "Head of Strategy",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: "Business Strategy",
    tags: ["Website", "Conversion", "Strategy"],
    readingTime: 5,
    publishedAt: "2026-05-14T09:00:00Z",
    featured: true,
  },
  {
    id: "art-002",
    slug: "automation-for-growing-businesses",
    title: "Automation is not about replacing people. It is about freeing them.",
    excerpt:
      "Business owners often resist automation because they think it means fewer jobs. The businesses that grow fastest understand the opposite is true.",
    content: `
The word automation makes many business owners uncomfortable. It sounds expensive. It sounds technical. And it sounds like it might put people out of work.

None of that is true — at least not in the way most growing businesses use it.

## What automation actually means for a small business

Automation, in practical terms, means replacing repetitive manual steps with a system that runs them without human involvement.

This is not robots. This is not artificial intelligence. This is a rule that says: *When X happens, do Y automatically.*

When a client fills in a contact form, send them a confirmation email.

When a delivery is marked late, alert the operations manager.

When a payment is received, update the CRM and send the invoice.

These are not complicated automations. But they eliminate hours of manual work every week.

## The hidden cost of manual processes

Most business owners do not realise how much of their team's time is spent on work a system could do.

We have worked with businesses where senior members of the team were spending three hours every Friday manually compiling a report that a dashboard could generate in seconds.

That is three hours per week. 150 hours per year. Spent on a task that added no value beyond moving information from one place to another.

## Automation does not remove jobs. It changes them.

When repetitive tasks are automated, the people who were doing them can focus on work that actually requires human judgment.

The sales executive who spent Monday mornings entering leads into a spreadsheet can spend Monday mornings following up with prospects.

The operations manager who spent Friday afternoons in reporting can spend Friday afternoons identifying improvements.

Better use of time. Better results. Happier team.

## Where to start

Identify the three most repetitive tasks in your business. Write down every step involved in completing them. Then ask: which of these steps could happen automatically if the right information were in the right place?

That is where to begin.
    `.trim(),
    author: "Sarah Chen",
    authorRole: "Technology Director",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    category: "Operations",
    tags: ["Automation", "Operations", "Growth"],
    readingTime: 6,
    publishedAt: "2026-04-22T09:00:00Z",
    featured: false,
  },
  {
    id: "art-003",
    slug: "what-brand-actually-means-for-business",
    title: "What brand actually means for a growing business",
    excerpt:
      "Brand is not your logo. It is not your colours. It is the answer to one question: why should someone choose you over anyone else?",
    content: `
Most business owners think about brand as a visual exercise. Pick a logo. Choose some colours. Write a tagline. Done.

But if brand were just visual, then the businesses with the best designers would always win. And we all know that is not true.

## Brand is the answer to one question

Why should someone choose you?

Not your product or service in general — there are many businesses offering similar things. Why should they choose *you*, specifically?

If you cannot answer that question in one or two sentences, your brand is not clear. And if it is not clear to you, it certainly will not be clear to your customers.

## The problem with vague positioning

Most businesses position themselves using language that applies equally to every competitor in their industry.

*We are passionate about delivering results.*

*We put our clients first.*

*We offer quality service at competitive prices.*

These statements say nothing. They apply to everyone. They create no reason to choose you.

## Real brand positioning is built on real differences

The best brand positions are built on something genuinely true about how the business operates — something specific enough that a competitor could not say the same thing without lying.

This might be:

- The type of client you focus on
- The way you deliver your service
- The specific problem you are best at solving
- The values that shape how you make decisions

When you find the thing that is genuinely yours, you have the foundation for a real brand.

## What strong brand does for a business commercially

Businesses with clear brands close more deals at higher prices. Not because customers are irrational. Because clear positioning reduces risk.

When someone understands exactly who you are and exactly what you do, the decision to work with you feels safe. Ambiguity creates hesitation. Clarity creates confidence.

## Where to start

Write down your answer to this question: *What would your best clients say about working with you that they could not say about anyone else?*

That is your brand.
    `.trim(),
    author: "James Okafor",
    authorRole: "Head of Strategy",
    coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    category: "Brand & Marketing",
    tags: ["Brand", "Strategy", "Marketing"],
    readingTime: 5,
    publishedAt: "2026-03-18T09:00:00Z",
    featured: false,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const getFeaturedArticle = (): Article | undefined =>
  articles.find((a) => a.featured);

export const getArticlesByCategory = (category: string): Article[] =>
  articles.filter((a) => a.category === category);

export const getRelatedArticles = (currentSlug: string, limit = 2): Article[] =>
  articles.filter((a) => a.slug !== currentSlug).slice(0, limit);
