import { useState } from "react"
import styled from "styled-components"
import { Lightbox } from "./Lightbox"
import { Gallery } from './Gallery'

/* ,,, sacar todo esto y limpiar todo lo relacionado a Gallery: */
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

const Section = styled.section`
  padding: 6rem 1.5rem;
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
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
  margin-bottom: 4rem;
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
  ${props => props.$isAll && `
    padding-left: 0.75rem;
    &::before {
      content: '●'; /* ,,, importar iconos bien! */
      margin-right: 0.5rem;
      color: ${props.$active ? '#0a0a0a' : '#888888'};
      transition: color 0.3s;
    }
  `}

  @media (hover: hover) {
    &:hover {
      border-color: #c9a962;
      color: ${props => props.$active ? '#0a0a0a' : '#c9a962'};
      ${props => props.$isAll && !props.$active && `
        &::before {
          color: #c9a962;
        }
      `}
    }
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

const ArtworkContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s;
`

const ArtworkCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #111111;
  cursor: pointer;

  &:hover ${ArtworkImage} {
    transform: scale(1.05);
  }

  &:hover ${ArtworkOverlay} {
    opacity: 1;
  }

  &:hover ${ArtworkContent} {
    transform: translateY(0);
  }
`
/* ,,, al seleccionar y desseleccionar, en dispositivos pequeños queda como si estuviera haciendo hover */
/* ,,, en dispositivos pequeños, hacer que cada btn ocupe la mitad de la pantalla */
export function GalleryHeader() {
  const [filterArray, setSelectedFilter] = useState([
    { name: "all", active: true },
    { name: "watercolor", active: false },
    { name: "ink", active: false },
    { name: "cover", active: false },
    { name: "digital", active: false },
    { name: "comic", active: false },
    { name: "environment", active: false },
    { name: "character", active: false },
  ])
  const [lightboxImage, setLightboxImage] = useState(null)

  const setFilters = (filter) => {
    const arrayUpdated = filterArray.map((item) => {
      // If "all" was clicked, deactivate the others
      if (filter === "all") {
        return { ...item, active: item.name === "all" }
      }
      // If clicked on another filter, deactivate "all":
      if (item.name === "all") {
        return { ...item, active: false }
      }
      // Fiter toggle:
      if (item.name === filter) {
        return { ...item, active: !item.active }
      }
      return item
    })
    // If no filter is active, activate "all":
    const hasActiveFilters = arrayUpdated.some(item => item.active && item.name !== "all")
    const finalArray = hasActiveFilters ? arrayUpdated : arrayUpdated.map(item => ({ ...item, active: item.name === "all" }))
    setSelectedFilter(finalArray)
  }

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
        <SectionLabel>Gallery</SectionLabel>
        <SectionTitle>
          Selected works
        </SectionTitle>
        {/* ,,, borrar este div: */}
        {/* <pre>
          {JSON.stringify(filterArray, null, 2)}
        </pre> */}
        <FiltersWrapper>
          {filterArray.map((filter) => (
            <FilterButton
              key={filter.name}
              $active={filter.active}
              $isAll={filter.name === "all"}
              onClick={() => setFilters(filter.name)}
            >
              {filter.name}
            </FilterButton>
          ))}
        </FiltersWrapper>

        <Gallery />
        {/* <GalleryGrid>
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              onClick={() => openLightbox(artwork)}
            >
              <ArtworkImage
                src={artwork.image}
                alt={artwork.title}
              />
              <ArtworkOverlay />
              <ArtworkContent>
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <ArtworkMeta>{artwork.medium} / {artwork.category}</ArtworkMeta>
              </ArtworkContent>
            </ArtworkCard>
          ))}
        </GalleryGrid> */}
      </Container>

      {lightboxImage && (
        <Lightbox artwork={lightboxImage} onClose={closeLightbox} />
      )}
    </Section>
  )
}