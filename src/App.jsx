import styled from 'styled-components'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Portfolio } from './components/portfolio'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

const Main = styled.main`
  min-height: 100vh;
  background-color: #0a0a0a;
`

function App() {
  return (
    <Main>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </Main>
  )
}

export default App
