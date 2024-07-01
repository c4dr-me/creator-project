import React from 'react';
import styled from 'styled-components';

// Styled components
const BenefitPageContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BenefitItem = styled.li`
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Benifit = () => {
  return (
    <BenefitPageContainer>
      <Title>Benefits of Our Service</Title>
      <BenefitList>
        <BenefitItem>24/7 Customer Support</BenefitItem>
        <BenefitItem>High-Quality Products</BenefitItem>
        <BenefitItem>Fast and Reliable Delivery</BenefitItem>
        <BenefitItem>Easy Return Policy</BenefitItem>
      </BenefitList>
    </BenefitPageContainer>
  );
};

export default Benifit;