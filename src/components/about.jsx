import styled from "styled-components"

const specializations = [
  "Character Design",
  "Environment Art",
  "Creature Design",
  "Comic Art",
  "Ink Illustration",
  "Watercolor",
  "Digital Painting",
  "Concept Art",
]

const Section = styled.section`
  padding: 6rem 1.5rem;
  background-color: rgba(17, 17, 17, 0.5);
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border: 1px solid #2a2a2a;
  overflow: hidden;
`

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StatsOverlay = styled.div`
  position: absolute;
  bottom: -2rem;
  left: -2rem;
  background-color: #0a0a0a;
  border: 1px solid #2a2a2a;
  padding: 1.5rem;
`

const StatsNumber = styled.p`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: #c9a962;
`

const StatsLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #888888;
  text-transform: uppercase;
`

const ContentWrapper = styled.div``

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
  margin-bottom: 2rem;
  font-weight: 400;
`

const TitleWhite = styled.span`
  color: #f5f5f5;
`

const TitleGold = styled.span`
  color: #c9a962;
`

const TextBlock = styled.div`
  margin-bottom: 2.5rem;
`

const Paragraph = styled.p`
  color: #888888;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SpecsLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #f5f5f5;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const SpecsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const SpecTag = styled.span`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  border: 1px solid #2a2a2a;
  color: #888888;
  transition: all 0.3s;

  &:hover {
    border-color: #c9a962;
    color: #c9a962;
  }
`

export function About() {
  return (
    <Section id="about">

      <Container>
        <Grid>
          <ImageWrapper>
            <ImageContainer>
              <AboutImage
                src="/images/p10.png"
                alt="Artist at work"
              />
            </ImageContainer>
            <StatsOverlay>
              <StatsNumber>10+</StatsNumber>
              <StatsLabel>Years Creating</StatsLabel>
            </StatsOverlay>
          </ImageWrapper>

          <ContentWrapper>
            <SectionLabel>About the Artist</SectionLabel>
            <SectionTitle>
              <TitleWhite>Crafting Worlds</TitleWhite>
              <br />
              <TitleGold>Through Art</TitleGold>
            </SectionTitle>

            <TextBlock>
              <Paragraph>
                I am a fantasy illustrator specializing in dark, atmospheric artwork that brings
                mythical worlds and characters to life. My work spans traditional ink and
                watercolor techniques to digital painting, always with a focus on intricate
                detail and emotional depth.
              </Paragraph>
              <Paragraph>
                From epic comic book covers to intimate character portraits, I craft each piece
                with meticulous attention to narrative and atmosphere. Whether it is a two-
                headed giant wielding spiked maces or a scholar lost in ancient tomes, every
                illustration tells a story.
              </Paragraph>
              <Paragraph>
                Currently available for commissions, book covers, game art, and collaborative
                projects that push creative boundaries.
              </Paragraph>
            </TextBlock>

            <div className="specs">
              <SpecsLabel>Specializations</SpecsLabel>
              <SpecsGrid>
                {specializations.map((spec) => (
                  <SpecTag key={spec}>{spec}</SpecTag>
                ))}
              </SpecsGrid>
            </div>
          </ContentWrapper>
        </Grid>
      </Container>
    </Section>
  )
}
