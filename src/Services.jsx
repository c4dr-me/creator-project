import React from "react";
import { FaVideo } from "react-icons/fa6";
import { LuGalleryThumbnails } from "react-icons/lu";
import { CgMediaPodcast } from "react-icons/cg";
import { MdContentCopy } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import logosData from "./data";
import {useNavigate} from "react-router-dom";

const StyledService = styled.div`
  padding: 10rem 0;
  max-width: 1075px;
  align-items: center;
  margin: auto;
  width: 100%;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
 
  .left-ctn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    h2 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 3rem;
      line-height: 50px;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    ul > li {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;
      display: flex;
      column-gap: 4px;
    }

    .btn {
      background-color: #0e58aeff;
      border: 0.1rem solid rgb(98 84 243);
      color: #fff;
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
  }

  .right-ctn {
    display: flex;
    gap: 4rem;

    .right1,
    .right2 {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
    .right2 {
      margin-top: 6rem;
    }
  }

  .service-card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    background-color: #0e58aeff;
    border-radius: 36px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    color: #fff;
    max-width: 306px;
    width: 100%;
    &:hover {
      transform: scale(1.05);
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    padding: 15px 0;
  }
  p {
    font-size: 14px;
    opacity: 0.8;
  }

  .video-editing {
    background-color: #448c7419;
    &:hover {
      box-shadow: 8px 8px 0px 0px rgb(68, 140, 116);
    }
  }

  .social-media {
    background-color: #3f7fca19;
    &:hover {
      box-shadow: 8px 8px 0px 0px rgb(63, 127, 202);
    }
  }

  .thumbnail {
    background-color: #edcb5019;
    &:hover {
      box-shadow: 8px 8px 0px 0px rgb(237, 203, 80);
    }
  }

  .consultation {
    background-color: #ed505019;
    &:hover {
      box-shadow: 8px 8px 0px 0px rgb(237, 80, 80);
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
      display: flex !important;
      flex-direction: column !important;
      
      .left-ctn{
      text-align: center;
      }
      .right-ctn{
      flex-direction: column;
      gap: 1rem !important;
      }
      
  }
`;

const DiscoverService = styled.div`
  max-width: 1300px;
  background-color: #0e58ae19;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 520px;
  padding:50px;
  border-radius: 36px;
  gap: 112px;
  display: flex;
  .discover-logo{
  max-width: 560px;
  gap: 30px;
  height: fit-content;
  .logo{
  width: 170px;
  height: 80px;
  padding: 12px;
  background-color: #121519;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  }
  .discover-desc{
  text-align: left;
  max-width: 442px;
  h2{
  font-size: 40px;
      font-weight: 600;
      margin-bottom: 3rem;
      line-height: 50px;
      }
      p{
      font-size: 16px;
      opacity: 0.8;
      }
  }
        @media (max-width: ${({ theme }) => theme.media.mobile}){
      flex-direction: column !important;
      border-radius: 0 !important;
      .logo{
      width: 110px !important;
      height: 55px !important;
      }
  }
`;

const Services = () => {
  const navigate = useNavigate();
  const handleDiscover = () => {
    navigate("/hire-me");
  }
  return (
    <>
      <StyledService className="service-ctn grid" id="services">
        <div className="left-ctn">
          <h2>Our Services</h2>
          <IconContext.Provider value={{ color: "#0e58aeff", size: "16px" }}>
            <ul>
              <li>
                <FaArrowRight />
                Hire Top-Notch Freelance Creators
              </li>
              <li>
                <FaArrowRight />
                High-Quality Thumbnail Designs
              </li>
              <li>
                <FaArrowRight />
                Professional Video Edits
              </li>
            </ul>
          </IconContext.Provider>
          <button className="btn" onClick={handleDiscover}>Discover Services</button>
        </div>
        <div className="right-ctn">
          <div className="right1">
            <div className="service-card-item video-editing">
              <FaVideo size={34} color="#448C74" />
              <h3>Video Editing</h3>
              <p>Explore our diverse range of creative services.</p>
            </div>
            <div className="service-card-item social-media">
              <CgMediaPodcast size={34} color="#3F7FCA" />
              <h3>Social Media</h3>
              <p>Expert thumbnail artists perfect your image.</p>
            </div>
          </div>
          <div className="right2">
            <div className="service-card-item thumbnail">
              <LuGalleryThumbnails size={34} color="#EDCB50" />
              <h3>Thumbnail Creation</h3>
              <p>Engaging thumbnail designs to boost views.</p>
            </div>
            <div className="service-card-item consultation">
              <MdContentCopy size={34} color="#ED5050" />
              <h3>Content Consultation</h3>
              <p>Expert thumbnail artists perfect your image.</p>
            </div>
          </div>
        </div>
      </StyledService>
      <DiscoverService>
        <div className="discover-logo grid grid-three-column">
          {logosData.map((logo, index) => (
            <div
              key={index}
              className="logo"
              dangerouslySetInnerHTML={{ __html: logo.logoSrc }}
            />
          ))}
        </div>
        <div className="discover-desc">
          <h2>Driving Innovation In Digital Creativity</h2>
          <p>
            Utiliza powerful tools to streamline your creative projects and
            connect with talented freelancers
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore ipsum aspernatur excepturi ipsa quos? Quia possimus asperiores reprehenderit, dolorum iure voluptatem aut hic perspiciatis repellendus maiores suscipit quis nesciunt.</p>
        </div>
      </DiscoverService>
    </>
  );
};

export default Services;
