import { ArrowRight, BarChart2, Layers, Zap } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function AlternativeFeaturesSection() {
  const features = [
    {
      icon: <Layers className='h-12 w-12 text-primary' />,
      title: 'Organización',
      description:
        'Sistema intuitivo de gestión que te permite categorizar y acceder a tu contenido de manera eficiente, eliminando el desorden digital.',
      link: '#organizacion'
    },
    {
      icon: <Zap className='h-12 w-12 text-primary' />,
      title: 'Productividad',
      description:
        'Herramientas avanzadas de automatización y flujos de trabajo optimizados que reducen tareas repetitivas y maximizan tu rendimiento diario.',
      link: '#productividad'
    },
    {
      icon: <BarChart2 className='h-12 w-12 text-primary' />,
      title: 'Accesibilidad',
      description:
        'Diseño universal que garantiza que todos los usuarios, independientemente de sus capacidades, puedan utilizar nuestras soluciones sin barreras.',
      link: '#accesibilidad'
    }
  ]

  return (
    <section className='py-20 bg-white'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center text-center space-y-4 mb-12'>
          <div className='inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary'>
            Beneficios Clave
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Características Principales
          </h2>
          <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Descubre cómo nuestras soluciones pueden transformar tu experiencia
            y potenciar tus resultados.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-primary/50'
            >
              <CardHeader className='pb-2'>
                <div className='mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center'>
                  {feature.icon}
                </div>
                <CardTitle className='text-xl'>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base text-muted-foreground'>
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a
                  href={feature.link}
                  className='inline-flex items-center text-primary font-medium hover:underline'
                >
                  Saber más
                  <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className='mt-16 flex justify-center'>
          <div className='relative overflow-hidden rounded-full border border-gray-200 bg-white px-8 py-3 shadow-sm transition-all hover:border-primary/50 hover:shadow-md'>
            <div className='flex items-center gap-2'>
              <span className='text-sm font-medium'>
                Ver todas las características
              </span>
              <ArrowRight className='h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
