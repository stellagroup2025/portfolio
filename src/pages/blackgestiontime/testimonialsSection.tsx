import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className='w-full py-12 md:py-16 lg:py-20 bg-white'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-10'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Testimonios y Casos de Uso
          </h2>
          <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed'>
            Descubre cómo nuestras soluciones han mejorado la productividad de
            empresas reales.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='border border-gray-200 shadow-sm hover:shadow-md transition-shadow'
            >
              <CardContent className='p-6'>
                <div className='flex items-start mb-4'>
                  <Quote className='h-8 w-8 text-gray-300 mr-2 flex-shrink-0' />
                  <p className='text-gray-700 italic'>{testimonial.quote}</p>
                </div>
                <div className='flex items-center mt-6'>
                  <Avatar className='h-10 w-10 mr-4 border border-gray-200'>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-medium'>{testimonial.name}</p>
                    <p className='text-sm text-gray-500'>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                {testimonial.metrics && (
                  <div className='mt-4 pt-4 border-t border-gray-100'>
                    <p className='text-sm font-medium text-gray-900'>
                      Resultados:
                    </p>
                    <p className='text-sm text-gray-600'>
                      {testimonial.metrics}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='mt-12 text-center'>
          <p className='text-gray-500'>
            Únete a cientos de empresas que han mejorado su productividad con
            nuestras soluciones.
          </p>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      'Implementar esta solución transformó completamente nuestros procesos internos. La productividad del equipo aumentó en un 35% en solo tres meses.',
    name: 'María Rodríguez',
    role: 'Directora de Operaciones',
    company: 'TechSolutions S.A.',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      '35% de aumento en productividad, 20% de reducción en costos operativos'
  },
  {
    quote:
      'La facilidad de uso y la potencia de las herramientas nos permitieron optimizar nuestros flujos de trabajo. El retorno de inversión fue evidente desde el primer mes.',
    name: 'Carlos Méndez',
    role: 'CEO',
    company: 'Innovatech',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      'ROI positivo en el primer mes, 40% menos tiempo en tareas administrativas'
  },
  {
    quote:
      'Después de probar varias soluciones en el mercado, finalmente encontramos una que realmente entiende nuestras necesidades. El soporte técnico ha sido excepcional.',
    name: 'Ana Gómez',
    role: 'Gerente de Proyectos',
    company: 'Construye Futuro',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      '15 proyectos completados antes de lo previsto, satisfacción del cliente mejorada en un 28%'
  },
  {
    quote:
      'La integración con nuestros sistemas existentes fue sorprendentemente sencilla. Ahora tenemos una visión unificada de todos nuestros datos y procesos.',
    name: 'Javier Torres',
    role: 'Director de Tecnología',
    company: 'DataVision',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      'Reducción del 60% en tiempo de integración, centralización de 5 sistemas diferentes'
  },
  {
    quote:
      'Como pequeña empresa, necesitábamos una solución escalable que creciera con nosotros. Esta plataforma nos ha permitido expandirnos sin preocupaciones tecnológicas.',
    name: 'Laura Sánchez',
    role: 'Fundadora',
    company: 'CreceJuntos',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      'Crecimiento del 150% en operaciones sin aumentar personal administrativo'
  },
  {
    quote:
      'La automatización de procesos repetitivos nos ha liberado tiempo para enfocarnos en lo que realmente importa: la innovación y el servicio al cliente.',
    name: 'Miguel Ángel Pérez',
    role: 'Director Comercial',
    company: 'Ventas Globales',
    avatar: '/placeholder.svg?height=40&width=40',
    metrics:
      'Aumento del 45% en tiempo dedicado a clientes, incremento del 30% en ventas'
  }
]
