"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  PhoneIcon as WhatsApp,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const handleEnquireClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4  text-gray-400" />,
      label: "Sales Enquiry",
      value: "+91 89089089089",
      link: "tel:+918908908989",
    },
    {
      icon: <Phone className="h-4 w-4  text-gray-400" />,
      label: "Support",
      value: "+91 89089089088",
      link: "tel:+918908908988",
    },
    {
      icon: <Mail className="h-4 w-4  text-gray-400" />,
      label: "Email Us",
      value: "info@peninsulaparkelite.com",
      link: "mailto:info@peninsulaparkelite.com",
    },
    {
      icon: <MapPin className="h-4 w-4  text-gray-400" />,
      label: "Address",
      value: "Devanahalli, North Bangalore",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-4 w-4  text-gray-400" />,
      label: "Office Hours",
      value: "Mon - Sun: 9:00 AM - 8:00 PM",
      link: null,
    },
  ];

  const quickLinks = [
    { href: "#price", label: "Price & Payment Plans" },
    { href: "#floor-plan", label: "Site & Floor Plans" },
    { href: "#amenities", label: "Amenities" },
    { href: "#location", label: "Location Advantages" },
    { href: "#gallery", label: "Gallery" },
    { href: "#virtual-tour", label: "Virtual Tour" },
    { href: "#brochure", label: "Download Brochure" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    {
      icon: <WhatsApp className="h-5 w-5" />,
      href: "https://wa.me/918908908989",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-100 pb-16 md:pb-8">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-primary  text-white" />
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) =>
                item.link ? (
                  <a
                    key={item.value}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gray-800/50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div key={item.value} className="flex items-start gap-3 p-2">
                    <div className="p-2 rounded-lg text-gray-400 bg-gray-800/50 ">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <MessageSquare className="h-5 w-5 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <Send className="h-5 w-5 text-primary" />
              Connect With Us
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Follow us on social media for updates and more information
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-primary hover:text-white transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Peninsula Park Elite. All rights
            reserved.
            <br />
            RERA Registered • BDA Approved
          </p>
        </div>
      </div>

      {/* Mobile Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="grid grid-cols-3 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800"
        >
          <a
            href="tel:+918908908989"
            className="flex flex-col items-center justify-center p-3 hover:bg-gray-800 active:bg-gray-700 transition-colors"
          >
            <Phone className="h-5 w-5 text-white mb-1" />
            <span className="text-xs text-white">Call</span>
          </a>
          <button
            onClick={handleEnquireClick}
            className="flex flex-col items-center justify-center p-3 hover:bg-gray-800 active:bg-gray-700 transition-colors"
          >
            <Send className="h-5 w-5 text-white mb-1" />
            <span className="text-xs text-white">Enquire</span>
          </button>
          <a
            href="https://wa.me/918908908989"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 hover:bg-gray-800 active:bg-gray-700 transition-colors"
          >
            <WhatsApp className="h-5 w-5 text-white mb-1" />
            <span className="text-xs text-white">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
