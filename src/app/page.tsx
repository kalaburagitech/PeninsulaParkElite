import Hero from "@/components/hero";
import Overview from "@/components/overview";
import PricingSection from "@/components/pricing-section";
import VirtualTour from "@/components/virtual-tour";
import FloorPlan from "@/components/floor-plan";
import Location from "@/components/location";
import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <PricingSection />
      <VirtualTour />
      <FloorPlan />
      <Location />
      <Amenities />
      <Gallery />
      <ContactForm />
    </main>
  );
}
