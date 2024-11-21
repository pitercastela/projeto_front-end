import styled from "styled-components";

export const Top = styled.header`
    background-color: var(--secundaria);
    height: 30vh;
    margin-bottom: 2em;
    padding: 1%;

    #barra {
    display: flex;
    align-items: center;
    gap: 60px;
   margin-top: -7vh;

  }

  .filtrar-text {
    font-weight: bold;
    margin-right: 5px;
  }

  select, button {
    height: 82%;
    width: 12%;
    text-align: center;
    font-size: 50%;
    border-radius: 8px;
    border: none;
    font-family: Helvetica;
  }
  .filter-label {
    margin-right: 10px;
    font-weight: bold;
}

#select-tradu{
    height: 7vh;
    width: 14vw;
    color: var(--destaque);
    background-color: var(--detalhe);
    border-radius: 12px;
    position: absolute;
    top: 8vh;
    right: 4vw;
    font-size: 100%;
    text-align: center;
    font-family: Helvetica;
  }

  option{
    background-color: var(--background);
    color: rgba(0, 0, 0, 0.831);;
  }
    #logout{
    background-color: red;
    color: var(--destaque);
    font-weight: bold;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    width:9vw;
    height: 4vh;
    top: 9.5vh;
    position: absolute;
     font-size: 100%;
    text-align: center;
    font-family: Helvetica;}

  #logoibmec{
    position: absolute;
    height: 9vh;
    width: 22vh;
    margin-top: 3vh;
    left: 2%;
    align-items: flex-start;
  }

  #pesquisar{
    position: relative;
    height: 4vh;
    width: 40vw;
    border: none;
    font-size: 100%;
    font-family: Helvetica;
    margin-bottom: 15vh;
    background-color: var(--background);
    border-radius: 12px;
    margin-left: 22vw;
    margin-top: 7vh;
    padding-left: 2vh;
  }

`;