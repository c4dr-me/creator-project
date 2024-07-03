import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Benifit from "./Benifit";
import Contact from "./Contact";
import Review from "./Review";
import Services from "./Services";
import Header from "../components/Header";
import Home from "./Home";
import user from "./userdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrow";


function App() {
  const theme = {
    colors: {
      heading: "#ffffff",
      text: "#ffffffff",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#0e58ae19",
      navbarlist: "#ffffffe5",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Services />
      <Benifit />
      <Slider {...sliderSettings}>
        {user.map((user, index) => (
          <Review key={index} user={user} />
        ))}
      </Slider>
      <Contact />
    </ThemeProvider>
  );
}

export default App;
