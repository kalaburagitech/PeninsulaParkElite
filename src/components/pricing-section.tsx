"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  X,
  Ruler,
  SquareAsterisk,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "./contact-form";

export default function PricingSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const plots = [
    {
      size: "30x40",
      area: "1200 Sq.Ft",
      price: "₹ 72 Lacs* Onwards",
      available: true,
      features: ["Premium Location", "BMRDA Approved", "Clear Title"],
    },
    {
      size: "30X50",
      area: "1500 Sq.Ft",
      price: "SOLD OUT",
      available: false,
      features: ["Premium Location", "BMRDA Approved", "Clear Title"],
    },
    {
      size: "40X60",
      area: "2400 Sq.Ft",
      price: "₹ 1.45 Cr* Onwards",
      available: true,
      features: ["Premium Location", "BMRDA Approved", "Clear Title"],
    },
  ];

  const handlePriceBreakup = (size: string) => {
    setSelectedSize(size);
    setShowContactForm(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden" id="price">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,218,218,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(218,218,255,0.15),transparent_50%)]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
              Pricing Plans
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Choose Your Perfect Plot
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600">
            Select from our range of premium plots in prime locations
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {plots.map((plot) => (
            <motion.div
              key={plot.size}
              variants={itemVariants}
              className="relative group"
            >
              <Card className="relative overflow-hidden bg-white border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-8">
                  {/* Size */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {plot.size}
                    </h3>
                  </div>

                  {/* Area */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600">
                      <SquareAsterisk className="w-4 h-4" />
                    </div>
                    <p className="text-base md:text-lg text-gray-700">
                      {plot.area}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <p
                      className={`text-lg md:text-xl font-bold ${
                        !plot.available ? "text-red-500" : "text-gray-900"
                      }`}
                    >
                      {plot.price}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plot.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm md:text-base text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    className="w-full group"
                    variant={plot.available ? "default" : "secondary"}
                    disabled={!plot.available}
                    onClick={() => handlePriceBreakup(plot.size)}
                  >
                    <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform">
                      {plot.available ? "Price Breakup" : "Sold Out"}
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handlePriceBreakup("all")}
            className="group"
          >
            <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              Complete Costing Details
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-auto"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-gray-900">
                {selectedSize === "all"
                  ? "Request Complete Pricing Details"
                  : `Request Price Breakup for ${selectedSize}`}
              </h3>
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
          </motion.div>
        </div>
      )}
    </section>
  );
}
