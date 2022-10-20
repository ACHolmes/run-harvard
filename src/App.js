// For routing later
// import {
//   Switch,
//   Route,
//   useParams
// } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from "./containers/LandingPage";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
      </Router>
      </ThemeProvider>
      
    </>
  )
}

export default App;
