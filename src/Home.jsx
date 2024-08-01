import React, { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import {
  FaRegLightbulb,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import styled, {css} from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0e58ae;
  color: #ffffff ;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  visibility: visible; 
  opacity: 1;
  transition: opacity 0.3s, visibility 0.3s;
`;
const hoverEffect = css`
  &:hover ${Tooltip} {
    visibility: none;
    opacity: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 120vh;
  padding-top: 4rem;
  background-color: #0e58ae19;
  .main-content {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1300px;
    margin-top: 8rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
  .main-content{
  display: flex;
  flex-direction: column;
  .illustration{
  background-position: 350px 54%, 99% 52%, 5% 91%, 15px 454px ! Important;
  background-size: 12% auto, 30% auto, 52% auto, 25% auto ! Important;
  }
  .content p{
  text-align: center;
  font-size: 3.5rem !Important;
  }
  .icon{
  flex-direction: column;
  align-items: center;
  gap: 6rem !important;
  }
  .mobileDisplay{
  left: 13% !important;
  }
  .btns{
  margin-bottom: 5rem;
  justify-content: center;
  }
  }
    .mobileFrame{
  background-position: center center !Important;
  }
  }

  .illustration {
    max-width: 590px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    position: relative;
    background-image: url('./illustrationpng_1.png'),
      url('./illustrationpng_2.png'),
      url('./illustrationpng_3.png'),
      url('./illustrationpng_4.png');
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 20% auto, 40% auto, 50% auto, 30% auto;
    background-position: 400px 50%, 95% 50%, 0% 100%, 50px 425px;
    background-attachment: scroll, scroll, scroll, scroll;
  }

  .mobileFrame {
    background-image: url("./frame.png");
    background-size: cover;
    background-position: right center;
    max-width: 355px;
    min-height: 630px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: relative;
  }

  .mobileDisplay {
    background-image: url('./display.jpg');
    width: 75%;
    height: 92%;
    background-size: cover;
    top: 2%;
    left: 4%;
    position: absolute;
    border-radius: 3rem;
    background-position: 75%;
    ${hoverEffect}
  }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;

    p {
      font-size: 6.5em;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
    }

    .icon {
      display: flex;
      align-items: flex-start;
      gap: 10rem;

      .icon-desc {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        text-align: left;

        span {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.white};
          opacity: 0.8;
        }

        div {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.helper};
        }
      }
        @media (max-width: ${({ theme }) => theme.media.mobile}){
          .service-ctn{
          display: flex;
          flex-direction: column;
          .left-ctn{
          text-align: center;
          }
          } 
        }
    }

    .btns {
      display: flex;
      gap: 1rem;
    }

    .btn {
      background-color: #0e58aeff;
      border: 0.1rem solid rgb(98 84 243);
      color: #ffffffff;
      font-size: 1.4rem;
      min-width: 8rem;
      font-weight: 600;
      min-height: 3.5rem;
      border-radius: 1rem;
      padding: 10px 28px;
      cursor: pointer;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }

    .join {
      display: flex;
      column-gap: 8px;
      justify-content: center;
      align-items: center;
      min-width: 20px;
      min-height: 20px;
      padding: 8px 16px;
      color: #0e58aeff;
      background-color: transparent;
      font-weight: 900;
      border: none;
      border-radius: 1rem;
      font-size: 1.4rem;

      &:hover {
        border: 1px solid #0e58aeff;
        background-color: none;
      }
    }
  }

`;


const Home = () => {
  const mobileDisplayRef = useRef(null);

  useEffect(() => {
    const mobileDisplay = mobileDisplayRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = mobileDisplay.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      mobileDisplay.style.backgroundPosition = `${x}% ${y}%`;
    };

    mobileDisplay.addEventListener("mousemove", handleMouseMove);

    return () => {
      mobileDisplay.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MainContent id="home">
      <div className="main-content grid">
        <div className="illustration">
          <div className="mobileFrame">
            <div className="mobileDisplay" ref={mobileDisplayRef}>
            <Tooltip>Mouse over to explore</Tooltip>
            </div>
          </div>
        </div>
        <div className="content">
          <p>Empower Content Creators to Succeed</p>
          <IconContext.Provider value={{ color: "#fff", size: "36px" }}>
            <div className="icon">
              <div className="icon-desc">
                <FaRegLightbulb />
                <span>Find Perfect Freelance Partner</span>
              </div>
              <div className="icon-desc">
                <FaRocket />
                <span>Elevate Your Online Presence</span>
              </div>
              <div className="icon-desc">
                <FaCheckCircle />
                <span>Transform Ideas Into Reality</span>
              </div>
            </div>
          </IconContext.Provider>
          <div className="btns">
            <button className="signup btn">Sign Up</button>
            <IconContext.Provider value={{ color: "#0e58aeff", size: "10px" }}>
              <button className="join">
                Join today
                <FaArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Home;
