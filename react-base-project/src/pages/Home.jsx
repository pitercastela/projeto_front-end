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
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";

import { useNavigate } from "react-router-dom";
import Protegida from "./Protegida";

const ItemsPorPags = 9;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [activeCards, setActiveCards] = useState(Array(18).fill(false)); // Define o número de cards
  const [currentPage, setCurrentPage] = useState(1)

  const Botao2 = styled.div`
    text-decoration: none;
  `;

  const toggleCard = (index) => {
    const newActiveCards = [...activeCards];
    newActiveCards[index] = !newActiveCards[index];
    setActiveCards(newActiveCards);
  };

  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");

  }
  // Função para atualizar o termo de pesquisa
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  // Função para atualizar os filtros
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filtragem dos dados com base nos filtros selecionados
  const filteredData = dados.filter((ele) => {
    return (
      ele.nome.toLowerCase().includes(searchTerm.toLowerCase()) || ele.tecnologias.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ele.unidade.toLowerCase().includes(searchTerm.toLowerCase()) || ele.Integrantes.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalpags = Math.ceil(filteredData.length / ItemsPorPags);

  const DataPag =  filteredData.slice(
    (currentPage - 1) * ItemsPorPags,
    currentPage * ItemsPorPags
  );

  const proxpag = () => {
    if (currentPage < totalpags){
    setCurrentPage((pag) => Math.min(pag + 1, totalpags))
    }
  };

  const antpag = () => {
    if (currentPage > 1){
    setCurrentPage((pag) => Math.max(pag - 1, 1))
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);

  return (
    <>
      <Header onSearchChange={handleSearchChange} onFilterChange={handleFilterChange} />
      {DataPag.map((ele, index) => (
        <Container key={index}>
          <Top_card id="card1">
            {ele.nome}
            <a href={`https://pitercastela.github.io/projeto_front-end/#/detalhes/${ele.id}`}>
              <img src={ele.url} id="imagens-home" />
            </a>
          </Top_card>
          <Down_card>
            <div className={`card ${activeCards[index] ? "active" : ""}`}>
              {activeCards[index] && (
                <div className="card2">
                  <p>Integrantes: {ele.Integrantes}</p>
                  <p>Tecnologias: {ele.tecnologias}</p>
                  <p>Unidade: {ele.unidade}</p>
                  <p>Semestre: {ele.periodo} período </p>
                </div>
              )}

              <Botao2 onClick={() => toggleCard(index)}>
                {activeCards[index] ? <IoIosArrowUp id="setaocima" /> : <IoIosArrowDown id="setaobaixo" />}
              </Botao2>
            </div>
          </Down_card>
        </Container>
      ))}
            <div className="paginacao">
        <div onClick={antpag} disabled={currentPage === 1}>
          <IoIosArrowBack id="setadireita"/></div>
        <p id="numpags">
          {Array.from({ length: 2 }, (_, i) => (
            <span
              key={i + 1}
              className={`page ${currentPage === i + 1 ? 'active' : 'inactive'}`}
              onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </span>
          ))}
        </p>
        <div onClick={proxpag} disabled={currentPage === totalpags}>
          <IoIosArrowForward id="setaesquerda"/></div>
      </div>
    </>
  );
};

export default Home;
