import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
        <li>
            {location.pathname === "/" ? (
              <ScrollLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="home"
                smooth={true}
                duration={500}
                offset={0}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="services"
                smooth={true}
                duration={500}
                offset={5}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Services
              </ScrollLink>
            ) : (
              <RouterLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Services
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="benefit"
                smooth={true}
                duration={500}
                offset={-40}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Benefit
              </ScrollLink>
            ) : (
              <RouterLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Benefit
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="review"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Review
              </ScrollLink>
            ) : (
              <RouterLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Review
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Contact
              </ScrollLink>
            ) : (
              <RouterLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Contact
              </RouterLink>
            )}
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.3s linear;
    cursor: pointer;

    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.active};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.white};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    /* hide the original nav menu  */
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #0e58aeff;
      font-size: 2rem;

      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.active};
          }
        }
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.white};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;

export default Navbar;
