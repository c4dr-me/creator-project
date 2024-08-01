// CustomArrows.js
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  &.slick-prev {
    left: 130px;
  }

  &.slick-next {
    right: 130px;
  }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
    &.slick-prev {
    left: 25px !important;
    }
    &.slick-next{
    right: 25px !important;
    }
}
`;

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowContainer
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ></ArrowContainer>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowContainer
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ></ArrowContainer>
  );
};
