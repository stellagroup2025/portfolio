import { Check, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function PlanesDePrecio() {
  return (
    <div className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            Planes de Precios
          </h2>
          <p className='mt-4 text-xl text-gray-600'>
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
          {/* Plan Básico */}
          <Card className='bg-gray-50 border-gray-200 flex flex-col'>
            <CardHeader>
              <CardTitle className='text-xl'>Plan Básico</CardTitle>
              <CardDescription>Para usuarios individuales</CardDescription>
              <div className='mt-4'>
                <span className='text-4xl font-bold'>€9.99</span>
                <span className='text-gray-500 ml-2'>/mes</span>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Acceso a funciones básicas</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>1 usuario</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>5GB de almacenamiento</span>
                </li>
                <li className='flex items-center'>
                  <X className='h-5 w-5 text-red-500 mr-2' />
                  <span className='text-gray-500'>Soporte prioritario</span>
                </li>
                <li className='flex items-center'>
                  <X className='h-5 w-5 text-red-500 mr-2' />
                  <span className='text-gray-500'>Funciones avanzadas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className='w-full' variant='outline'>
                Elegir Plan Básico
              </Button>
            </CardFooter>
          </Card>

          {/* Plan Profesional */}
          <Card className='bg-gray-50 border-gray-200 flex flex-col relative'>
            <div className='absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg'>
              Popular
            </div>
            <CardHeader>
              <CardTitle className='text-xl'>Plan Profesional</CardTitle>
              <CardDescription>
                Para profesionales y equipos pequeños
              </CardDescription>
              <div className='mt-4'>
                <span className='text-4xl font-bold'>€24.99</span>
                <span className='text-gray-500 ml-2'>/mes</span>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Todas las funciones básicas</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Hasta 5 usuarios</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>25GB de almacenamiento</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Soporte prioritario</span>
                </li>
                <li className='flex items-center'>
                  <X className='h-5 w-5 text-red-500 mr-2' />
                  <span className='text-gray-500'>Funciones avanzadas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Elegir Plan Profesional</Button>
            </CardFooter>
          </Card>

          {/* Plan Empresarial */}
          <Card className='bg-gray-50 border-gray-200 flex flex-col'>
            <CardHeader>
              <CardTitle className='text-xl'>Plan Empresarial</CardTitle>
              <CardDescription>Para empresas y equipos grandes</CardDescription>
              <div className='mt-4'>
                <span className='text-4xl font-bold'>€49.99</span>
                <span className='text-gray-500 ml-2'>/mes</span>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Todas las funciones profesionales</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Usuarios ilimitados</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>100GB de almacenamiento</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Soporte prioritario 24/7</span>
                </li>
                <li className='flex items-center'>
                  <Check className='h-5 w-5 text-green-500 mr-2' />
                  <span>Funciones avanzadas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className='w-full' variant='outline'>
                Elegir Plan Empresarial
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Tabla comparativa */}
        <div className='mt-16 overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200 divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Funcionalidad
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Básico
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Profesional
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Empresarial
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Usuarios
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  1
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  5
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  Ilimitados
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Almacenamiento
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  5GB
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  25GB
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  100GB
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Soporte
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  Básico
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  Prioritario
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  24/7
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Funciones avanzadas
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <X className='h-5 w-5 text-red-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <X className='h-5 w-5 text-red-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <Check className='h-5 w-5 text-green-500 mx-auto' />
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Informes personalizados
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <X className='h-5 w-5 text-red-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <Check className='h-5 w-5 text-green-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <Check className='h-5 w-5 text-green-500 mx-auto' />
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  Integraciones
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <X className='h-5 w-5 text-red-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <Check className='h-5 w-5 text-green-500 mx-auto' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <Check className='h-5 w-5 text-green-500 mx-auto' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
