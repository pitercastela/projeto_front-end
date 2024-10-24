import { onAuthStateChanged } from "firebase/auth";
import Base from "./Base";
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import { Container } from "../components/GridContainer/style";
import Flex from "../components/Flex/Flex";
import { Top_card } from "../components/Top_card/Style";
import { Down_card } from "../components/Down_card/Style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Home = () => {

/* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */



  const Botao2 =styled.div`
  text-decoration:none;
  `;

  const [activeCards, setActiveCards] = useState(Array(8).fill(false)); // nesse (array) quanto maior o numero, mais cards vai ter :)

  const toggleCard = (index) => {
    const newActiveCards = [...activeCards];
    newActiveCards[index] = !newActiveCards[index];
    setActiveCards(newActiveCards);
  };

  return (

    <Base >
      {activeCards.map((isActive, index) => (
        <Container key={index}>
          <Top_card>Projeto: </Top_card>
          <Down_card>
          <div className={`card ${isActive ? 'active' : ''}`}>
              {isActive && <p style={{background: 'var(--secundaria)' , width: '28vw', height: '180px' , borderRadius: '0px 0px 5px 5px' , marginLeft: '-5px'}}>Informações sobre o projeto </p>}
              </div>
          <Botao2 onClick={() => toggleCard(index)}>
                {isActive ? <IoIosArrowUp id='setaocima'/> : <IoIosArrowDown id='setaobaixo'/>}
              </Botao2  >
          
          </Down_card>
        </Container>
      ))}
    </Base>
  );
};

export default Home;
