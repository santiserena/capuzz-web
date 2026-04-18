import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Lightbox } from "./Lightbox";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../lib/data";

const Section = styled.section`
  padding: 0rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const NoItemsMsg = styled.p`
  color: #888;
  text-align: center;
  font-size: 1.25rem;
  margin: -2rem auto 3rem;
  line-height: 1.7;
`;

/* ,,, ver si conviene cambiar las filas para que se luzca el zoom (esto cambiara la cantidad de card en load more) */
/* ,,, ver loading de carga de dibujos */
/* ,,, ajustar la posición del btn de cerrar el zoom */
/* ,,, Poner el data de mayor a menor para que ponga los nuevos arriba */
/* ,,, normalizacion de todo el proyecto */
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
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const ArtworkShade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    transparent,
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s;

  @media (max-width: 1024px) {
    opacity: 1;
  }
`;

const ArtworkTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: #f5f5f5;
  margin-bottom: 0.25rem;
`;

const ArtworkMeta = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c9a962;
`;

const ArtworkContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s;

  @media (max-width: 1024px) {
    transform: translateY(0);
    transition: none;
  }
`;

const ArtworkCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #111111;
  cursor: pointer;

  @media (min-width: 1025px) {
    &:hover ${ArtworkImage} {
      transform: scale(1.05);
    }

    &:hover ${ArtworkShade} {
      opacity: 1;
    }

    &:hover ${ArtworkContent} {
      transform: translateY(0);
    }
  }
`;

const LoadMoreBtn = styled.a`
  margin-top: 2.5rem;
  cursor: pointer;
  color: #888;
  transition: color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #c9a962;
  }
  span {
    font-size: 0.75rem;
    letter-spacing: 0.3em;
  }
`;

const LoadMoreIcon = styled(ChevronDown)`
  width: 1.25rem;
  height: 1.25rem;
  animation: bounce 1.5s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }
`;

export function Gallery({ filters }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxImage, setLightboxImage] = useState(null);

  const allFiltered = useMemo(() => {
    if (filters.some((el) => el.name === "all" && el.active)) {
      return IMAGES;
    }
    return IMAGES.filter((artwork) =>
      filters.some((el) => el.active && artwork.category.includes(el.name)),
    );
  }, [filters]);

  const filtered = allFiltered.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [filters]);

  const openLightbox = (artwork) => {
    setLightboxImage(artwork);
    document.documentElement.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.documentElement.style.overflow = "auto";
  };

  return (
    <Section id="work">
      <Container>
        {filtered.length == 0 && (
          <NoItemsMsg>This path reveals nothing… yet.</NoItemsMsg>
        )}
        <GalleryGrid>
          {filtered.map((artwork) => (
            <ArtworkCard key={artwork.id} onClick={() => openLightbox(artwork)}>
              <ArtworkImage src={artwork.image} alt={artwork.title} />
              <ArtworkShade />
              <ArtworkContent>
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <ArtworkMeta>{artwork.medium}</ArtworkMeta>
              </ArtworkContent>
            </ArtworkCard>
          ))}
        </GalleryGrid>
      </Container>
      {visibleCount < allFiltered.length && filtered.length !== 0 && (
        <LoadMoreBtn onClick={() => setVisibleCount(visibleCount + 4)}>
          <span>LOAD MORE</span>
          <LoadMoreIcon />
        </LoadMoreBtn>
      )}
      {lightboxImage && (
        <Lightbox artwork={lightboxImage} onClose={closeLightbox} />
      )}
    </Section>
  );
}
