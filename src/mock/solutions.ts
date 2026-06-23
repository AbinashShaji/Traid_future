/**
 * Mock solutions data simulating CMS outcomes.
 * Replace with API call to /api/solutions when backend is ready.
 */

export interface Solution {
  id: string;
  title: string;
  description: string;
  businessValue: string;
  services: string[];
  idealFor: string;
  ctaText: string;
  icon: string;
}

export const solutions: Solution[] = [
  {
    id: "digital-presence",
    title: "Digital presence",
    description:
      "Your website is the first impression your business makes. We build fast, professional, and credible digital homes that convert visitors into enquiries.",
    businessValue:
      "A strong digital presence builds trust before anyone speaks to you. Clients see your work, understand your value, and arrive ready to buy.",
    services: [
      "Website design & development",
      "Brand identity systems",
      "SEO foundations",
      "Performance optimisation",
      "Mobile-first design",
    ],
    idealFor: "Businesses without a digital presence or with an outdated website that no longer reflects their quality.",
    ctaText: "Talk to us about your website",
    icon: "Globe",
  },
  {
    id: "digital-experiences",
    title: "Digital experiences",
    description:
      "We design and build digital products — web applications, client portals, internal tools — that make your business easier to run and easier to use.",
    businessValue:
      "Custom software built around your business removes friction, saves hours, and scales with you. Off-the-shelf tools are built for everyone. We build for you.",
    services: [
      "Web application development",
      "Client portal design",
      "Internal tools",
      "API integrations",
      "Product strategy",
    ],
    idealFor: "Businesses outgrowing general tools and needing software shaped to their specific workflows.",
    ctaText: "Talk to us about your product",
    icon: "Monitor",
  },
  {
    id: "brand-strength",
    title: "Brand strength",
    description:
      "We help businesses communicate clearly and consistently — so customers immediately understand who you are and why you are the right choice.",
    businessValue:
      "Clear branding is a commercial advantage. When your audience recognises and trusts your brand, decisions become easier and loyalty grows.",
    services: [
      "Brand strategy",
      "Visual identity",
      "Messaging frameworks",
      "Content direction",
      "Brand guidelines",
    ],
    idealFor: "Growing businesses whose brand no longer reflects the quality of their work.",
    ctaText: "Talk to us about your brand",
    icon: "Layers",
  },
  {
    id: "operations-automation",
    title: "Operations automation",
    description:
      "We identify the repetitive, time-consuming parts of your business and build systems that handle them — freeing your team to focus on growth.",
    businessValue:
      "Automation removes human error from routine tasks, reduces operational costs, and creates space for your team to focus on work that requires real thinking.",
    services: [
      "Process mapping",
      "Workflow automation",
      "CRM integration",
      "Data pipelines",
      "Reporting dashboards",
    ],
    idealFor: "Businesses where too much time is spent on manual, repetitive tasks that could be systematised.",
    ctaText: "Talk to us about automation",
    icon: "Zap",
  },
  {
    id: "business-scalability",
    title: "Business scalability",
    description:
      "We help businesses build the systems, processes, and digital infrastructure needed to grow without breaking — so scale becomes sustainable.",
    businessValue:
      "Growth without structure creates chaos. We design the foundation that allows your business to take on more clients, more revenue, and more complexity without losing quality.",
    services: [
      "Growth strategy",
      "Systems architecture",
      "Team workflows",
      "Technology roadmap",
      "Performance consulting",
    ],
    idealFor: "Businesses that are growing quickly and need the infrastructure to support that growth.",
    ctaText: "Talk to us about scaling",
    icon: "TrendingUp",
  },
];
