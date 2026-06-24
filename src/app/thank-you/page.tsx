import * as React from "react";
import Link from "next/link";
import { CheckCircle, House, LayoutGrid, BookOpen } from "lucide-react";
import { GlobalLayout } from "../../components/global-layout";
import { SectionWrapper } from "../../components/section-wrapper";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/button";
import { Card } from "../../components/card";

export default function ThankYouPage() {
  return (
    <GlobalLayout>
      <SectionWrapper animate={true} className="min-h-[70vh] flex items-center justify-center pt-32 pb-16">
        <Container className="max-w-2xl text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#111111]/5 flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-[#111111] stroke-[1.5]" />
          </div>

          <SectionHeading tag="h1" subtitle="Booking confirmed" className="text-center">
            Thank you for scheduling a call
          </SectionHeading>

          <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed max-w-md">
            We have received your details. One of our founding partners will review your message 
            and contact you within 24 business hours to confirm the time slot and share the meeting link.
          </p>

          <Card className="w-full text-left p-6 md:p-8 bg-[#FAF9F6] border border-[#E8E8E8] mt-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#111111] mb-4">
              What happens next?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-heading text-base font-bold text-[#111111] w-5 h-5 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-[#111111]">Review & Audit</h4>
                  <p className="font-sans text-xs text-[#5F5F5F] mt-0.5 leading-relaxed">
                    We will do a preliminary review of your website and business sector to prepare contextual ideas.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="font-heading text-base font-bold text-[#111111] w-5 h-5 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-[#111111]">Call Invitation</h4>
                  <p className="font-sans text-xs text-[#5F5F5F] mt-0.5 leading-relaxed">
                    You will receive a calendar invitation via email with the Google Meet or Zoom link.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="font-heading text-base font-bold text-[#111111] w-5 h-5 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-[#111111]">Strategy Diagnosis</h4>
                  <p className="font-sans text-xs text-[#5F5F5F] mt-0.5 leading-relaxed">
                    A 30-minute conversation to isolate operational bottlenecks and map technology stacks. No pushy sales pitching.
                  </p>
                </div>
              </li>
            </ul>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full justify-center">
            <Link href="/">
              <Button variant="primary" className="w-full sm:w-auto gap-2">
                <House className="w-4 h-4 stroke-[1.5]" />
                Go to home
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <LayoutGrid className="w-4 h-4 stroke-[1.5]" />
                View our solutions
              </Button>
            </Link>
            <Link href="/insights">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <BookOpen className="w-4 h-4 stroke-[1.5]" />
                Read our insights
              </Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </GlobalLayout>
  );
}
