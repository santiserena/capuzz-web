import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Lightbox } from "./Lightbox";
import { ChevronDown } from "lucide-react";

/* ,,, ver si meter en un json: */
const artworks = [
  {
    id: 1,
    title: "Tribute to Akira Toriyama",
    image: "/images/p1.png",
    /* ,,, tecnica usada: */
    medium: "pencil",
    category: ["character"],
  },
  {
    id: 2,
    title: "Tifa Lockhart",
    image: "/images/p5.png",
    medium: "watercolor",
    category: ["character"],
  },
  {
    id: 3,
    title: "Frozen Discovery",
    image: "/images/p6.png",
    medium: "digital",
    category: ["environment", "watercolor"],
  },
  {
    id: 4,
    title: "Among Us - Comic Cover",
    image: "/images/p7.png",
    medium: "pencil",
    category: ["cover"],
  },
  {
    id: 5,
    title: "Follow - Study",
    image: "/images/p10.png",
    medium: "pencil",
    category: ["character"],
  },
  {
    id: 6,
    title: "Tribute to Akira Toriyama",
    image: "/images/p1.png",
    medium: "watercolor",
    category: ["character"],
  },
  {
    id: 7,
    title: "Tifa Lockhart",
    image: "/images/p5.png",
    medium: "watercolor",
    category: ["character"],
  },
  {
    id: 8,
    title: "Frozen Discovery",
    image: "/images/p6.png",
    medium: "digital",
    category: ["environment", "watercolor"],
  },
  {
    id: 9,
    title: "Among Us - Comic Cover",
    image: "/images/p7.png",
    medium: "digital",
    category: ["cover"],
  },
  {
    id: 10,
    title: "Follow - Study",
    image: "/images/p10.png",
    medium: "digital",
    category: ["character"],
  },
];

const Section = styled.section`
  padding: 4rem 1.5rem;
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
`;

const ArtworkCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #111111;
  cursor: pointer;

  &:hover ${ArtworkImage} {
    transform: scale(1.05);
  }

  &:hover ${ArtworkShade} {
    opacity: 1;
  }

  &:hover ${ArtworkContent} {
    transform: translateY(0);
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
      return artworks;
    }
    return artworks.filter((artwork) =>
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
                <ArtworkMeta>
                  {artwork.medium}
                </ArtworkMeta>
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
