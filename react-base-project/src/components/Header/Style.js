import styled from "styled-components";

export const Top = styled.header`
    background-color: var(--secundaria);
    height: 35%;
    margin-bottom: 3.5em;
    padding: 1%;

    #barra {
    display: flex;
    align-items: center;
    gap: 30px;
   margin-top: -7vh;
  }
   #barra > p {
   font-size: 4vh;
   margin-right: 8vw;
   }

  .filtrar-text {
    font-weight: bold;
    margin-right: 5px;
  }

  select.selecte {
    height: 60%;
    width: 12%;
    text-align: center;
    font-size: 50%;
    border-radius: 8px;
    border: none;
    margin-left: 1%;

  }
  .filter-label {
    margin-right: 10px;
    font-weight: bold;
}

#select-tradu{
    height: 6vh;
    width: 13vw;
    color: var(--destaque);
    background-color: var(--detalhe);
    border-radius: 12px;
    position: absolute;
    top: 7%;
    right: 4vw;
    font-size: 100%;
    text-align: center;
  }

  option{
    background-color: var(--background);
    color: (rgba(0, 0, 0, 0.831));;
  }

  #logoibmec{
    position: absolute;
    height: 9vh;
    width: 22vh;
    margin-top: 3vh;
    left: 3%;
    align-items: flex-start;
  }

  #pesquisar{
    height: 3vh;
    width: 40vw;
    border: none;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15vh;
    background-color: var(--background);
    border-radius: 12px;
    margin-left: 22vw;
    margin-top: 7.4vh;
    padding-left: 2vh;
  }
      @media screen and (max-width: 978px) {
  #barra{
  width: 94%;
  gap: 28px;
  }
  #barra > p{
  font-size: 90%;
  }
  select.selecte{
  margin-left: -15px;
  width: 60%;}

  #pesquisar{
    height: 3vh;
    width: 50%;
    margin-top: 15%;
    margin-left: 25vw;
    padding-left: 2%;
    margin-bottom: 10%;}

  #logoibemc{
   margin-top:0;
  margin-left: 20%; }

  #select-tradu{
    height: 5.5vh;
    width: 13%;
    top: 7.6%;
    font-size: 90%;
    right: 2.5%;
      }
  }
    @media screen and (max-width: 768px) {

  #pesquisar{
    height: 3vh;
    width: 80%;
    margin-top: 18%;
    margin-left: 10vw;
    padding-left: 2%;
    margin-bottom: 15%;}

    #barra{
     gap: 34px;
    height: 5%;
    width: 100%;
    margin-left: -5vw;
      border-bottom: 1.5vh solid var(--secundaria);
    border-radius: 0;
   
  }   #barra > p{
      font-size: 0;
      margin-right: 12px;
    }
  
    select.selecte {
    height: 57%;
    width: 30%;
    text-align: center;
    font-size: 42%;
   left: 6%;
  }

   #logoibmec{
   margin-top: 2%;
  margin-left: 0; }

  #select-tradu{
   height: 5.5vh;
    width: 17%;
    top: 5%;
     font-size: 90%;
    right: 2.5%;}
}
        @media screen and (max-width: 560px) {
  #logoibmec{
   margin-top: 0;
  margin-left: 0; 
  }
  #pesquisar{
    height: 2.7vh;
    width: 86%;
    margin-top: 20%;
    margin-left: 6vw;
    padding-left: 3%;
    margin-bottom: 17%;}

    #barra{
    gap: 14px;
    height: 5%;
    width: 100%;
    margin-left: -5vw;
    border-bottom: 1vh solid var(--secundaria);
    border-radius: 0;
   
  }   #barra > p{
      font-size: 0;
    }
    select.selecte {
    height: 80%;
    width: 18%; 
    text-align: center;
    font-size: 45%;
   margin: 0;
   left: -1%;
  }
     #select-tradu{
   height: 4.5vh;
    width: 20%;
    top: 3.5%;
    font-size: 80%;
    right: 5%;}}
`;

