import { Header } from "@/components/header"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceAreas } from "@/components/service-areas"
import { TrustSection } from "@/components/trust-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <ServiceAreas />
      <TrustSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
