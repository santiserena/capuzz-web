import styled from 'styled-components'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { GalleryHeader } from './components/GalleryHeader'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const Main = styled.main`
  min-height: 100vh;
  background-color: #0a0a0a;
`

function App() {
  return (
    /* ,,, analizar como deben estar organizadas las partes | ver puerto 5173 | ver si meto variables para los colores */
    <>
      <Header />
      <Main>
        {/* quitar todos los divs ,,, */}
        <Hero />
        <div style={{ border: '1px solid blue' }}>
          <GalleryHeader />
        </div>
        <div style={{ border: '1px solid green' }}>
          <About />
        </div>
        <div style={{ border: '1px solid violet' }}>
          <Contact />
        </div>
        <div style={{ border: '1px solid orange' }}>
          <Footer />
        </div>
      </Main>
    </>
  )
}

export default App
