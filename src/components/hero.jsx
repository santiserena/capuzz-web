import styled from "styled-components"
import { ChevronDown } from "lucide-react"

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  padding-top: 6rem;
  text-align: center;
`

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 100%;
  max-width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.08) 30%, transparent 70%);
`

const Subtitle = styled.p`
  color: #c9a962;
  font-size: 0.875rem;
  letter-spacing: 0.4em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: clamp(1rem, 12vw, 9rem);
  letter-spacing: 0.15em;
  color: #f5f5f5;
  margin-bottom: 2rem;
  font-weight: 400;
`

const Description = styled.p`
  color: #888;
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto 3rem;
  line-height: 1.7;
  overflow-wrap: break-word;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`

const Button = styled.a`
  padding: 1rem 2rem;
  font-size: 0.875rem;
  letter-spacing: 0.2rem;
  transition: all 0.3s;
  ${props => props.$primaryBtn ? `
    background: #c9a962;
    color: #0a0a0a;
    &:hover { background: rgba(201, 169, 98, 0.9); }
  ` : `
    border: 1px solid rgba(245, 245, 245, 0.3);
    color: #f5f5f5;
    &:hover { border-color: #c9a962; color: #c9a962; }
  `}
`

const Scroll = styled.button`
  margin-top: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  transition: color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover { color: #c9a962; }
  span { font-size: 0.75rem; letter-spacing: 0.3em; }
`

const ScrollIcon = styled(ChevronDown)`
  width: 1.25rem;
  height: 1.25rem;
  animation: bounce 1.5s infinite;
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
`

export function Hero() {
  return (
    <HeroSection>
      <Glow />
      <div>
        <Subtitle>Fantasy Illustrator</Subtitle>
        <Title>CAPUZZ</Title>
        <Description>
          Crafting dark fantasy worlds, mythical creatures, and unforgettable
          characters through ink, watercolor, and digital artistry
        </Description>
        <Buttons>
          <Button $primaryBtn href="#work">VIEW PORTFOLIO</Button>
          <Button href="#contact">GET IN TOUCH</Button>
        </Buttons>
      </div>
      <Scroll onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
        <span>SCROLL</span>
        <ScrollIcon />
      </Scroll>
    </HeroSection>
  )
}