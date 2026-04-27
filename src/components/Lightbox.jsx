import styled from "styled-components";
import { X } from "lucide-react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  max-width: 85vw;
  max-height: 85vh;
  object-fit: contain;
  margin-bottom: 3em;
  @media (max-width: 768px) {
    max-height: 75vh;
  }
`;

const Info = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
  z-index: 101;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0rem;
  }
`;

const TitleText = styled.div`
  font-family: var(--font-serif);
  font-size: 1.75rem;
  color: #f5f5f5;
  font-weight: 400;
`;

const MediumText = styled.div`
  font-size: 0.95rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c9a962;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #f5f5f5;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s;
  z-index: 101;
  &:hover {
    color: #c9a962;
  }
`;

export function Lightbox({ artwork, onClose }) {
  return (
    <Overlay>
      <CloseButton onClick={onClose}>
        <X />
      </CloseButton>
      <Image src={artwork.image} alt={artwork.title} />
      <Info>
        <TitleText>{artwork.title}</TitleText>
        <MediumText>{artwork.medium}</MediumText>
      </Info>
    </Overlay>
  );
}
