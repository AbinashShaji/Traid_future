import * as React from "react";
import Link from "next/link";
import { House, LayoutGrid, BriefcaseBusiness } from "lucide-react";
import { GlobalLayout } from "../components/global-layout";
import { SectionWrapper } from "../components/section-wrapper";
import { Container } from "../components/container";
import { SectionHeading } from "../components/section-heading";
import { Button } from "../components/button";

export default function NotFound() {
  return (
    <GlobalLayout>
      <SectionWrapper animate={true} className="min-h-[60vh] flex items-center justify-center pt-32 pb-16">
        <Container className="max-w-2xl text-center flex flex-col items-center gap-6">
          <SectionHeading tag="h1" subtitle="Error 404" className="text-center">
            Page not found
          </SectionHeading>
          
          <p className="font-sans text-[#5F5F5F] text-base md:text-lg leading-relaxed max-w-md">
            The page you are looking for does not exist, was removed, or had its address changed. 
            Use the links below to navigate back to our main sections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
            <Link href="/">
              <Button variant="primary" className="w-full sm:w-auto gap-2">
                <House className="w-4 h-4 stroke-[1.5]" />
                Go to home
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <LayoutGrid className="w-4 h-4 stroke-[1.5]" />
                Our solutions
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <BriefcaseBusiness className="w-4 h-4 stroke-[1.5]" />
                See our work
              </Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </GlobalLayout>
  );
}
