/**
 * Mock FAQ data simulating CMS FAQ collection.
 * Replace with API call to /api/faq when backend is ready.
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
}

export const faqCategories = ["General", "Process", "Pricing", "Working Together"];

export const faqs: FAQ[] = [
  {
    id: "faq-001",
    question: "What kind of businesses do you work with?",
    answer:
      "We work with startups, growing SMEs, and established businesses across a range of industries. The common thread is a business owner or director who takes their growth seriously and wants a long-term partner rather than a one-off vendor. We do not work with businesses where we cannot see a clear path to real results.",
    category: "General",
    displayOrder: 1,
  },
  {
    id: "faq-002",
    question: "What does a Strategy Call involve?",
    answer:
      "A Strategy Call is a focused 45-minute conversation. We listen to your situation, understand what you are trying to achieve, and share honest thoughts on what would make the biggest difference. There is no pressure and no sales process. If we are a good fit, we will tell you how we would approach your challenge. If we are not the right partner, we will tell you that too.",
    category: "Process",
    displayOrder: 2,
  },
  {
    id: "faq-003",
    question: "How long does a typical engagement take?",
    answer:
      "This depends entirely on the scope of work. A website project typically takes 6 to 10 weeks. A custom application takes 12 to 20 weeks. Automation and systems work varies based on complexity. We always provide a clear timeline at the start of every engagement and we do not begin work until the scope is agreed.",
    category: "Process",
    displayOrder: 3,
  },
  {
    id: "faq-004",
    question: "Do you work with businesses outside the UK?",
    answer:
      "Yes. We work with businesses across the UK, Europe, and internationally. Most of our working relationships are conducted remotely. Where it makes sense, we travel to meet clients in person.",
    category: "General",
    displayOrder: 4,
  },
  {
    id: "faq-005",
    question: "What is your pricing structure?",
    answer:
      "We price based on the scope and value of the work rather than hours. Every engagement begins with a clear proposal that outlines deliverables, timeline, and investment. We do not charge by the hour because we believe that creates the wrong incentives. We get paid to deliver results, not to log time.",
    category: "Pricing",
    displayOrder: 5,
  },
  {
    id: "faq-006",
    question: "What happens after a project is delivered?",
    answer:
      "We build long-term relationships. Most of our clients continue working with us after the initial project because there is always a next stage of growth. We offer ongoing retainer arrangements for businesses who want continued support, and we remain available for all past clients when they need us.",
    category: "Working Together",
    displayOrder: 6,
  },
];

export const getFaqsByCategory = (category: string): FAQ[] =>
  faqs.filter((f) => f.category === category).sort((a, b) => a.displayOrder - b.displayOrder);

export const getAllFaqs = (): FAQ[] =>
  faqs.sort((a, b) => a.displayOrder - b.displayOrder);
