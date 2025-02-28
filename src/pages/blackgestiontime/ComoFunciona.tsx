import type React from 'react'
import { UserPlus, ShoppingCart, Download, Play } from 'lucide-react'

export default function ComoFunciona() {
  return (
    <section className='w-full bg-white border-y border-gray-200 py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Cómo funciona
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Sigue estos sencillos pasos para comenzar a utilizar nuestro
            producto
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Step
            number={1}
            icon={<UserPlus className='h-10 w-10 text-blue-500' />}
            title='Regístrate'
            description='Crea tu cuenta en nuestra plataforma de forma rápida y segura'
          />

          <Step
            number={2}
            icon={<ShoppingCart className='h-10 w-10 text-green-500' />}
            title='Compra el producto'
            description='Selecciona el plan que mejor se adapte a tus necesidades'
          />

          <Step
            number={3}
            icon={<Download className='h-10 w-10 text-purple-500' />}
            title='Descarga'
            description='Descarga nuestra aplicación en tu dispositivo preferido'
          />

          <Step
            number={4}
            icon={<Play className='h-10 w-10 text-red-500' />}
            title='Comienza a usarlo'
            description='Disfruta de todas las funcionalidades de nuestro producto'
          />
        </div>
      </div>
    </section>
  )
}

interface StepProps {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}

function Step({ number, icon, title, description }: StepProps) {
  return (
    <div className='flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-lg transition-all hover:shadow-md'>
      <div className='flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4'>
        {icon}
      </div>
      <div className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm mb-4'>
        {number}
      </div>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}
