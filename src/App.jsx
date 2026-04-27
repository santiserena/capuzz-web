import styled from "styled-components";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { GallerySection } from "./components/GallerySection";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Main = styled.main`
  min-height: 100vh;
  background-color: #0a0a0a;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <GallerySection />
        <About />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

export default App;
