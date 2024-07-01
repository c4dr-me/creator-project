import {React, useState} from 'react';
import styled from 'styled-components';

// Styled component for the review container
const ReviewContainer = styled.div`
  background-color: #f0f0f0; // Example background color
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Review = () => {
    const [reviews, setReviews] = useState([
        { id: 1, title: 'Great Product', content: 'This product has changed my life!', rating: 5 },
        { id: 2, title: 'Good, but...', content: 'I liked it, but I wish it was cheaper.', rating: 4 },
        { id: 3, title: 'Not worth it', content: 'Did not meet my expectations at all.', rating: 2 },
      ]);
  return (
    <ReviewContainer id='review'><h2>Customer Reviews</h2>
    <div className="reviews-container">
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <h3>{review.title}</h3>
          <p>{review.content}</p>
          <p>Rating: {'⭐'.repeat(review.rating)}</p>
        </div>
      ))}
    </div></ReviewContainer>
  );
}

export default Review;