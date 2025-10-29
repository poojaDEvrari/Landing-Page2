import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
