"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone as PhoneIcon, MapPin, Clock, Calendar, Check, HelpCircle, ChevronDown } from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { FormInput } from "../../components/form-input";
import { FormTextArea } from "../../components/form-textarea";
import { Divider } from "../../components/divider";
import { toast } from "sonner";
import { cn } from "../../utils/cn";

// Mock data imports
import { settings } from "../../mock/settings";
import { faqs } from "../../mock/faq";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  email: z.union([z.string().email({ message: "Please enter a valid email address." }), z.literal("")]).optional(),
  businessName: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ─────────────────────────────────────────────
// Inner client component — uses useSearchParams
// ─────────────────────────────────────────────
function ContactPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const interest = searchParams.get("interest");
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      businessName: "",
      message: interest ? `Interested in: ${interest}. ` : "",
    },
  });

  React.useEffect(() => {
    if (interest) {
      setValue("message", `Interested in solution: ${interest}. `);
    }
  }, [interest, setValue]);

  const onSubmit = async () => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 1500));
    toast.promise(promise(), {
      loading: "Submitting details...",
      success: () => {
        router.push("/thank-you");
        return "Details submitted successfully.";
      },
      error: "An error occurred. Please try again.",
    });
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <GlobalLayout>
      {/* 1. Hero */}
      <SectionWrapper animate={true} className="pt-24 pb-8 md:pt-32 md:pb-12 bg-[#FAF9F6]">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <SectionHeading tag="h1" subtitle="Contact">
              Book a strategy call
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-lg md:text-xl leading-relaxed">
              Every project starts with a 30-minute diagnosis call. We will review your current systems,
              identify technical friction points, and outline a practical path forward. No pitch, just strategy.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 2. Form + Contact Info */}
      <SectionWrapper animate={true} className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: contact details */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
              <div>
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block font-semibold mb-2">
                  Why book a call?
                </span>
                <p className="font-sans text-[#5F5F5F] text-sm md:text-base leading-relaxed mb-4">
                  A strategy call is a mutual fit conversation. We want to understand:
                </p>
                <ul className="space-y-3 pl-1">
                  {[
                    "Your primary business growth bottlenecks.",
                    "Your current manual processes that consume hours.",
                    "Your timeline, technology requirements, and commercial parameters.",
                  ].map((item, idx) => (
                    <li key={idx} className="font-sans text-sm text-[#111111] flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#E8E8E8] pt-6 flex flex-col gap-4">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block font-semibold">
                  Direct channels
                </span>
                <div className="flex flex-col gap-3">
                  <a href={`mailto:${settings.email}`} className="font-sans text-sm text-[#111111] hover:text-[#5F5F5F] transition-colors flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#5F5F5F] stroke-[1.5]" />
                    <span>{settings.email}</span>
                  </a>
                  <a href={`tel:${settings.phone}`} className="font-sans text-sm text-[#111111] hover:text-[#5F5F5F] transition-colors flex items-center gap-3">
                    <PhoneIcon className="w-4 h-4 text-[#5F5F5F] stroke-[1.5]" />
                    <span>{settings.phone}</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-[#E8E8E8] pt-6 flex flex-col gap-4">
                <span className="font-sans text-xs text-[#5F5F5F] uppercase tracking-wider block font-semibold">
                  Location & Hours
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 font-sans text-sm text-[#111111]">
                    <MapPin className="w-4 h-4 text-[#5F5F5F] mt-0.5 shrink-0 stroke-[1.5]" />
                    <span>{settings.address}</span>
                  </div>
                  <div className="flex items-center gap-3 font-sans text-sm text-[#5F5F5F]">
                    <Clock className="w-4 h-4 text-[#5F5F5F] shrink-0 stroke-[1.5]" />
                    <span>{settings.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E8E8E8] rounded-sm p-6 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-[#111111]" />
                <h3 className="font-heading text-lg font-semibold text-[#111111]">
                  Book strategy call
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormInput
                  label="Full name"
                  type="text"
                  placeholder="John Doe"
                  error={errors.name?.message}
                  {...register("name")}
                />

                <FormInput
                  label="Phone number"
                  type="text"
                  placeholder="e.g. +1 (555) 234-5678"
                  error={errors.phone?.message}
                  {...register("phone")}
                />

                <FormInput
                  label="Email address (optional)"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <FormInput
                  label="Business name (optional)"
                  type="text"
                  placeholder="e.g. Meridian Financial"
                  {...register("businessName")}
                />

                <FormTextArea
                  label="Message or areas of interest (optional)"
                  placeholder="Tell us a little bit about your current operations and challenges..."
                  {...register("message")}
                />

                <div className="pt-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Scheduling call..." : "Schedule strategy call"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <Divider />

      {/* 3. FAQs */}
      <SectionWrapper id="faq" animate={true} className="bg-[#FAF9F6]/50 scroll-mt-24 md:scroll-mt-28">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading tag="h2" subtitle="Self-help">
              Frequently asked questions
            </SectionHeading>
            <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed mt-2">
              Have questions about our process, pricing, or suitability? Find quick answers here
              before scheduling your session.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E8E8E8] rounded-sm bg-[#FAF9F6] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-sans font-medium text-[#111111] hover:bg-[#FAF9F6]/40 transition-colors"
                  >
                    <span className="text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#5F5F5F] stroke-[1.5] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-[#5F5F5F] transition-transform duration-300 shrink-0 ml-4",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 border-t border-[#E8E8E8]"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 font-sans text-sm text-[#5F5F5F] leading-relaxed bg-[#FAF9F6]/10">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>
    </GlobalLayout>
  );
}

export default ContactPageContent;
