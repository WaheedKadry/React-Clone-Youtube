import React from "react";
import img1 from "../images/hq720.webp";
import channalmg from "../images/channalImg.jpg";
import s from "styled-components"; //styled
import { Link } from "react-router-dom";
let Container = s.div`
width:${(props) => (props.type === "sm" ? "90%" : `100%` )};
margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
cursor: pointer;
display: ${(props) => props.type === "sm" && "flex"};
gap:${(props) => props.type === "sm" ? "10px" : "2%"};
// justify-content: space-between;
overflow-x: hidden;

`;
let Img = s.img`
width:${(props) => (props.type == "sm" ? "50%" : "100%")};
height:${(props) => (props.type === "sm" ? "165px" : "202px")};
background:#999;

`;
let Details = s.div`
display: flex;
margin-top: ${(props) => props.type === "!sm" && "16px"};
gap: 12px;
width:100%;
margin-top: 10px;

`;
let ChannalImg = s.img`
width: 31px;
height: 31px;
border-radius: 50%;
background: #999;
display: ${(props) => props.type === "sm" && "none"};

`;
let Texts = s.div`
`;
let Title = s.h1`
font-size: 0.9em;
font-weight: 500;
width: 100%;
color: ${({ theme }) => theme.text};
`;
let ChannelName = s.h2`
font-size: .9em;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0px;
letter-spacing: 1.6px;

`;
let Info = s.div`
font-size: .8em;
color: ${({ theme }) => theme.textSoft};

`;
export default function Card({ type }) {
  
  return (
    
    <Link to="/video/test" style={{ textDecoration: "none", width: `${92 / 4}%`, justifyContent: 'space-between' }}>
      <Container type={type}>
        <Img type={type} src={img1}   />
        <Details type={type}>
          <ChannalImg type={type} src={channalmg} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Waheed Dev</ChannelName>
            <Info>660,908 views * 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}
