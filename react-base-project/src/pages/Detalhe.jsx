import GridContainer from "../components/GridContainer/GridContainer";
import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Head from "../components/Head/Head";
import RightBox from "../components/RightBox/RightBox";
import { FotoBox } from "../components/FotoContainer/style";
import BottomBox from "../components/BottomBox/BottomBox";
import DescBox from "../components/DescBox/DescBox";

const Detalhe = () => {

    const { id } = useParams();
    const dadosFiltrados = dados.filter(
        (elemento) => elemento.id === parseInt(id))

return(

<Head>

<ListContainer>
    {dadosFiltrados.map((ele) =>(
        ele.nome
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

<DescBox>
    {dadosFiltrados.map((ele) =>(
        ele.desc
    )
)}
</DescBox>

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