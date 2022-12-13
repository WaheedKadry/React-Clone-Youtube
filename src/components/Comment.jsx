import React from "react";
import channalmg from "../images/channalImg.jpg";

import s from "styled-components"; //styled
let Container = s.div`
display: flex;
gap: 10px;
margin: 30px 0;
color: ${({ theme }) => theme.text};`;
let Avatar = s.img`
width: 50px;
height: 50px;
border-radius: 50%;`;
let Details = s.div`
display: flex;
flex-direction: column;
gap:10px;
`;
let Name = s.span`
font-size: .9em;
font-weight: 500;

`;
let Date = s.span`
font-size: 0.9em;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;

`;
let Text = s.span`
font-size: 1em;
`

export default function Comment() {
  return <Container>
  <Avatar src={channalmg} />
  <Details>
  <Name>Waheed Safwat <Date>1 day ago</Date></Name>
  <Text>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
  eius eaque rem debitis earum esse quas, accusamus et porro ea
  modi, aliquam, ab enim repudiandae. Enim mollitia velit ad
  nobis.
</Text>
  </Details>
  </Container>;
}
