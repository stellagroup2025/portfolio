import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  )
}
