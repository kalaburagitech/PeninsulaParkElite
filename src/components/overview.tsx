"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, LayoutGrid } from "lucide-react";

export default function Overview() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stats = [
    {
      title: "Total Land Area",
      value: "17.50 Acres",
      icon: <LayoutGrid className="w-6 h-6" />,
      description: "Sprawling development space",
    },
    {
      title: "Total Units",
      value: "261",
      icon: <MapPin className="w-6 h-6" />,
      description: "Premium villa plots",
    },
    {
      title: "Possession",
      value: "Ready for Registration",
      icon: <Calendar className="w-6 h-6" />,
      description: "OC Received",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="overview">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,218,218,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(218,218,255,0.15),transparent_50%)]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Title */}
          <motion.div variants={fadeIn} className="inline-block mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
              Overview
            </span>
          </motion.div>

          {/* Location */}
          <motion.h2
            variants={fadeIn}
            className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            At Devanahalli, North Bangalore
          </motion.h2>

          {/* Description */}
          <motion.div variants={fadeIn} className="space-y-6 mb-12">
            <p className="text-gray-600 leading-relaxed text-lg">
              Introducing Peninsula Park Elite, an exquisite premium villa
              plotted development located in the thriving area of Devanahalli,
              Bangalore.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Strategically positioned in close proximity to the Satellite Town
              Ring Road, this project offers convenient connectivity to various
              parts of the city. Situated amidst a peaceful and serene
              environment, Peninsula Park Elite spans a sprawling 17.5 acres of
              land. With a total of 261 premium villa plots, this meticulously
              designed development promises a lifestyle of utmost luxury and
              comfort.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
                className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {stat.icon}
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-600 mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeIn} className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
