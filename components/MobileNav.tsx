"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 bg-white min-w-[40px] min-h-[40px] flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="#features"
              className="block text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
