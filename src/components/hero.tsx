"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ContactForm from "./contact-form";

const heroImages = [
  {
    src: "/images/hero.jpeg",
    alt: "Peninsula Park Elite Premium Villa Plots",
    title: "Premium Villa Plots",
  },
  {
    src: "/images/hero2.jpeg",
    alt: "Luxury Living Spaces",
    title: "Luxury Living",
  },
  {
    src: "/images/Hero.png",
    alt: "World Class Amenities",
    title: "World Class Amenities",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formContext, setFormContext] = useState<"brochure" | "visit" | null>(
    null
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleBrochureClick = () => {
    setFormContext("brochure");
    setShowContactForm(true);
  };

  const handleVisitClick = () => {
    setFormContext("visit");
    setShowContactForm(true);
  };

  return (
    <>
      <section
        className="relative w-full h-[100vh] md:h-[calc(100vh-4rem)] overflow-hidden bg-black"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Slider */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out transform",
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            )}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="md:object-cover object-cover"
                priority={index === 0}
                quality={100}
                sizes="100vw"
              />
            </div>
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <div className="max-w-3xl mt-16 md:mt-0 pb-16 md:pb-0">
              {/* Animated Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                PENINSULA PARK ELITE
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-slide-up">
                At Devanahalli, North Bangalore
                <br />
                Walking Distance From STRR
              </p>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="transform hover:scale-105 transition-transform p-2">
                    <h3 className="font-semibold">Total Land Area</h3>
                    <p className="text-lg sm:text-xl">17.50 Acres</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform p-2">
                    <h3 className="font-semibold">Total Units</h3>
                    <p className="text-lg sm:text-xl">261</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform p-2">
                    <h3 className="font-semibold">Possession</h3>
                    <p className="text-lg sm:text-xl">Ready for Registration</p>
                    <p className="text-sm">(OC Received)</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 animate-fade-in">
                <Button
                  size="lg"
                  variant="default"
                  onClick={handleBrochureClick}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all"
                >
                  Download Brochure
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleVisitClick}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all"
                >
                  Schedule Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-8 sm:w-16 h-1.5 rounded-full transition-all duration-300 transform hover:scale-110",
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">
                {formContext === "brochure"
                  ? "Download Brochure"
                  : "Schedule Site Visit"}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => {
                  setShowContactForm(false);
                  setFormContext(null);
                }}
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
