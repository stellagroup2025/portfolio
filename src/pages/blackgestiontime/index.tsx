import HeroSection from '@/pages/blackgestiontime/HeroSection'
import FeaturesSection from '@/pages/blackgestiontime/features'
import ComoFunciona from '@/pages/blackgestiontime/ComoFunciona'
import ProductDemo from '@/pages/blackgestiontime/productDemo'
import TestimonialsSection from '@/pages/blackgestiontime/testimonialsSection'
import Pricing from '@/pages/blackgestiontime/pricing'
import FAQ from '@/pages/blackgestiontime/faq'
import Contact from '@/pages/blackgestiontime/contact' // ✅ Importamos la sección Contacto

export default function BlackGestionTime() {
  return (
    <main className='flex flex-col min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Cómo Funciona */}
      <ComoFunciona />
      {/* Demo Producto */}
      <ProductDemo />
      {/* Testimonios */}
      <TestimonialsSection />
      {/* Precios */}
      <Pricing />
      {/* Preguntas Frecuentes */}
      <FAQ />
      {/* Contacto */}
      <Contact /> {/* ✅ Agregamos la sección Contact */}
    </main>
  )
}
