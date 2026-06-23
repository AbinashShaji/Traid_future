import { Suspense } from "react";
import ContactPageContent from "./contact-page-content";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";

/**
 * Contact page shell — server component.
 * Wraps the client component (which uses useSearchParams) in <Suspense>
 * so Next.js can statically generate the route without a CSR bailout.
 */
export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <GlobalLayout>
          <SectionWrapper animate={false} className="pt-32 pb-16">
            <Container>
              <div className="max-w-3xl flex flex-col gap-4 animate-pulse">
                <div className="h-4 w-32 bg-[#E8E8E8] rounded-sm" />
                <div className="h-10 w-full max-w-xl bg-[#E8E8E8] rounded-sm" />
                <div className="h-5 w-full max-w-lg bg-[#E8E8E8] rounded-sm" />
              </div>
            </Container>
          </SectionWrapper>
        </GlobalLayout>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
