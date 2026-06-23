/**
 * Mock testimonials data simulating CMS client reviews.
 * Replace with API call to /api/testimonials when backend is ready.
 */

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  review: string;
  rating: number;
  photo: string;
  featured: boolean;
  projectId?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    clientName: "David Hartley",
    clientRole: "Managing Director",
    company: "Meridian Financial",
    review:
      "Triads Future did not just build us a portal. They understood our business first. The result was a system our advisors actually enjoy using — and our clients notice the difference. The reduction in admin time alone has paid for the entire project several times over.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    featured: true,
    projectId: "proj-001",
  },
  {
    id: "test-002",
    clientName: "Priya Sharma",
    clientRole: "Founder & CEO",
    company: "Grove Collective",
    review:
      "Before working with Triads Future, we won business purely through referrals because people simply did not find us online. Within three months of launching the new brand and website, we had our first enterprise enquiry. The return on this investment has been significant.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    featured: true,
    projectId: "proj-002",
  },
  {
    id: "test-003",
    clientName: "Marcus Bell",
    clientRole: "Operations Director",
    company: "Summit Logistics",
    review:
      "The reporting alone used to take us three days every month. Now it takes four hours and the data is more accurate. The team has capacity they did not have before, and we can see exactly what is happening in the business at any moment.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    featured: false,
    projectId: "proj-003",
  },
];

export const getTestimonialById = (id: string): Testimonial | undefined =>
  testimonials.find((t) => t.id === id);

export const getFeaturedTestimonials = (): Testimonial[] =>
  testimonials.filter((t) => t.featured);
