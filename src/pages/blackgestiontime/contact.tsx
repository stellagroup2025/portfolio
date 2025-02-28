'use client'

import type React from 'react'

import { useState } from 'react'
import { Send, MessageSquare, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

export default function FormularioContacto() {
  const [enviando, setEnviando] = useState(false)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setEnviando(false)
    setMensajeEnviado(true)

    // Resetear el mensaje después de 3 segundos
    setTimeout(() => setMensajeEnviado(false), 3000)
  }

  return (
    <div className='w-full bg-white py-8'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Soporte y Contacto
        </h1>

        <Tabs defaultValue='formulario' className='w-full'>
          <TabsList className='grid w-full grid-cols-2 mb-8'>
            <TabsTrigger value='formulario' className='flex items-center gap-2'>
              <Mail className='h-4 w-4' />
              Formulario de Contacto
            </TabsTrigger>
            <TabsTrigger value='chat' className='flex items-center gap-2'>
              <MessageSquare className='h-4 w-4' />
              Chat y Soporte
            </TabsTrigger>
          </TabsList>

          <TabsContent value='formulario'>
            <Card className='border border-gray-200'>
              <CardHeader>
                <CardTitle>Formulario de Contacto</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='nombre'>Nombre</Label>
                      <Input id='nombre' placeholder='Tu nombre' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='email'>Correo electrónico</Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='tu@email.com'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='asunto'>Asunto</Label>
                    <Input
                      id='asunto'
                      placeholder='Asunto de tu mensaje'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='mensaje'>Mensaje</Label>
                    <Textarea
                      id='mensaje'
                      placeholder='Escribe tu mensaje aquí...'
                      className='min-h-[150px]'
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full' disabled={enviando}>
                    {enviando ? (
                      <span className='flex items-center gap-2'>
                        <svg
                          className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className='flex items-center gap-2'>
                        <Send className='h-4 w-4' />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>
                  {mensajeEnviado && (
                    <div className='p-3 bg-green-50 text-green-700 rounded-md text-center'>
                      ¡Mensaje enviado con éxito! Te responderemos pronto.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='chat'>
            <Card className='border border-gray-200'>
              <CardHeader>
                <CardTitle>Chat en Vivo y Soporte</CardTitle>
                <CardDescription>
                  Contáctanos directamente a través de chat o correo
                  electrónico.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
                  <h3 className='text-lg font-medium mb-3 flex items-center gap-2'>
                    <MessageSquare className='h-5 w-5 text-primary' />
                    Chat en Vivo
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Nuestro equipo de soporte está disponible para ayudarte en
                    tiempo real de lunes a viernes de 9:00 a 18:00 horas.
                  </p>
                  <Button className='w-full sm:w-auto'>Iniciar chat</Button>
                </div>

                <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
                  <h3 className='text-lg font-medium mb-3 flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-primary' />
                    Correo de Soporte
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Envíanos un correo electrónico y te responderemos en un
                    plazo máximo de 24 horas.
                  </p>
                  <div className='bg-white p-3 rounded border border-gray-200 text-center'>
                    <a
                      href='mailto:soporte@ejemplo.com'
                      className='text-primary hover:underline'
                    >
                      soporte@ejemplo.com
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='flex flex-col items-start border-t border-gray-200 pt-6'>
                <h4 className='font-medium mb-2'>Horario de atención</h4>
                <p className='text-gray-600 text-sm'>
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                  <br />
                  Domingos y festivos: Cerrado
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
