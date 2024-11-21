import { Link } from "react-router-dom";
import Base from "./Base";

const Protegida = (props) => {
  const Conteudo = () => (
    <>
    </>
  )

  return (
    <>
    {window.sessionStorage.getItem('accessToken')
    ? props.children
    : <Conteudo/>
    }
    </>
  )
}

export default Protegida;