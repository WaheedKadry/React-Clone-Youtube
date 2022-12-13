import React from "react";

import s from "styled-components"; //styled
let Container = s.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};

`;
let Wrapper = s.div`
display: flex;
align-items: center;
flex-direction: column;
background: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
padding: 20px 50px;
gap:10px;
`;
let Title = s.h1`
font-size: 24px;

`;
let SubTitle = s.h2`
font-size: 20px;
font-weight: 300;

`;
let Input = s.input`
font-size: 20px;
border: none;
border-bottom: 1px solid ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.text};
border-radius: 3px;
padding: 10px;
background: transparent;
outline: none;
width: 100%;
`;
let Button = s.button`
font-size: 20px;
color: ${({ theme }) => theme.signButton};
padding:5px 15px;
background: transparent;
border: 1px solid ${({ theme }) => theme.signButton};
border-radius: 3px;
font-weight: 500;
cursor: pointer;
margin-top:10px;
//============
&:hover {
    background: ${({ theme }) => theme.signButton};
  font-weight: bold;
      
    color: #fff;
`;
let More = s.div`
display: flex;
font-size: 12px;
margin-top: 10px;
color: ${({ theme }) => theme.textSoft};

`;
let Links = s.div`
margin-left:50px;

`;
let Link = s.span`
margin-left:30px;
&:hover {
    background: ${({ theme }) => theme.signButton};
  font-weight: bold;
      padding:5px;
    color: #fff;
`;

function SignIn() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue To Waheed Tube</SubTitle>
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <Title> _________ Or _________</Title>

        <Input type="text" placeholder="User Name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
        <More>
          English(USA)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
