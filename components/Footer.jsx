import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterStyle = styled.footer`
  background-color: inherit;
  color: #fff;
  max-width: 100vw;
  padding: 50px 16px 50px 16px;
  footer {
    display: flex;
    max-width: 1300px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  .social-icons {
    display: flex;
    gap: 1rem;
    transition: transform 0.3s ease-in-out;
    a{
    &:hover{
    transform: scale(1.2);
    }
    }
  }
    .company-copyright{
      margin-top: 1rem;
      font-size: 1.5rem;
      opacity: 0.8;
    }
  .company-footer {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    flex-direction: column;
  }
  .company-footer-links {
    display: flex;
    justify-content: space-between;
    gap: 6.25rem;
    .left-links,
    .right-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 200px;
      width: 100%;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="company-footer">
          <div className="company-footer-logo">
            <h1>Collab</h1>
          </div>
          <div className="company-footer-info">
            <p>Join us and explore endless creative opportunities.</p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} />
            </a>
          </div>
          <div className="company-copyright">
            © All rights reserved. By Collab
          </div>
        </div>
        <div className="company-footer-links">
          <div className="left-links">
            <a href="">Features</a>
            <a href="">How it works</a>
            <a href="">Reviews</a>
            <a href="">FAQ</a>
          </div>
          <div className="right-links">
            <a href="">Help Center</a>
            <a href="">Terms of Services</a>
            <a href="">Legal</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
