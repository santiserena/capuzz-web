import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 2rem 1.5rem;
  border-top: 1px solid #2a2a2a;
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Logo = styled.a`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  letter-spacing: 0.3em;
  color: #c9a962;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: rgba(201, 169, 98, 0.8);
  }
`

const Copyright = styled.p`
  color: #888888;
  font-size: 0.875rem;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const NavLink = styled.a`
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: #888888;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: #c9a962;
  }
`

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo href="#">CAPUZZ</Logo>
        <Copyright>{new Date().getFullYear()} All rights reserved.</Copyright>
        <NavLinks>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Container>
    </FooterWrapper>
  )
}
