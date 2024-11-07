import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Base from "./Base";
import { Container } from "../components/GridContainer/Style";
import Flex from "../components/Flex/Flex";
import { Top_card } from "../components/Top_card/Style";
import { Down_card } from "../components/Down_card/Style";
import dados from "../data/computadores.json";
import Header from "../components/Header/Header";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCards, setActiveCards] = useState(Array(9).fill(false)); // Define o número de cards

  const Botao2 = styled.div`
    text-decoration: none;
  `;

  const toggleCard = (index) => {
    const newActiveCards = [...activeCards];
    newActiveCards[index] = !newActiveCards[index];
    setActiveCards(newActiveCards);
  };

  // Função para atualizar o termo de pesquisa
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  // Filtragem dos dados
  const filteredData = dados.filter((ele) =>
    ele.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearchChange={handleSearchChange} /> {}

      {filteredData.map((ele, index) => (
        <Container key={index}>
          <Top_card>
            {ele.nome}
            <a href={`/#/detalhes/${ele.id}`}>
              <img src={ele.url} id="imagens-home" />
            </a>
          </Top_card>
          <Down_card>
            <div className={`card ${activeCards[index] ? "active" : ""}`}>
              {activeCards[index] && (
                <div class="card2">
                  <p>Informações sobre o projeto</p>
                </div>
              )}
            
            <Botao2 onClick={() => toggleCard(index)}>
              {activeCards[index] ? <IoIosArrowUp id="setaocima" /> : <IoIosArrowDown id="setaobaixo" />}
            </Botao2>
            </div>
          </Down_card>
        </Container>
      ))}
    </>
  );
};

export default Home;
