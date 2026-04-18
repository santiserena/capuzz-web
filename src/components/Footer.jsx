import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2rem 1.5rem;
  border-top: 1px solid #2a2a2a;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

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
`;

const Copyright = styled.p`
  color: #888888;
  font-size: 0.875rem;
`;

const DeveloperCredit = styled.p`
  color: #555555;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  text-align: center;

  a {
    color: #888888;
    text-decoration: none;
    transition: all 0.3s;

    @media (hover: hover) {
      &:hover {
        color: #c9a962;
      }
    }

    &:active {
      color: rgba(201, 169, 98, 0.7);
    }
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo href="#">CAPUZZ</Logo>
        <div style={{ textAlign: "center" }}>
          <Copyright>
            &copy; {new Date().getFullYear()} All rights reserved.
          </Copyright>
          <DeveloperCredit>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/santiagoserena"
              target="_blank"
              rel="noopener noreferrer"
            >
              Santiago Serena
            </a>
          </DeveloperCredit>
        </div>
      </Container>
    </FooterWrapper>
  );
}
