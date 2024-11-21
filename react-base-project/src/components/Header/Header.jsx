import { useSearchParams } from "react-router-dom";
import { Top } from "./Style";
import React, { useState, useEffect, useCallback } from "react";
import Protegida from "../../pages/Protegida";
import { signOut } from "firebase/auth"
import { auth } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";

// Definição das opções para os selects
const optionsFerramentas = [
  { value: "", label: "Ferramentas", disabled: true },
  { value: "ferramenta1", label: "Xcode" },
  { value: "ferramenta2", label: "NetBeans" },
  { value: "ferramenta3", label: "Git" }
];

const optionsTecnologias = [
  { value: "", label: "Tecnologias", disabled: true },
  { value: "tecnologia1", label: "Swagger" },
  { value: "tecnologia2", label: "Typescript" },
  { value: "tecnologia3", label: "React" }
];

const optionsCurso = [
  { value: "", label: "Curso", disabled: true },
  { value: "curso1", label: "Ciência de Dados" },
  { value: "curso2", label: "Engenharia de Software" },
  { value: "curso3", label: "Engenharia de Computação" }
];

const optionsPeriodo = [
  { value: "", label: "Período", disabled: true },
  { value: "periodo1", label: "Manhã" },
  { value: "periodo2", label: "Tarde" },
  { value: "periodo3", label: "Noite" }
];

const optionsUnidade = [
  { value: "", label: "Unidade", disabled: true },
  { value: "unidade1", label: "Barra" },
  { value: "unidade2", label: "BH" },
  { value: "unidade3", label: "SP" },
  { value: "unidade4", label: "Centro" }
];

// Componente Logo
const Logo = () => (
  <a href="https://www.ibmec.br" target="ibmec" aria-label="Visitar site do IBMEC">
    <img
      id="logoibmec"
      src="imagens/logo-ibmec.jpg"
      alt="Logo IBMEC"
      style={{ cursor: 'pointer' }}
    />
  </a>
);

// Componente de Input de Pesquisa
const SearchInput = ({ onSearchChange }) => (
  <input
    id="pesquisar"
    placeholder="Pesquisa"
    onChange={onSearchChange}
    aria-label="Campo de pesquisa"
  />
);

// Componente de Botão de Logout

  <button type="button" id="logout">Sair</button>

// Componente Principal Header
const Header = ({ onSearchChange, isLoggedIn, onLogout }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estados para os selects
  const [selectedFerramenta, setSelectedFerramenta] = useState(searchParams.get("ferramenta") || "");
  const [selectedTecnologia, setSelectedTecnologia] = useState(searchParams.get("tecnologia") || "");
  const [selectedCurso, setSelectedCurso] = useState(searchParams.get("curso") || "");
  const [selectedPeriodo, setSelectedPeriodo] = useState(searchParams.get("periodo") || "");
  const [selectedUnidade, setSelectedUnidade] = useState(searchParams.get("unidade") || "");

  // Efeito para sincronizar os selects com os parâmetros de busca na URL
  useEffect(() => {
    setSelectedFerramenta(searchParams.get("ferramenta") || "");
    setSelectedTecnologia(searchParams.get("tecnologia") || "");
    setSelectedCurso(searchParams.get("curso") || "");
    setSelectedPeriodo(searchParams.get("periodo") || "");
    setSelectedUnidade(searchParams.get("unidade") || "");
  }, [searchParams]);

  // Função para lidar com mudanças nos selects
  const handleSelectChange = useCallback((option, setValue, key) => {
    setValue(option);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (option) {
        newParams.set(key, option);
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  }, [setSearchParams]);

  // Função para lidar com mudanças no input de pesquisa
  const handleInputChange = (event) => {
    if (onSearchChange && typeof onSearchChange === "function") {
      onSearchChange(event.target.value);
    }
  };

  // Função para limpar todos os filtros
  const handleClearFilters = () => {
    setSelectedFerramenta("");
    setSelectedTecnologia("");
    setSelectedCurso("");
    setSelectedPeriodo("");
    setSelectedUnidade("");
    setSearchParams({});
  };

  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");}


  return (
    <Top>
      <Logo />
      <SearchInput onSearchChange={handleInputChange} />
      <Protegida><button type="button" id="logout" onClick={handleLogout} >Sair</button></Protegida>
      <select id="select-tradu" aria-label="Selecionar idioma">
        <option value="">Português</option>
        <option value="Inglês">Inglês</option>
      </select>
      <div id="barra">Filtrar por:
        {/* Renderização dos selects para filtros */}
        <select
          value={selectedFerramenta}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedFerramenta, "ferramenta")}
          aria-label="Selecionar ferramenta"
        >
          {optionsFerramentas.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={selectedTecnologia}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedTecnologia, "tecnologia")}
          aria-label="Selecionar tecnologia"
        >
          {optionsTecnologias.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={selectedCurso}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedCurso, "curso")}
          aria-label="Selecionar curso"
        >
          {optionsCurso.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={selectedPeriodo}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedPeriodo, "periodo")}
          aria-label="Selecionar período"
        >
          {optionsPeriodo.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={selectedUnidade}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedUnidade, "unidade")}
          aria-label="Selecionar unidade"
        >
          {optionsUnidade.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="button" id="limpaBarra" onClick={handleClearFilters}>Limpar Filtros</button>
      </div>
    </Top>
  );
};

export default Header;