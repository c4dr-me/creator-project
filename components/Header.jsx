import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <MainHeader isScrolled={isScrolled}>
      <h1 className="collab">Collab</h1>
      <Navbar />
      <button className="btn">Get Started For Free</button>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
  padding: 20px;
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? "#000" : theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 30px;
  }
  .btn {
    background-color: #0e58aeff;
    border: 0.1rem solid rgb(98 84 243);
    color: #ffffffff;
    font-size: 1.5rem;
    font-weight: 600;
    min-width: 8rem;
    min-height: 3.5rem;
    border-radius: 1rem;
    padding: 8px 24px;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      &.btn {
        display: none;
      }
    }
  }
`;

export default Header;
