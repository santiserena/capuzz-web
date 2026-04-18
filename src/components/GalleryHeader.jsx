import { useState } from "react";
import styled from "styled-components";
import { Gallery } from "./Gallery";
import { LayoutGrid } from "lucide-react";
import { FILTERS } from "../lib/data";

const Section = styled.section`
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4.5rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  color: #c9a962;
  font-size: 0.875rem;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 4rem);
  letter-spacing: 0.05em;
  color: #f5f5f5;
  font-weight: 400;
  margin-bottom: 4rem;
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid ${(props) => (props.$active ? "#c9a962" : "#2a2a2a")};
  background-color: ${(props) => (props.$active ? "#c9a962" : "transparent")};
  color: ${(props) => (props.$active ? "#0a0a0a" : "#888888")};
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;
  @media (max-width: 935px) {
    flex: 0 0 47%;
  }
  @media (max-width: 364px) {
    flex: 0 0 96%;
  }

  @media (hover: hover) {
    &:hover {
      border-color: #c9a962;
      color: ${(props) => (props.$active ? "#0a0a0a" : "#c9a962")};
    }
  }
`;

const FilterButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

export function GalleryHeader() {
  const [filterBtnsArray, setFilterBtnsArray] = useState(FILTERS);

  const setFilters = (filter) => {
    const arrayUpdated = filterBtnsArray.map((item) => {
      // If "all" was clicked, deactivate the others
      if (filter === "all") {
        return { ...item, active: item.name === "all" };
      }
      // If clicked on another filter, deactivate "all":
      if (item.name === "all") {
        return { ...item, active: false };
      }
      // Fiter toggle:
      if (item.name === filter) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    // If no filter is active, activate "all":
    const hasActiveFilters = arrayUpdated.some(
      (item) => item.active && item.name !== "all",
    );
    const finalArray = hasActiveFilters
      ? arrayUpdated
      : arrayUpdated.map((item) => ({ ...item, active: item.name === "all" }));
    setFilterBtnsArray(finalArray);
  };

  return (
    <Section id="work">
      <Container>
        <SectionLabel>Gallery</SectionLabel>
        <SectionTitle>Selected works</SectionTitle>
        <FiltersWrapper>
          {filterBtnsArray.map((filter) => (
            <FilterButton
              key={filter.name}
              $active={filter.active}
              onClick={() => setFilters(filter.name)}
            >
              <FilterButtonContent>
                {filter.name === "all" && <LayoutGrid size={14} />}
                {filter.name}
              </FilterButtonContent>
            </FilterButton>
          ))}
        </FiltersWrapper>
        <Gallery filters={filterBtnsArray} />
      </Container>
    </Section>
  );
}