'use client';

import styled, { keyframes } from "styled-components"
import { ChevronDown } from "lucide-react"

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`

const TitleGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse at center, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.08) 30%, transparent 70%);
  pointer-events: none;
  filter: blur(40px);
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
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
  font-size: clamp(4rem, 12vw, 9rem);
  letter-spacing: 0.15em;
  color: #f5f5f5;
  margin-bottom: 2rem;
  font-weight: 400;
`

const Description = styled.p`
  color: #888888;
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto 3rem;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background-color: #c9a962;
  color: #0a0a0a;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: rgba(201, 169, 98, 0.9);
  }
`

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  border: 1px solid rgba(245, 245, 245, 0.3);
  color: #f5f5f5;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  transition: border-color 0.3s, color 0.3s;
  text-decoration: none;

  &:hover {
    border-color: #c9a962;
    color: #c9a962;
  }
`

const ScrollIndicator = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #888888;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #c9a962;
  }
`

const ScrollText = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.3em;
`

const BouncingIcon = styled(ChevronDown)`
  width: 1.25rem;
  height: 1.25rem;
  animation: ${bounce} 1.5s infinite;
`

export function Hero() {
  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById("work")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <HeroSection>
      <TitleGlow />
      
      <ContentWrapper>
        <Subtitle>Fantasy Illustrator</Subtitle>
        <Title>CAPUZZ</Title>
        <Description>
          Crafting dark fantasy worlds, mythical creatures, and unforgettable
          characters through ink, watercolor, and digital artistry
        </Description>
        
        <ButtonGroup>
          <PrimaryButton href="#work">VIEW PORTFOLIO</PrimaryButton>
          <SecondaryButton href="#contact">GET IN TOUCH</SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
      
      <ScrollIndicator onClick={handleScrollToGallery} type="button">
        <ScrollText>SCROLL</ScrollText>
        <BouncingIcon />
      </ScrollIndicator>
    </HeroSection>
  )
}
