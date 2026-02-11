import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ImageComparisonSlider from "@/components/sections/ImageComparisonSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import ProblemNavigation from "@/components/sections/ProblemNavigation";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import StatsCounter from "@/components/sections/StatsCounter";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImageComparisonSlider />
      <ServicesSection />
      <ProblemNavigation />
      <ProcessSection />
      <GallerySection />
      <StatsCounter />
      <WhyUsSection />
      <TestimonialsSection />
      <PricingSection />
      <ComparisonTable />
      <ContactSection />
    </div>
  );
};

export default Index;
