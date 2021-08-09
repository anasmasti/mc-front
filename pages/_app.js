import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import MainLayout from '../layouts/MainLayout'

function MCApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MCApp
