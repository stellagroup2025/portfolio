import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/app/globals.css' // Importa los estilos globales si los tienes

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      <Header /> {/* Se mantiene en todas las páginas */}
      <main className='flex-grow'>
        <Component {...pageProps} />{' '}
        {/* Aquí se renderizan las páginas dinámicamente */}
      </main>
      <Footer /> {/* Se mantiene en todas las páginas */}
    </div>
  )
}
