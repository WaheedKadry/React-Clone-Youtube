import React, { useState } from "react";
import s, { ThemeProvider } from "styled-components"; //styled
// let s = styled

// import "./App.css";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";
import Video from "./pages/Video.jsx";
import Home from "./pages/Home.jsx";
import { darkTheme, lightTheme } from "./utils/Theme";
import { Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";

let Container = s.div`
  display: flex;
  color: ${({ theme }) => theme.text};
`;
let Main = s.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
  
`;
let Wrapper = s.div`
padding: 22px 96px;

`;

function App() {
  let [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Outlet />
                    </>
                  }
                >
                  <Route path="" element={<Home />} />
                  <Route path="signIn" element={<SignIn />} />
                  <Route
                    path="video"
                    element={
                      <>
                        <Outlet />
                      </>
                    }
                  >
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
