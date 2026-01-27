'use client';

import { useState } from "react"
import styled from "styled-components"
import { X } from "lucide-react"

const artworks = [
  {
    id: 1,
    title: "Tribute to Akira Toriyama",
    image: "/images/p1.png",
    medium: "ink",
    category: "character",
  },
  {
    id: 2,
    title: "Tifa Lockhart",
    image: "/images/p5.png",
    medium: "watercolor",
    category: "character",
  },
  {
    id: 3,
    title: "Frozen Discovery",
    image: "/images/p6.png",
    medium: "digital",
    category: "environment",
  },
  {
    id: 4,
    title: "Among Us - Comic Cover",
    image: "/images/p7.png",
    medium: "comic",
    category: "cover",
  },
  {
    id: 5,
    title: "Follow - Study",
    image: "/images/p10.png",
    medium: "ink",
    category: "character",
  },
]

const filters = ["all", "digital", "watercolor", "ink", "comic", "environment", "character", "creature", "cover"]

const Section = styled.section`
  padding: 6rem 1.5rem;
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  margin-bottom: 4rem;
`

const SectionLabel = styled.p`
  color: #c9a962;
  font-size: 0.875rem;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 4rem);
  letter-spacing: 0.05em;
  color: #f5f5f5;
  font-weight: 400;
`

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`



const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid ${props => props.$active ? '#c9a962' : '#2a2a2a'};
  background-color: ${props => props.$active ? '#c9a962' : 'transparent'};
  color: ${props => props.$active ? '#0a0a0a' : '#888888'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #c9a962;
    color: ${props => props.$active ? '#0a0a0a' : '#c9a962'};
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ArtworkCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #111111;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .content {
    transform: translateY(0);
  }
`

const ArtworkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`

const ArtworkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent);
  opacity: 0;
  transition: opacity 0.3s;
`

const ArtworkContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s;
`

const ArtworkTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: #f5f5f5;
  margin-bottom: 0.25rem;
`

const ArtworkMeta = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c9a962;
`

// Lightbox styles
const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const LightboxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  max-height: 90vh;
`

const LightboxImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  object-fit: contain;
`

const LightboxInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`

const LightboxCategory = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c9a962;
  margin-bottom: 0.5rem;
`

const LightboxTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.75rem;
  color: #f5f5f5;
  font-weight: 400;
`

const CloseButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #f5f5f5;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;
  z-index: 101;

  &:hover {
    color: #c9a962;
  }
`

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState(null)

  const filteredArtworks = artworks.filter((artwork) => {
    if (selectedFilter === "all") return true
    return artwork.medium === selectedFilter || artwork.category === selectedFilter
  })

  const openLightbox = (artwork) => {
    setLightboxImage(artwork)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <Section id="work">
      <Container>
        <SectionHeader>
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>
            Selected<br />Works
          </SectionTitle>
        </SectionHeader>

        <FiltersWrapper>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              $active={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FiltersWrapper>

        <GalleryGrid>
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              onClick={() => openLightbox(artwork)}
            >
              <ArtworkImage
                src={artwork.image}
                alt={artwork.title}
              />
              <ArtworkOverlay className="overlay" />
              <ArtworkContent className="content">
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <ArtworkMeta>{artwork.medium} / {artwork.category}</ArtworkMeta>
              </ArtworkContent>
            </ArtworkCard>
          ))}
        </GalleryGrid>
      </Container>

      {lightboxImage && (
        <LightboxOverlay onClick={closeLightbox}>
          <CloseButton onClick={closeLightbox}>
            <X size={32} />
          </CloseButton>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <LightboxImageWrapper>
              <LightboxImage
                src={lightboxImage.image}
                alt={lightboxImage.title}
              />
            </LightboxImageWrapper>
            <LightboxInfo>
              <LightboxCategory>
                {lightboxImage.medium} / {lightboxImage.category}
              </LightboxCategory>
              <LightboxTitle>{lightboxImage.title}</LightboxTitle>
            </LightboxInfo>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </Section>
  )
}
