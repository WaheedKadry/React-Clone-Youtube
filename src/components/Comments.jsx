import React from "react";
import channalmg from "../images/channalImg.jpg";
import s from "styled-components"; //styled
import Comment from "./Comment";
let Container = s.div``;
let NewComment = s.div`
display: flex;
align-items: center;
gap: 10px;
`;
let Avatar = s.img`
width: 50px;
height: 50px;
border-radius: 50%;`;
let Input = s.input`
outline: none;
border:none;
border-bottom:1px solid ${({ theme }) => theme.soft} ;
color:${({ theme }) => theme.text} ;
width: 100%;
letter-spacing: 1.1px;

background: transparent;
padding: 4px;
`;

export default function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={channalmg} />
        <Input placeholder="Add a Comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
}
