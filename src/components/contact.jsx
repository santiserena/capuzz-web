import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react"
import styled from "styled-components"

const contactMethods = [
  {
    icon: Instagram,
    title: "Instagram",
    handle: "@capuzz.art",
    description: "Follow my latest work",
    href: "https://instagram.com/capuzz.art",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    handle: "Message me",
    description: "Quick responses",
    href: "https://wa.me/",
  },
  {
    icon: Mail,
    title: "Email",
    handle: "hello@capuzz.art",
    description: "For commissions",
    href: "mailto:hello@capuzz.art",
  },
]

const Section = styled.section`
  padding: 6rem 1.5rem;
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1.5rem;
  font-weight: 400;
`

const TitleWhite = styled.span`
  color: #f5f5f5;
`

const TitleGold = styled.span`
  color: #c9a962;
`

const Description = styled.p`
  color: #888888;
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.7;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ContactCard = styled.a`
  display: block;
  padding: 1.5rem;
  border: 1px solid #2a2a2a;
  text-decoration: none;
  transition: border-color 0.3s;

  &:hover {
    border-color: #c9a962;
  }

  &:hover .icon-wrapper {
    border-color: #c9a962;
  }

  &:hover .icon,
  &:hover .arrow {
    color: #c9a962;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const IconWrapper = styled.div`
  padding: 0.75rem;
  border: 1px solid #2a2a2a;
  transition: border-color 0.3s;
`

const IconStyled = styled.div`
  color: #f5f5f5;
  transition: color 0.3s;
`

const ArrowStyled = styled(ArrowUpRight)`
  color: #888888;
  transition: color 0.3s;
`

const CardTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: #f5f5f5;
  margin-bottom: 0.25rem;
`

const CardHandle = styled.p`
  color: #c9a962;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`

const CardDescription = styled.p`
  color: #888888;
  font-size: 0.875rem;
`

const DirectCTA = styled.div`
  text-align: center;
`

const CTALabel = styled.p`
  color: #888888;
  margin-bottom: 1rem;
`

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: 0.1em;
  color: #f5f5f5;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #c9a962;
  }
`

export function Contact() {
  return (
    <Section id="contact">

      <Container>
        <HeaderWrapper>
          <SectionLabel>Get in Touch</SectionLabel>
          <SectionTitle>
            <TitleWhite>{"Let's Create"}</TitleWhite>
            <br />
            <TitleGold>Something Epic</TitleGold>
          </SectionTitle>
          <Description>
            Available for commissions, collaborations, and creative projects.
            <br />
            {"Let's bring your vision to life."}
          </Description>
        </HeaderWrapper>

        <CardsGrid>
          {contactMethods.map((method) => (
            <ContactCard
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader>
                <IconWrapper className="icon-wrapper">
                  <IconStyled className="icon">
                    <method.icon size={20} />
                  </IconStyled>
                </IconWrapper>
                <ArrowStyled className="arrow" size={20} />
              </CardHeader>
              <CardTitle>{method.title}</CardTitle>
              <CardHandle>{method.handle}</CardHandle>
              <CardDescription>{method.description}</CardDescription>
            </ContactCard>
          ))}
        </CardsGrid>

        <DirectCTA>
          <CTALabel>Prefer a direct conversation?</CTALabel>
          <CTALink href="mailto:hello@capuzz.art">
            HELLO@CAPUZZ.ART
            <ArrowUpRight size={24} />
          </CTALink>
        </DirectCTA>
      </Container>
    </Section>
  )
}
