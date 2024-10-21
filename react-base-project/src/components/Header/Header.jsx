import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>

<div id="barra">Filtrar por:
    <select>
        <option value="">Ferramentas</option>
        <option value="ferramenta1">React</option>
        <option value="ferramenta2">Vue</option>
        <option value="ferramenta3">Ferramenta 3</option>
    </select>
    <select>
        <option value="">Tecnologias</option>
        <option value="tecnologia1">Swagger</option>
        <option value="tecnologia2">Typescript</option>
        <option value="tecnologia3">React</option>
    </select>
    <select>
        <option value="">Curso</option>
        <option value="curso1">Ciencia de Dados</option>
        <option value="curso2">Eng.Software</option>
        <option value="curso3">Eng.Computação</option>
    </select>
    <select>
        <option value="">Período</option>
        <option value="periodo1">Manhã</option>
        <option value="periodo2">Tarde</option>
        <option value="periodo3">Noite</option>
    </select>
    <select>
        <option value="">Unidade</option>
        <option value="unidade1">RJ</option>
        <option value="unidade2">BH</option>
        <option value="unidade3">SP</option>
    </select>
</div>


  </Top>
)

export default Header;