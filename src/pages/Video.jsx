import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import channalmg from "../images/channalImg.jpg";
import s from "styled-components"; //styled
import Comments from "../components/Comments";
import Card from "../components/Card";
let Container = s.div`
display: flex;

transform: translateX(-6%);
width: 115%;

justify-content: space-between;
// background:red;
gap: 20px;

`;

let Content = s.div`

width:64%;
`;
let VideoWrapper = s.div`
`;

let Title = s.h1`
font-size: 1.5em;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`;

let Details = s.h1`
font-size: 1em;

display: flex;
align-items: center;
justify-content: space-between;
`;

let Info = s.span`
color: ${({ theme }) => theme.textSoft};
gap:5px;

`;
let Buttons = s.div`
display: flex;
gap:20px;
font-size: 1em;

`;
let Button = s.div`
display: flex;
align-items: center;
gap:5px;
cursor: pointer;


`;

let Recommendation = s.div`

width: 42%;

`;
let Channal = s.div`
display: flex;
justify-content: space-between;
`;
let ChannalInfo = s.div`
display: flex;
gap:20px;
margin-left: 20px;


`;

let Image = s.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

let ChannalDetails = s.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;

let ChannalName = s.span`
font-weight: 500;

`;

let ChannalCounter = s.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size: 0.9em;
letter-spacing: 1.1px;

`;

let Description = s.p`
font-size: 1em;
`;

let Subscribe = s.button`
background: #cc1a00;
color: #fff;
font-weight: bold;
letter-spacing: 1.1px;
border: none;
border-radius: 3px;
height: max-content;
padding:10px 20px; 
cursor: pointer;

`;

let Hr = s.hr`
border: 0.5px solid ${({ theme }) => theme.soft};
margin:15px 0;
`;

let Iframe = s.iframe`

`;

const Video = () => {
  return (
    <Container >
      <Content>
        <VideoWrapper>
          <Iframe
            width="100%"
            height="300"
            // must be embed not watch
            src="https://www.youtube.com/embed?v=c1xTDSIXit8&list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4"
            // src="https://www.islambook.com/azkar/9/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D9%81%D8%B1%D9%88%D8%B6%D8%A9"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            // allow="acceleroMetor; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture;"
            allowFullScreen
          ></Iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 || Jun 22, 2022</Info>
          <Buttons>
            <Button>
              123
              <ThumbUpOffAltIcon />
            </Button>
            <Button>
              Dislike
              <ThumbDownOffAltIcon />
            </Button>
            <Button>
              Share
              <ReplyIcon />
            </Button>
            <Button>
              Save
              <PlaylistAddIcon />
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channal>
          <Image src={channalmg} />
          <ChannalInfo>
            <ChannalDetails>
              <ChannalName>Waheed Dev</ChannalName>
              <ChannalCounter>200K Subscribers</ChannalCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                eius eaque rem debitis earum esse quas, accusamus et porro ea
                modi, aliquam, ab enim repudiandae. Enim mollitia velit ad
                nobis.
              </Description>
            </ChannalDetails>
          </ChannalInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channal>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
        <Card type="sm"  />
      
      </Recommendation>
    </Container>
  );
};

export default Video;
