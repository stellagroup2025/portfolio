'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: '¿Cómo instalo el producto?',
      answer:
        'Para instalar nuestro producto, descargue el archivo de instalación desde nuestra página web oficial. Ejecute el archivo y siga las instrucciones del asistente de instalación. Si encuentra algún problema durante la instalación, consulte nuestra guía detallada o contacte a nuestro equipo de soporte.'
    },
    {
      question: '¿Cuáles son los requisitos del sistema?',
      answer:
        'Nuestro producto es compatible con Windows 10/11, macOS 10.15 o superior, y distribuciones Linux basadas en Ubuntu 20.04 o superior. Se requiere un mínimo de 4GB de RAM, 2GB de espacio en disco y conexión a internet para las actualizaciones automáticas.'
    },
    {
      question: '¿Cómo puedo actualizar a la última versión?',
      answer:
        'El producto se actualiza automáticamente cuando hay nuevas versiones disponibles. También puede verificar manualmente las actualizaciones desde el menú Configuración > Actualizaciones. Asegúrese de tener una conexión a internet activa durante el proceso de actualización.'
    },
    {
      question: '¿Ofrecen soporte técnico?',
      answer:
        'Sí, ofrecemos soporte técnico a través de múltiples canales. Puede contactarnos por correo electrónico a soporte@ejemplo.com, por chat en vivo en nuestra página web, o por teléfono al +1-234-567-8900 durante horas laborables (9:00 - 18:00 GMT).'
    },
    {
      question: '¿Tienen una política de reembolso?',
      answer:
        'Ofrecemos una garantía de devolución de dinero de 30 días desde la fecha de compra. Si no está satisfecho con nuestro producto, puede solicitar un reembolso completo sin preguntas. Para iniciar el proceso de reembolso, contacte a nuestro equipo de atención al cliente con su número de pedido.'
    },
    {
      question: '¿Cómo puedo obtener ayuda con funciones específicas?',
      answer:
        'Disponemos de una extensa documentación y tutoriales en video en nuestro centro de ayuda. También puede unirse a nuestra comunidad de usuarios donde otros usuarios experimentados y nuestro equipo responden preguntas frecuentemente. Para casos más específicos, nuestro equipo de soporte está disponible para asistencia personalizada.'
    }
  ]

  return (
    <div className='w-full mx-auto p-4 bg-white'>
      {' '}
      {/* Fondo blanco en toda la sección */}
      <h2 className='text-2xl font-bold text-center mb-8 text-black'>
        Preguntas Frecuentes
      </h2>
      <div className='space-y-4 rounded-lg overflow-hidden'>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg overflow-hidden bg-white' // Fondo blanco en cada pregunta
          >
            <button
              onClick={() => toggleQuestion(index)}
              className='flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none bg-white'
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className='text-black'>{item.question}</span>
              <span className='ml-6 flex-shrink-0'>
                {openIndex === index ? (
                  <ChevronUp className='h-5 w-5 text-gray-700' />
                ) : (
                  <ChevronDown className='h-5 w-5 text-gray-700' />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out bg-white ${
                openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className='text-gray-800'>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
