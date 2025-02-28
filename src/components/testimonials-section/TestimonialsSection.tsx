export default function TestimonialsSection() {
  return (
    <section className='py-16 px-8 bg-white text-gray-800 text-center'>
      <h2 className='text-4xl font-bold mb-6'>
        Lo que dicen nuestros clientes
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Testimonio 1 */}
        <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
          <p className='text-gray-600 italic'>
            &quot;El equipo hizo un trabajo increíble con nuestro sitio web.
            Altamente recomendado!&quot;
          </p>
          <h3 className='text-xl font-semibold mt-4 text-gray-800'>
            - Juan Pérez
          </h3>
        </div>

        {/* Testimonio 2 */}
        <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
          <p className='text-gray-600 italic'>
            &quot;Nos ayudaron a digitalizar nuestra empresa de manera eficiente
            y profesional.&quot;
          </p>
          <h3 className='text-xl font-semibold mt-4 text-gray-800'>
            - Ana Gómez
          </h3>
        </div>

        {/* Testimonio 3 */}
        <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
          <p className='text-gray-600 italic'>
            &quot;Gracias a ellos, ahora tenemos una app móvil increíble para
            nuestros clientes.&quot;
          </p>
          <h3 className='text-xl font-semibold mt-4 text-gray-800'>
            - Carlos Ramírez
          </h3>
        </div>
      </div>
    </section>
  )
}
