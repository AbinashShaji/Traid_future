/**
 * Mock projects (case studies) data simulating CMS work collection.
 * Replace with API call to /api/projects when backend is ready.
 */

export interface ProjectResult {
  metric: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  results: ProjectResult[];
  coverImage: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
  testimonialId?: string;
}

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "meridian-financial-digital-platform",
    title: "A digital platform that made complex finance feel simple",
    client: "Meridian Financial",
    industry: "Financial Services",
    summary:
      "Meridian Financial needed a client portal that matched the quality of their advisory service. We designed and built a secure, intuitive platform that reduced client onboarding time and increased satisfaction scores.",
    challenge:
      "Meridian's advisors were spending 40% of their time on administrative tasks — sending documents, chasing signatures, and manually updating client records. Their existing tools were disconnected and fragile.",
    strategy:
      "We began by mapping every touchpoint in the client journey. We identified twelve manual steps that could be automated and three areas where poor communication was causing client frustration.",
    solution:
      "We built a custom client portal with document signing, automated reminders, a real-time portfolio view, and a secure messaging channel. The system connected directly to their existing CRM through a clean API integration.",
    results: [
      { metric: "Admin time saved per advisor", value: "12 hours/week" },
      { metric: "Client onboarding time", value: "Reduced by 60%" },
      { metric: "Client satisfaction score", value: "4.8 out of 5" },
      { metric: "Reduction in email volume", value: "74%" },
    ],
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    ],
    tags: ["Web Application", "Financial Services", "Automation"],
    featured: true,
    testimonialId: "test-001",
  },
  {
    id: "proj-002",
    slug: "grove-collective-brand-and-website",
    title: "Building a brand for a business that deserved to be seen",
    client: "Grove Collective",
    industry: "Professional Services",
    summary:
      "Grove Collective had grown entirely through referrals and had no brand or website that reflected the calibre of their work. We created a complete brand identity and editorial website that opened doors to larger clients.",
    challenge:
      "Despite delivering outstanding results, Grove had no brand presence. When larger prospects researched them, there was nothing to find. They were losing deals before the first conversation.",
    strategy:
      "We conducted stakeholder interviews to uncover what made Grove genuinely different. The insight — their refusal to take shortcuts — became the foundation of the brand positioning.",
    solution:
      "We delivered a complete brand identity including naming rationale, visual system, and tone of voice guidelines. We then built a premium editorial website that showcased their work and philosophy.",
    results: [
      { metric: "Inbound enquiries in first 90 days", value: "34" },
      { metric: "Average deal size increase", value: "2.4×" },
      { metric: "Website conversion rate", value: "6.8%" },
      { metric: "Time to first enterprise enquiry", value: "11 days" },
    ],
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    ],
    tags: ["Brand Identity", "Website", "Professional Services"],
    featured: true,
    testimonialId: "test-002",
  },
  {
    id: "proj-003",
    slug: "summit-logistics-operations-automation",
    title: "Removing 800 hours of manual work every month",
    client: "Summit Logistics",
    industry: "Logistics",
    summary:
      "Summit's operations team was drowning in spreadsheets and manual reporting. We designed and deployed an automation system that eliminated repetitive work and gave management real-time visibility into the business.",
    challenge:
      "Summit had grown from 12 to 80 employees in three years. Their manual processes hadn't scaled. Reporting took three days to compile. Errors were common. The team was exhausted.",
    strategy:
      "We spent two weeks embedded with the operations team — observing workflows, mapping bottlenecks, and understanding where errors were occurring. We then designed an automation roadmap prioritised by business impact.",
    solution:
      "We integrated their existing tools into a single operations dashboard, automated their weekly reporting, and built a live alert system that flagged anomalies in delivery performance before they became problems.",
    results: [
      { metric: "Manual hours eliminated per month", value: "800+" },
      { metric: "Reporting turnaround", value: "3 days → 4 hours" },
      { metric: "Error rate reduction", value: "91%" },
      { metric: "Management visibility improvement", value: "Real-time" },
    ],
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    ],
    tags: ["Automation", "Logistics", "Operations"],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);
