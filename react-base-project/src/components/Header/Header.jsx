import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = ({ onSearchChange }) => {
    const handleInputChange = (event) => {
      onSearchChange(event.target.value); // Envia o valor do input para Base
    };
    return(
  <Top>

    <a href="https://www.ibmec.br" target="ibmec" >
    <img id="logoibmec" src="/imagens/logo-ibmec.jpg" alt="Logo IBMEC" style={{ cursor: 'pointer' }} />
    </a>

  <input
  id="pesquisar"
  placeholder="Pesquisa"
  onChange={handleInputChange} />

    <select id='select-tradu' >
        <option value="">Português</option>
        <option value= "Inglês">Inglês</option>
    </select>

    <div id="barra">Filtrar por:
        <select >
        <option value="" disabled selected hidden>ferramenta</option>
        <option value="ferramenta1">React</option>
            <option value="ferramenta2">Vue</option>
            <option value="ferramenta3">Ferramenta 3</option>
        </select>
        <select>
            <option value="" disabled selected hidden>Tecnologias</option>
            <option value="tecnologia1">Swagger</option>
            <option value="tecnologia2">Typescript</option>
            <option value="tecnologia3">React</option>
        </select>
        <select>
            <option value="" disabled selected hidden >Curso</option>
            <option value="curso1">Ciencia de Dados</option>
            <option value="curso2">Eng.Software</option>
            <option value="curso3">Eng.Computação</option>
        </select>
        <select>
            <option value="" disabled selected hidden>Período</option>
            <option value="periodo1">Manhã</option>
            <option value="periodo2">Tarde</option>
            <option value="periodo3">Noite</option>
        </select>
        <select>
            <option value="" disabled selected hidden>Unidade</option>
            <option value="unidade1">RJ</option>
            <option value="unidade2">BH</option>
            <option value="unidade3">SP</option>
        </select>
    </div>


  </Top>
);
};

export default Header;