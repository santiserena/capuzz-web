import { useState } from "react"
import styled from "styled-components"
import { Menu, X } from "lucide-react"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(10, 10, 10, 0.95);
  border-bottom: 1px solid #2a2a2a;
`

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  letter-spacing: 0.2em;
  color: #c9a962;
`

const MenuBtn = styled.button`
  display: none;
  color: white;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`

const NavLinks = styled.div`
  display: flex; gap: 2rem;
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute; top: 100%; left: 0; right: 0;
    background: #0a0a0a;
    padding: 2rem;
    border-bottom: 1px solid #2a2a2a;
  }
`

const NavLink = styled.a`
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  color: white;
  &:hover {
    color: #c9a962;
  }
`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Nav>
        <Logo href="#">CAPUZZ</Logo>
        <MenuBtn onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </MenuBtn>
        <NavLinks $isOpen={isOpen}>
          <NavLink href="#work" onClick={() => setIsOpen(false)}>WORK</NavLink>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  )
}
