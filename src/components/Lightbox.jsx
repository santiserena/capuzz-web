import styled from "styled-components"
import { X } from "lucide-react"

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  display: block;
  max-width: 85vw;
  max-height: 85vh;
  object-fit: contain;
  margin-bottom: 3em;
`

const Info = styled.div`
  position: fixed;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
  z-index: 101;

  > span:first-child {
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #c9a962;
  }

  > span:last-child {
    font-family: var(--font-serif);
    font-size: 1.75rem;
    color: #f5f5f5;
    font-weight: 400;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0rem;
  }
`

const CloseButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #f5f5f5;
  padding: 0.5rem;
  transition: color 0.3s;
  z-index: 101;
  &:hover { color: #c9a962; }
`

export function Lightbox({ artwork, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <CloseButton onClick={onClose}><X size={32} /></CloseButton>
      {/* ,,, ver q es stopPropagation */}
      <Image src={artwork.image} alt={artwork.title} onClick={(e) => e.stopPropagation()} />
      <Info onClick={(e) => e.stopPropagation()}>
        <span>{artwork.medium} / {artwork.category}</span>
        <span>{artwork.title}</span>
      </Info>
    </Overlay>
  )
}
