import { useState } from "react"
import styled from "styled-components"
import { Menu, X } from "lucide-react"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const NavTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    padding-top: 1rem;
    gap: 1rem;
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
        <NavTopRow>
          <Logo href="#">CAPUZZ</Logo>
          <MenuBtn onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </MenuBtn>
        </NavTopRow>
        <NavLinks $isOpen={isOpen}>
          <NavLink href="#work" onClick={() => setIsOpen(false)}>WORK</NavLink>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  )
}