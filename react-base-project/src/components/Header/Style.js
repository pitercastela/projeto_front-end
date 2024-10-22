import styled from "styled-components";

export const Top = styled.header`
    padding: 20px;
    background-color: var(--secundaria);

    #barra {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 75px;
  }

  .filtrar-text {
    font-weight: bold;
    margin-right: 5px;
  }

  select {
    padding: 5px;
    font-size: 17px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .filter-label {
    margin-right: 10px;
    font-weight: bold;
}

  #select-tradu{
    height: 42px;
    width: 198px;
    color: var(--destaque);
    background-color: var(--detalhe);
    border-radius: 12px;
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 25px;
    text-align: center;
  }

  option{
    background-color: var(--background);
    color: rgba(0, 0, 0, 0.831);;
  }

  #logoibmec{
    height: 58px;
    width: 158px;
    top: 20px;
    left: 20px;
    align-items: flex-start; 
  }

  #pesquisar{
    height: 39px;
    width: 730px;
    display: flex;
    place-items: center;
    font-size: 24px;
    background-color: var(--background);
    border-radius: 12px;
  }
`;