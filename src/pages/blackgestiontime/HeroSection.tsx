import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 border-b border-gray-200 bg-white'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black'>
            BlackGestionTime
          </h1>
          <p className='text-xl text-gray-700 md:text-2xl'>
            Gestión y organización de tareas eficiente para todo tipo de
            organizaciones
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <Button className='bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md'>
              Regístrate y Descarga
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
