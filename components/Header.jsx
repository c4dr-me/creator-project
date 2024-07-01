import React from "react";

import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
        <h1 className="collab">Collab</h1>
      <Navbar />
      <button className="btn">Get Started For Free</button>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
  .btn {
    background-color: #0e58aeff;
    border: 0.1rem solid rgb(98 84 243);
    color: #ffffffff;
    font-size: 1rem;
    min-width: 8rem;
    min-height: 3.5rem;
    border-radius: 1rem;
    padding: 10px 28px;

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
