"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Navigation,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Plane,
  Car,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Location() {
  const locationFeatures = [
    {
      text: "10 Minutes From Kempegowda International Airport",
      icon: <Plane className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      text: "1 min from Satellite Town Ring Road (STRR)",
      icon: <Car className="h-4 w-4" />,
      color: "bg-green-500/10 text-green-500",
    },
    {
      text: "Premium Shopping Malls & Entertainment",
      icon: <ShoppingBag className="h-4 w-4" />,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      text: "Top Educational Institutions",
      icon: <GraduationCap className="h-4 w-4" />,
      color: "bg-yellow-500/10 text-yellow-500",
    },
    {
      text: "Leading Hospitals & Healthcare",
      icon: <HeartPulse className="h-4 w-4" />,
      color: "bg-red-500/10 text-red-500",
    },
    {
      text: "Upcoming Business District",
      icon: <Building2 className="h-4 w-4" />,
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ];

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
    <section className="relative py-12 overflow-hidden" id="location">
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
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
              Prime Location
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Strategic Location Advantage
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 h-full"
          >
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/location-map-png.png"
                alt="Peninsula Park Elite Location Map showing proximity to airport and key landmarks"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Devanahalli, North Bangalore
                </span>
              </div>
            </div>
            <div className="p-3">
              <Button
                size="sm"
                className="w-full group"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                <Navigation className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                View on Google Maps
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl border border-gray-100 p-4 h-full"
          >
            <motion.h3
              variants={itemVariants}
              className="text-lg font-semibold mb-4"
            >
              Location Advantages
            </motion.h3>
            <div className="grid gap-3">
              {locationFeatures.map((feature) => (
                <motion.div
                  key={feature.text}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div
                    className={`flex-shrink-0 p-2 rounded-lg ${feature.color} group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
