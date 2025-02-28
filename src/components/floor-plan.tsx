"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const siteImages = [
  { src: "/images/site1.jpeg", alt: "Floor Plan 1", title: "Floor Plan 1" },
  { src: "/images/master.jpeg", alt: "Floor Plan 2", title: "Master Plan" },
  { src: "/images/site3.jpeg", alt: "Floor Plan 3", title: "Site Layout" },
  {
    src: "/images/site4.jpeg",
    alt: "Floor Plan 4",
    title: "Plot Distribution",
  },
  { src: "/images/site5.jpeg", alt: "Floor Plan 5", title: "Amenities Layout" },
  {
    src: "/images/site6.jpeg",
    alt: "Floor Plan 6",
    title: "Infrastructure Plan",
  },
];

export default function FloorPlan() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % siteImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? siteImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-white" id="floor-plan">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Site & Floor Plans
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-xl group-hover:border-primary/50 transition-colors duration-300" />
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsOpen(true);
                    }}
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                  >
                    View Plan
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Image Carousel Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-black/95">
            {/* Add DialogTitle for accessibility */}
            <DialogTitle className="sr-only">
              {siteImages[currentImageIndex].title}
            </DialogTitle>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Previous button */}
              <button
                onClick={previousImage}
                className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Images */}
              <div className="relative w-full h-full">
                {siteImages.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-in-out",
                      index === currentImageIndex
                        ? "opacity-100 transform-none"
                        : "opacity-0 scale-95"
                    )}
                    aria-hidden={index !== currentImageIndex}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-white text-xl font-semibold bg-black/50 inline-block px-4 py-2 rounded-full">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
