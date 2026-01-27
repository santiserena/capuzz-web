'use client';

import { useState, useEffect } from "react"
import styled from "styled-components"



const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s;
  background-color: ${props => props.$scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(8px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid #2a2a2a' : 'none'};
`

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  letter-spacing: 0.3em;
  color: #c9a962;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: rgba(201, 169, 98, 0.8);
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

const NavLink = styled.a`
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  color: rgba(245, 245, 245, 0.8);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #c9a962;
  }
`

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <Nav>
        <Logo href="#">CAPUZZ</Logo>
        <NavLinks>
          <NavLink href="#work">WORK</NavLink>
          <NavLink href="#about">ABOUT</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  )
}
