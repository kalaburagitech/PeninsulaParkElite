"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import Image from "next/image";

interface ContactFormProps {
  isPopup?: boolean;
}

export default function ContactForm({ isPopup = false }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description:
          "Thank you for your interest. We'll get back to you shortly.",
        duration: 5000,
      });
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      console.error(error); // Using the error variable to fix the unused error
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Phone",
      value: "+91 9945264555",
      link: "tel:+918908908989",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Address",
      value: "Devanahalli, North Bangalore",
      link: "https://maps.google.com",
    },
  ];

  // Form content without the image section
  const formContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={isPopup ? "w-full max-w-md" : "w-full"}
    >
      {/* Contact Info - Now shown in both popup and regular mode with different styles */}
      <div className={`grid gap-3 ${isPopup ? "mb-4" : "mb-6"}`}>
        {/* Title shown only in non-popup mode */}
        {!isPopup && (
          <div className="mb-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-500">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>
        )}

        {/* Contact Info Cards */}
        <div
          className={`grid ${
            isPopup ? "grid-cols-1 gap-2" : "grid-cols-2 gap-3"
          }`}
        >
          {contactInfo.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                isPopup ? "p-2" : "p-3"
              } rounded-lg hover:bg-gray-50 transition-colors group`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600">
                  {item.title}
                </p>
                <p className="text-sm text-gray-900">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <motion.div
          whileTap={{ scale: 0.995 }}
          animate={focusedField === "name" ? { scale: 1.02 } : { scale: 1 }}
        >
          <Input
            placeholder="Name"
            required
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="bg-gray-50/50 border-gray-100 focus:bg-white transition-colors"
          />
        </motion.div>

        <div className="flex gap-2">
          <motion.div
            className="relative w-[80px]"
            whileTap={{ scale: 0.995 }}
            animate={focusedField === "code" ? { scale: 1.02 } : { scale: 1 }}
          >
            <Input
              defaultValue="+91"
              className="bg-gray-50/50 border-gray-100 focus:bg-white transition-colors"
              onFocus={() => setFocusedField("code")}
              onBlur={() => setFocusedField(null)}
            />
          </motion.div>
          <motion.div
            className="relative flex-1"
            whileTap={{ scale: 0.995 }}
            animate={focusedField === "phone" ? { scale: 1.02 } : { scale: 1 }}
          >
            <Input
              placeholder="Mobile No."
              required
              className="bg-gray-50/50 border-gray-100 focus:bg-white transition-colors"
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
            />
          </motion.div>
        </div>

        <motion.div
          whileTap={{ scale: 0.995 }}
          animate={focusedField === "message" ? { scale: 1.02 } : { scale: 1 }}
        >
          <Textarea
            placeholder="Message"
            className="bg-gray-50/50 border-gray-100 focus:bg-white transition-colors min-h-[80px] resize-none"
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full relative group"
            disabled={isSubmitting}
          >
            <span className="inline-flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );

  // Return only the form content for popup
  if (isPopup) {
    return formContent;
  }

  // Return full section with image for non-popup version
  return (
    <section
      className="py-12 bg-gradient-to-b from-gray-50 to-white"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="w-full">{formContent}</div>

          <div className="hidden md:block relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/masterplan.jpeg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold mb-1">Premium Villa Plots</h3>
              <p className="text-sm text-white/90">
                Experience luxury living at Peninsula Park Elite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
