import { Link, useSearchParams } from "react-router-dom";
import { Top } from "./Style";
import React, { useState } from "react";

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

const Header = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedFerramenta, setSelectedFerramenta] = useState("");
  const [selectedTecnologia, setSelectedTecnologia] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedPeriodo, setSelectedPeriodo] = useState("");
  const [selectedUnidade, setSelectedUnidade] = useState("");

  // Função para atualizar os searchParams e estados dos seletores(filtro)
  const handleSelectChange = (option, setValue, key) => {
    setValue(option); // Salva o valor no estado
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (option) {
        newParams.set(key, option); // Atualiza o parâmetro na URL
      } else {
        newParams.delete(key); // Remove o parâmetro se o valor for vazio
      }
      return newParams;
    });
  };

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Top>
      <a href="https://www.ibmec.br" target="ibmec">
        <img
          id="logoibmec"
          src="imagens/logo-ibmec.jpg"
          alt="Logo IBMEC"
          style={{ cursor: 'pointer' }}
        />
      </a>

      <input
        id="pesquisar"
        placeholder="Pesquisa"
        onChange={handleInputChange}
      />

      <select id="select-tradu">
        <option value="">Português</option>
        <option value="Inglês">Inglês</option>
      </select>

      <div id="barra">Filtrar por:
        <select
          id="select-ferramentas"
          value={selectedFerramenta}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedFerramenta, "ferramenta")}
        >
          {optionsFerramentas.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="select-tecnologias"
          value={selectedTecnologia}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedTecnologia, "tecnologia")}
        >
          {optionsTecnologias.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="select-curso"
          value={selectedCurso}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedCurso, "curso")}
        >
          {optionsCurso.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="select-periodo"
          value={selectedPeriodo}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedPeriodo, "periodo")}
        >
          {optionsPeriodo.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="select-unidade"
          value={selectedUnidade}
          onChange={(e) => handleSelectChange(e.target.value, setSelectedUnidade, "unidade")}
        >
          {optionsUnidade.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </Top>
  );
};

export default Header;
