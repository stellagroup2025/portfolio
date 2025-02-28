'use client'

import { useState } from 'react'
import { Play, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ProductDemo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)

  const screenshots = [
    {
      alt: 'Dashboard interface showing key metrics',
      description:
        'Vista principal del dashboard con métricas clave y análisis en tiempo real'
    },
    {
      alt: 'User profile settings page',
      description:
        'Configuración de perfil de usuario con opciones personalizables'
    },
    {
      alt: 'Analytics reporting view',
      description:
        'Visualización de reportes analíticos con gráficos interactivos'
    },
    {
      alt: 'Mobile responsive view',
      description:
        'Vista responsiva en dispositivos móviles para acceso en cualquier lugar'
    }
  ]

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    )
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  return (
    <section className='w-full bg-white'>
      <div className='w-full px-4 py-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Capturas de pantalla y Demo
        </h2>

        <Tabs defaultValue='screenshots' className='w-full'>
          <TabsList className='grid w-full grid-cols-2 mb-8'>
            <TabsTrigger value='screenshots'>Capturas de pantalla</TabsTrigger>
            <TabsTrigger value='demo'>Demo en video</TabsTrigger>
          </TabsList>

          <TabsContent value='screenshots' className='space-y-6'>
            <div className='relative overflow-hidden rounded-xl bg-white border'>
              <div className='flex items-center justify-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute left-2 z-10 rounded-full bg-white/80 backdrop-blur-sm'
                  onClick={handlePrevious}
                >
                  <ChevronLeft className='h-6 w-6' />
                  <span className='sr-only'>Anterior</span>
                </Button>

                <div className='relative aspect-video w-full'>
                  <div className='absolute inset-0 bg-white border flex items-center justify-center text-gray-300'>
                    <span className='text-sm'>
                      Imagen {currentImageIndex + 1}
                    </span>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute right-2 top-2 z-10 rounded-full bg-white/80 backdrop-blur-sm'
                    onClick={() => openLightbox(currentImageIndex)}
                  >
                    <Maximize className='h-4 w-4' />
                    <span className='sr-only'>Ver en pantalla completa</span>
                  </Button>
                </div>

                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute right-2 z-10 rounded-full bg-white/80 backdrop-blur-sm'
                  onClick={handleNext}
                >
                  <ChevronRight className='h-6 w-6' />
                  <span className='sr-only'>Siguiente</span>
                </Button>
              </div>

              <div className='mt-4 text-center p-4'>
                <p className='text-muted-foreground'>
                  {screenshots[currentImageIndex].description}
                </p>
              </div>

              <div className='mt-6 flex justify-center gap-2 pb-4'>
                {screenshots.map((_, index) => (
                  <Button
                    key={index}
                    variant='ghost'
                    size='sm'
                    className={cn(
                      'h-2 w-2 rounded-full p-0',
                      currentImageIndex === index ? 'bg-primary' : 'bg-muted'
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <span className='sr-only'>Ver imagen {index + 1}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8'>
              {screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className={cn(
                    'cursor-pointer transition-all hover:ring-2 hover:ring-primary bg-white',
                    currentImageIndex === index && 'ring-2 ring-primary'
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <CardContent className='p-2'>
                    <div className='relative aspect-video w-full overflow-hidden rounded-md border bg-white flex items-center justify-center text-gray-300'>
                      <span className='text-xs'>Imagen {index + 1}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='demo'>
            <Card className='bg-white'>
              <CardContent className='p-6'>
                <div className='relative aspect-video w-full overflow-hidden rounded-xl bg-white border'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Button size='lg' className='gap-2'>
                      <Play className='h-5 w-5' />
                      Ver demo
                    </Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    Demo explicativo del producto
                  </h3>
                  <p className='text-muted-foreground'>
                    Este video corto muestra las principales funcionalidades del
                    producto en acción. Vea cómo nuestros usuarios aprovechan
                    las características para mejorar su productividad y obtener
                    resultados excepcionales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {showLightbox && (
          <div className='fixed inset-0 z-50 bg-white flex items-center justify-center'>
            <div className='relative w-full max-w-5xl p-4'>
              <Button
                variant='ghost'
                size='icon'
                className='absolute right-2 top-2 z-10 rounded-full bg-white/80'
                onClick={closeLightbox}
              >
                <X className='h-6 w-6' />
                <span className='sr-only'>Cerrar</span>
              </Button>

              <div className='relative aspect-video w-full border'>
                <div className='absolute inset-0 bg-white flex items-center justify-center text-gray-300'>
                  <span>Imagen {lightboxImage + 1}</span>
                </div>
              </div>

              <div className='absolute left-0 right-0 bottom-4 flex justify-center gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-full bg-white/80'
                  onClick={() =>
                    setLightboxImage((prev) =>
                      prev === 0 ? screenshots.length - 1 : prev - 1
                    )
                  }
                >
                  <ChevronLeft className='h-6 w-6' />
                  <span className='sr-only'>Anterior</span>
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-full bg-white/80'
                  onClick={() =>
                    setLightboxImage((prev) =>
                      prev === screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <ChevronRight className='h-6 w-6' />
                  <span className='sr-only'>Siguiente</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
