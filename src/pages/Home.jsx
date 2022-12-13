import React from "react";
import s from "styled-components"; //styled
import Card from "../components/Card";
let Container = s.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 10px;
`;
const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </Container>
  );
};

export default Home;
