import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Benifit from './Benifit';
import Contact from './Contact';
import Review from './Review';
import Services from './Services'
import Header from '../components/Header'
import Home from './Home'

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
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
        <Header />
      <Home />
      <Services />
      <Review />
      <Benifit />
      <Contact />
    </ThemeProvider>
  )
}

export default App
