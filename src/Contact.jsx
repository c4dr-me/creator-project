import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
background-image: linear-gradient(to top, #0e58ae19 60%, #ffffff00 50%); 
min-height: 100vh;
`

const ContactStyles = styled.div`
  max-width: 1300px;
  height: auto;
  background-color: #0e58ae;
  margin:  15rem auto 0 auto;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  gap: 2rem;
  color: white;
  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
  }
  .text-area {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;

    .forms {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: 2rem;
      .column {
        display: flex;
        gap: 1rem;
        flex-direction: column;

        label {
          flex: 1;
          font-size: 16px;
          color: #fff;
          line-height: 26px;
          font-weight: 500;
        }

        input {
          flex: 2;
          padding: 1rem;
          border-radius: 18px;
          border: 1px solid #cccccc;
          color: #fff;
          background-color: #ffffff00;
        }
      }

      textarea {
        padding: 1rem;
        font-size: 1.5rem;
        border-radius: 8px;
        border: none;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
      }
    }
      input:focus, textarea:focus {
  outline: 1px solid; 
}
    button[type="submit"] {
      margin-top: 2rem;
      background-color: #fff;
      color: #0e58ae;
      &:hover{
        background-color: #0e58ae;
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }

  @media (max-width: 768px) {
    form {
      .forms {
        flex-direction: column;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
    <ContactStyles id="contact">
      <h2>Connect With Us Now</h2>
      <form action="https://formspree.io/f/mzzpbaje" method="POST">
        <div className="forms">
          <div className="column">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="column">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company"
            />
          </div>

          <div className="column">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="column">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone"
            />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="help">How can we help?</label>
          <textarea
            id="help"
            name="help"
            placeholder="How can we help?"
            rows="4"
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Contact Us
        </button>
      </form>
      </ContactStyles>
      </ContactSection>
  );
};

export default Contact;
