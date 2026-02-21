import styled from "styled-components"
import { X } from "lucide-react"

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  max-height: 90vh;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  object-fit: contain;
`

const Info = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`

const Category = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c9a962;
  margin-bottom: 0.5rem;
`

const Title = styled.h3`
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

export function Lightbox({ artwork, onClose }) {
    if (!artwork) return null

    return (
        <Overlay onClick={onClose}>
            <CloseButton onClick={onClose}>
                <X size={32} />
            </CloseButton>
            <Content onClick={(e) => e.stopPropagation()}>
                <Image
                    src={artwork.image}
                    alt={artwork.title}
                />
                <Info>
                    <Category>
                        {artwork.medium} / {artwork.category}
                    </Category>
                    <Title>{artwork.title}</Title>
                </Info>
            </Content>
        </Overlay>
    )
}
