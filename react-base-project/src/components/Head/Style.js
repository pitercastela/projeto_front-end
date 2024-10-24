import styled from "styled-components";

export const Top = styled.header`
    padding: 20px;
    background-color: var(--secundaria);
    height: 16vh;

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
  }
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
    font-size: 1.4em;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--background);
    border-radius: 12px;
    margin-left: 22vw;
    margin-top: 7vh;
    padding-left: 2vh;
  }
`;