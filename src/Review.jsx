import React from "react";
import styled from "styled-components";

// Styled component for the review container
const ReviewContainer = styled.div`
  border-radius: 16px;
  background-color: #0e58ae19;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 370px;
  background-image: url(https://res.cloudinary.com/dbyioi2qq/q_auto/v1701785444/static/vectorpng_1701785202_34264.png),
    url(https://res.cloudinary.com/dbyioi2qq/q_auto/v1701785456/static/vecrorpng_1701785215_17581.png);
  background-position: 0% 0%, 100% 100%;
  background-repeat: no-repeat no-repeat, no-repeat no-repeat;
  .review-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    align-items: center;
    max-width: 1075px;
    height: auto;
    .userdata {
      max-width: 250px;
      width: 100%;
      img {
        border-radius: 50%;
      }
      h2 {
        font-size: 30px;
        font-weight: 600;
        line-height: 50px;
      }
      p {
        color: #fff;
        font-size: 16px;
        opacity: 0.8;
      }
    }
  }
`;

const Review = ({ user }) => {
  return (
    <ReviewContainer id="benifit">
      <div className="review-content">
        <div className="userdata">
          <img
            src={user.image}
            width={86}
            height={86}
            alt=""
          />
          <h2>{user.name}</h2>
          <p>{user.role}</p>
        </div>
        <div className="msg">
          <p>
            {user.message}
          </p>
        </div>
      </div>
    </ReviewContainer>
  );
};

export default Review;
