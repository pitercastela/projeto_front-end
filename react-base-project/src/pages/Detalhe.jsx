import GridContainer from "../components/GridContainer/GridContainer";
import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";

import dados from "../data/computadores.json";

import Base from "./Base";

const Detalhe = () => {

    const { id } = useParams();
    const dadosFiltrados = dados.filter(
        (elemento) => elemento.id === parseInt(id))

return(

    <Base>

<div>

<ListContainer>
          {dadosFiltrados.map((ele) =>(
            ele.descricao


          )

          )}
          </ListContainer>

    </div>

</Base>

);



};

export default Detalhe;