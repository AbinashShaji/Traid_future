import * as React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Divider } from "./divider";
import { footerNav } from "../mock/navigation";

/**
 * Global Footer Component.
 * Implements:
 * - Simple typographic layout
 * - Monochrome social links (no official brand colors)
 * - Clear links to legal pages
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAF9F6] border-t border-[#E8E8E8] pt-16 pb-24 md:pb-16 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand & Mission column */}
          <div className="flex flex-col gap-4">
            <span className="font-heading font-bold text-lg tracking-tight text-[#111111]">
              Triads Future
            </span>
            <p className="font-sans text-sm text-[#5F5F5F] max-w-xs leading-relaxed">
              We partner with businesses to deliver sustained growth through strategy, modern technology, and practical execution.
            </p>
          </div>

          {/* Directory Links column */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-sm font-semibold text-[#111111]">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 font-sans text-sm text-[#5F5F5F]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#111111] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact#faq" className="hover:text-[#111111] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials column */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-sm font-semibold text-[#111111]">
              Contact
            </span>
            <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed">
              Office Address: 123 Editorial Boulevard, Suite 500<br />
              Email: partners@triadsfuture.com<br />
              Phone: +1 (555) 234-5678
            </p>
            <div className="flex gap-4 mt-2 font-sans text-sm text-[#5F5F5F]">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#111111] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#111111] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#111111] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#111111] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <Divider className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#5F5F5F]">
          <span>
            &copy; {currentYear} Triads Future. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#111111] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
