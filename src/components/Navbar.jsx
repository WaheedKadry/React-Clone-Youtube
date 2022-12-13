import React from "react";
import s from "styled-components"; //styled
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

let Container = s.div`
position:sticky;
top:0px;
background: ${({ theme }) => theme.bgLighter};
height: 56px;
`;
let Wrapper = s.div`
display: flex;
align-items: center;
height: 100%;
padding: 0px 20px;
justify-content: flex-end;
position:relative;

`;
let Search = s.div`
width: 40%;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
padding:5px;
border:1px solid ${({ theme }) => theme.signButton};
border-radius: 6px;

`;
let Input = s.input`
font-size: 20px;
color: ${({ theme }) => theme.text};
padding:5px 10px;
width:100%;
border:none;
outline:none;
background:transparent;
`;
const Btn = s.button`
  color: ${({ theme }) => theme.signButton};
padding:5px 15px;
background: transparent;
border: 1px solid ${({ theme }) => theme.signButton};
border-radius: 3px;
font-weight: 500;
cursor: pointer;
display:flex;
align-items: center;
gap:5px;

`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" type="search" />
          <SearchIcon />
        </Search>
        <Link to="/signIn" style={{textDecoration:'none'}}>
        
        <Btn>
        <AccountCircleIcon /> SIGN IN
        </Btn>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
