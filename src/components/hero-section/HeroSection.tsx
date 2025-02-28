export default function HeroSection() {
  return (
    <section className='flex flex-col items-center justify-center h-[70vh] bg-white text-primary p-8 border border-gray-200 rounded-lg shadow-sm'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl font-extrabold text-primary'>
          ¡Bienvenido a Mi Empresa!
        </h1>
        <p className='text-xl mt-4 max-w-2xl text-gray-600'>
          Ofrecemos las mejores soluciones tecnológicas para tu negocio. 🚀
        </p>
        <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition'>
          Conócenos
        </button>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/20 rounded-full hidden md:block'></div>
      <div className='absolute bottom-1/4 right-10 w-32 h-32 border-2 border-primary/20 rounded-full hidden md:block'></div>
      <div className='absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/10 rounded-full hidden lg:block'></div>
    </section>
  )
}
