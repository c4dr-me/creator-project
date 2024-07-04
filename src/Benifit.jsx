import { React, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import {
  FaRegLightbulb,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import logosData from "./data";

const ReviewTopContainer = styled.div`
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  gap: 5rem;
  
  h2 {
    font-size: 40px;
    font-weight: 600;
    padding-top: 4rem;
    line-height: 50px;
  }
    h3{
    color: #fff;
     font-size: 24px;
    font-weight: 600;
    padding: 15px 0;
    }
    p{
    opacity: 0.8;
    }
  .review-icon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }
    .icon-1, .icon-2, .icon-3, .icon-4{
    max-width: 306px;
    width: 100%;
    padding: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }
`;

const ReviewMiddleContainer = styled.div`
display: flex;
width: 100%;
height: auto;
padding-top: 10rem;

.image-container{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 645px;
width: 100%;
background-image: url(./benifitpng_1.png);
background-position: 850px 0%;
background-size: 25% auto;
background-repeat: no-repeat no-repeat;
img{
border-radius: 36px;
}
.left-img{
z-index: 150;
height: 645px;
max-width: 590px;
background-image: url(./benifitpng_2.png);
background-position: 500px 0%;
background-size: 25% auto;
background-repeat: no-repeat no-repeat;
}
.right-img{
max-width: 550px;
height: 420px;
max-height: 600px;
width: 100%;
}
.left-img img{
object-fit: cover;
width: 100%;
height: 100%;
rotate: -5deg;
}
.right-img img{
object-fit: cover;
width: 100%;
height: 100%;
rotate: 10deg;
}
}
`
const ReviewBottomContainer = styled.div`
  max-width: 1300px;
  align-items: center;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15rem;
h2 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 3rem;
      line-height: 50px;
    }

    p{
    color: #fff;
      font-size: 16px;
      opacity: 0.8;
      padding-bottom: 25px;
    }
`
const ReviewService = styled.div`
  align-items: center;
  margin: auto;
  min-height: 520px;
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
`;

const Review = () => {
  return (
    <div id="benifit">
    <ReviewTopContainer >
      <div className="review-heading">
        <h2>Key Benifits</h2>
      </div>
      <IconContext.Provider value={{ color: "#0e58aeff", size: "32px" }}>
        <div className="review-icon">
          <div className="icon-1">
            <FaRegLightbulb />
            <h3>Industry Experts</h3>
            <p>Connect with top experts</p>
          </div>
          <div className="icon-2">
            <FaRocket />
            <h3>Efficient Workflow</h3>
            <p>Adorable and reliable services</p>
          </div>
          <div className="icon-3">
            <FaCheckCircle />
            <h3>Content Appeal</h3>
            <p>Boost your contents appeal</p>
          </div>
          <div className="icon-4">
            <FaArrowRight />
            <h3>Work on time</h3>
            <p>Streamline your creativity</p>
          </div>
        </div>
      </IconContext.Provider>
      </ReviewTopContainer>
      <ReviewMiddleContainer>
        <div className="image-container">
          <span className="left-img">
            <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1701773586/static/imagebob5_1701773345_11715.jpg" alt="" />
          </span>
          <span className="right-img">
            <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1701773742/static/imagecjkf_1701773502_44218.jpg" alt="" />
            </span>
        </div>
      </ReviewMiddleContainer>
      <ReviewBottomContainer>
      <div className="left-ctn">
          <h2>Welcome To Content Creator Collabs</h2>
           <p>Discover diverse creative solutions designed for content creators and freelancers.</p>
          <button className="btn">Join Us</button>
        </div>
        <ReviewService>
        <div className="discover-logo grid grid-three-column">
          {logosData.map((logo, index) => (
            <div
              key={index}
              className="logo"
              dangerouslySetInnerHTML={{ __html: logo.logoSrc }}
            />
          ))}
          </div>
          </ReviewService>
      </ReviewBottomContainer>

      </div>
  );
};

export default Review;
