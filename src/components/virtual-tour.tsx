"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function VirtualTour() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/elite.jpeg"
              alt="360 Virtual Tour"
              fill
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              TAKE A 360 DEGREE TOUR
              <br />
              OF THE PROJECT
            </h2>
            <p className="text-xl mb-8">
              Schedule A Virtual Tour With Our Expert
            </p>
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Schedule A Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Virtual Site Visit</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Input placeholder="Name" />
            </div>
            <div className="flex gap-2">
              <Input defaultValue="+91" className="w-[80px]" />
              <Input placeholder="Mobile No." />
            </div>
            <div>
              <Input placeholder="E-Mail Address" type="email" />
            </div>
            <div>
              <Textarea placeholder="Message" />
            </div>
            <Button type="submit">Start Tour</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
