"use client";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import {
  Library,
  PocketIcon as Pool,
  PartyPopper,
  Dumbbell,
  ClubIcon as BadmintonIcon,
  Trees,
  Car,
  Shield,
  Wifi,
  Gamepad2,
  Baby,
  UtensilsCrossed,
  Tent,
  Footprints,
  Heart,
} from "lucide-react";

export default function Amenities() {
  const amenityGroups = [
    {
      title: "Sports & Fitness",
      items: [
        {
          icon: <Pool className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Swimming Pool",
        },
        {
          icon: <Dumbbell className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Gymnasium",
        },
        {
          icon: <BadmintonIcon className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Badminton Court",
        },
        {
          icon: <Footprints className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Jogging Track",
        },
      ],
    },
    {
      title: "Leisure & Entertainment",
      items: [
        {
          icon: <Library className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Library",
        },
        {
          icon: <PartyPopper className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Party Hall",
        },
        {
          icon: <Gamepad2 className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Indoor Games",
        },
        {
          icon: <UtensilsCrossed className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Restaurant",
        },
      ],
    },
    {
      title: "Environment & Security",
      items: [
        {
          icon: <Trees className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Landscaped Gardens",
        },
        {
          icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />,
          name: "24/7 Security",
        },
        {
          icon: <Car className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Parking Space",
        },
        {
          icon: <Wifi className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Wi-Fi Connectivity",
        },
      ],
    },
    {
      title: "Family & Community",
      items: [
        {
          icon: <Baby className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Kids Play Area",
        },
        {
          icon: <Tent className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Community Space",
        },
        {
          icon: <Heart className="h-5 w-5 md:h-6 md:w-6" />,
          name: "Senior Citizen Area",
        },
      ],
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
    <section className="relative py-12 md:py-24 overflow-hidden" id="amenities">
      {/* Background Elements - Only visible on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,218,218,0.15),transparent_50%)]" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(218,218,255,0.15),transparent_50%)]" />

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
              World-Class Amenities
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Live Life to the Fullest
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm md:text-base"
          >
            Experience luxury living with our premium amenities designed for
            your comfort and enjoyment
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 md:gap-8"
        >
          {amenityGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className={cn(
                "bg-white rounded-xl p-4 md:p-6 border border-gray-100",
                "hover:border-primary/20 transition-colors",
                "md:backdrop-blur-sm md:bg-white/50"
              )}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-900">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {group.items.map((amenity) => (
                  <motion.div
                    key={amenity.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-2 md:gap-3 p-2 md:p-4 rounded-lg bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300">
                      <div className="relative">
                        {/* Glow effect - Only visible on desktop */}
                        <div className="hidden md:block absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-70" />
                        <div
                          className={cn(
                            "relative rounded-full p-3 md:p-4 transition-transform",
                            "bg-primary/5 text-primary",
                            "md:bg-gradient-to-br md:from-primary/10 md:to-primary/5",
                            "group-hover:scale-110"
                          )}
                        >
                          {amenity.icon}
                        </div>
                      </div>
                      <h4 className="text-xs md:text-sm font-medium text-gray-900 text-center group-hover:text-primary transition-colors">
                        {amenity.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
