import { useState } from "react"
import styled from "styled-components"
import { Gallery } from './Gallery'

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
/* ,,, en dispositivos pequeños, hacer que cada btn ocupe la mitad de la pantalla */
export function GalleryHeader() {
  const [filterBtnsArray, setFilterBtnsArray] = useState([
    { name: "all", active: true },
    { name: "watercolor", active: false },
    { name: "ink", active: false },
    { name: "cover", active: false },
    { name: "digital", active: false },
    { name: "comic", active: false },
    { name: "environment", active: false },
    { name: "character", active: false },
  ])

  const setFilters = (filter) => {
    const arrayUpdated = filterBtnsArray.map((item) => {
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
    setFilterBtnsArray(finalArray)
  }

  return (
    <Section id="work">
      <Container>
        <SectionLabel>Gallery</SectionLabel>
        <SectionTitle>
          Selected works
        </SectionTitle>
        <FiltersWrapper>
          {filterBtnsArray.map((filter) => (
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
      </Container>
    </Section>
  )
}