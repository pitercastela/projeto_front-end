import { Top } from "./Style";

const Head = (props) => (
    <>
  <Top>

    <a href="https://www.ibmec.br" target="ibmec" >
    <img id="logoibmec" src="imagens/logo-ibmec.jpg" alt="Logo IBMEC" style={{ cursor: 'pointer' }} />
    </a>
    <input id="pesquisar" placeholder="Pesquisa"/>
    <select id='select-tradu'>
        <option value="">Português</option>
        <option value= "Inglês">Inglês</option>
    </select>

    </Top>
    <div className="container">
      {props.children}
    </div>

    </>
)

export default Head;