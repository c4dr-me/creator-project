import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inter, sans-serif;
 }
html {
  font-size: 62.5%;
  overflow-x: none;
}

body {
  overflow-x: none;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    background-color: rgb(18, 21, 25);
}

*::-webkit-scrollbar {
  width: 1.5rem;
}

*::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

*::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  }
   .my-svg path {
  fill: #FFFFFF;
  width: 112px;
  height: 25px;
}

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}
.navbar-list .active {
  color: ${({ theme }) => theme.colors.active};
  text-decoration: none;
  font-weight: inherit;
}
a {
  text-decoration: none;
    font-weight: 500;
    color: #ffffffe5;
    letter-spacing: 0px;
    line-height: 26px;
    padding: 0px 0px 0px 0px;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input[type="text"], 
    input[type="email"],
    input[type="tel"]{
    min-height: 5rem;
    }

    input::placeholder, textarea::placeholder {
    color: #fff; 
    opacity: 0.8;
  }

    textarea{
    padding: 6px 12px 6px 12px;
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
    color: #ffffffff;
    line-height: 26px;
    background-color: #ffffff00;
    border: 1px solid #cccccc;
    border-radius: 18px;
    
    }
    .text-area label{
    font-size: 16px;
    color: #fff;
    line-height: 26px;
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


/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


`;
