"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  IndianRupee,
  LayoutPanelTop,
  Wifi,
  MapPin,
  FileText,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import ContactForm from "./contact-form";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerHeight = 64; // 16 * 4 (h-16)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate menu height when open
  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-menu");
      const button = document.getElementById("mobile-menu-button");
      if (
        isOpen &&
        nav &&
        !nav.contains(event.target as Node) &&
        !button?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close contact form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const form = document.getElementById("contact-form-popup");
      const button = document.getElementById("contact-button");
      if (
        showContactForm &&
        form &&
        !form.contains(event.target as Node) &&
        !button?.contains(event.target as Node)
      ) {
        setShowContactForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showContactForm]);

  const menuItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    {
      href: "#price",
      label: "Price",
      icon: <IndianRupee className="h-4 w-4" />,
    },
    {
      href: "#floor-plan",
      label: "Site & Floor Plan",
      icon: <LayoutPanelTop className="h-4 w-4" />,
    },
    {
      href: "#amenities",
      label: "Amenities",
      icon: <Wifi className="h-4 w-4" />,
    },
    {
      href: "#location",
      label: "Location",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      href: "#brochure",
      label: "Brochure",
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll for hash links with header offset
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-md"
            : "bg-background/50 backdrop-blur-sm"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-[0.97] active:scale-95"
          >
            <Image
              src="/logo2.png"
              alt="Peninsula Park Elite Logo"
              width={140}
              height={40}
              className="h-auto w-auto max-h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium",
                      "transition-all duration-300 ease-in-out",
                      "hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/10 hover:to-transparent",
                      "hover:text-primary hover:scale-105",
                      "active:scale-95",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20"
                    )}
                  >
                    {item.icon}
                    <span className="hidden lg:inline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Number & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Contact Number - Desktop */}
            <Button
              id="contact-button"
              variant="ghost"
              size="sm"
              className="hidden md:flex text-sm font-medium items-center gap-1.5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setShowContactForm(!showContactForm)}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 89089089089</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              id="mobile-menu-button"
              variant="ghost"
              className={cn(
                "md:hidden p-2",
                "hover:bg-primary/10 hover:text-primary",
                "active:scale-95",
                "transition-all duration-200"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Dynamic Height Overlay */}
      <div
        style={{ height: isOpen ? `${menuHeight + headerHeight}px` : "0px" }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 md:hidden",
          "transition-all duration-300 ease-in-out",
          "bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn(
          "fixed inset-x-0 top-16 z-50 md:hidden",
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        )}
      >
        <nav className="container py-4">
          <ul className="grid gap-2 p-3">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                className={cn(
                  "animate-slideIn",
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
              >
                <Link
                  href={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className={cn(
                    "flex items-center gap-3 p-2.5 rounded-lg",
                    "text-sm font-medium",
                    "transition-all duration-300",
                    "bg-gradient-to-r from-white/10 to-white/5",
                    "hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/10 hover:to-transparent",
                    "hover:text-primary hover:scale-[1.02] hover:shadow-lg",
                    "active:scale-95",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                >
                  <span className="p-2 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-md text-primary shadow-sm">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div
          id="contact-form-popup"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <div className="bg-background rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Contact Us</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setShowContactForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <ContactForm isPopup />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
