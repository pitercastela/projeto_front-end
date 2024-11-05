import GridContainer from "../components/GridContainer/GridContainer";
import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Head from "../components/Head/Head";
import RightBox from "../components/RightBox/RightBox";
import { FotoBox } from "../components/FotoContainer/style";
import BottomBox from "../components/BottomBox/BottomBox";

const Detalhe = () => {

    const { id } = useParams();
    const dadosFiltrados = dados.filter(
        (elemento) => elemento.id === parseInt(id))

return(

<Head>

<ListContainer>
    {dadosFiltrados.map((ele) =>(
        ele.descricao
    )
)}
</ListContainer>

<FotoBox>
{dadosFiltrados.map((ele) => (
        <img src={ele.url}/>
    )
)}
</FotoBox>


<RightBox>
    {dadosFiltrados.map((ele) => (
        ele.info
    )
)}
</RightBox>

<BottomBox>
<p>{dadosFiltrados.map((ele) => (
        ele.Sobre_nos
    )

)}</p>
</BottomBox>

</Head>

);



};

export default Detalhe;