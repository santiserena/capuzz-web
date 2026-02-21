import { useState } from "react"
import styled from "styled-components"
import { Lightbox } from "./Lightbox"

/* ,,, meter en un json: */
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

export function Gallery() {
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
                <h1>holaaaaa</h1>
                <GalleryGrid>
                    {artworks.map((artwork) => (
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
                </GalleryGrid>
            </Container>

            {lightboxImage && (
                <Lightbox artwork={lightboxImage} onClose={closeLightbox} />
            )}
        </Section>
    )
}