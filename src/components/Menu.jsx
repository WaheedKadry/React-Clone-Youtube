import React from "react";
import s from "styled-components"; //styled
import { Link } from "react-router-dom";
import logoYoutube from "../images/logo.png";
//npm install @mui/icons-material
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
//
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

let Container = s.div`
  flex: 1;
  width:100%;
  background: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
font-size: 1em;
height:100vh;
overflow-y: auto;
 position:sticky;
top:0px;
font-weight: bold;
`;
let Wrapper = s.div`
padding: 18px 26px;
`;
let Logo = s.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bolder;
margin-bottom: 25px;
`;
let Img = s.img`
height: 25px;
`;
let Item = s.div`
display: flex;
align-items: center;
gap: 0 20px;
cursor: pointer;
padding:5px 0px;
//======
&:hover {
background: ${({ theme }) => theme.signButton};
  
color: #fff;
}

`;

const Login = s.div``;
const Btn = s.button`
  color: ${({ theme }) => theme.signButton};
padding:5px 15px;
background: transparent;
border: 1px solid ${({ theme }) => theme.signButton};
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display:flex;
align-items: center;
gap:5px;
&:hover {
  background: ${({ theme }) => theme.signButton};
font-weight: bold;
    
  color: #fff;
`;
const Hr = s.hr`
margin: 15px 0px;
border:0.5px solid ${({ theme }) => theme.soft};
`;
const Br = s.br`

`;
const Title = s.h2`
font-size: 1em;
font-weight: bold;
color: #aaaaaa;
margin-bottom: 20px;
`;

const Menu = (props) => {
  // console.log(darkMode);
  return (
    <div>
      <Container className="menu">
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={logoYoutube} />
              Waheed Tube
            </Logo>
          </Link>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryIcon />
            Library
          </Item>
          <Item>
            <HistoryIcon />
            History
          </Item>
          <Hr />
          <Login>
            Sign in to like videos,
            <Br />
            comment, and subscribe.
            <Br />
            <Link to="/signIn" style={{ textDecoration: "none" }}>
              <Btn>
                <AccountCircleIcon /> SIGN IN
              </Btn>
            </Link>
          </Login>
          <Hr />
          <Title>BEST OF WAHEED TUBE</Title>
          <Item>
            <LibraryMusicIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballIcon />
            Sports
          </Item>
          <Item>
            <SportsEsportsIcon />
            Gaming
          </Item>
          <Item>
            <MovieCreationIcon />
            Movies
          </Item>
          <Item>
            <ArticleIcon />
            News
          </Item>
          <Item>
            <LiveTvIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsIcon />
            Settings
          </Item>
          <Item>
            <FlagIcon />
            Report
          </Item>
          <Item>
            <HelpOutlineIcon />
            Help
          </Item>
          <Item
            onClick={() => {
              // setDarkMode(!darkMode)
              props.setDarkMode(!props.darkMode);
              console.log(props.setDarkMode(!props.darkMode));
            }}
          >
            <SettingsBrightnessIcon />
            Light Mode
          </Item>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Menu;
