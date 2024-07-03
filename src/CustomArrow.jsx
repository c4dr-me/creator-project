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
