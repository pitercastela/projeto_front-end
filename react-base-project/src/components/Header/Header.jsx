import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div id="barra">Filtrar por: 
        <button>Ferramentas</button>
        <button>Tecnologias</button><button>Curso</button>
        <button>Periodo</button><button>Unidade</button>
    </div>

  </Top>
)

export default Header;