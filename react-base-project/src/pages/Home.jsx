import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Container } from "../components/GridContainer/style";
import Flex from "../components/Flex/Flex";
import { Top_card } from "../components/Top_card/Style";
import { Down_card } from "../components/Down_card/Style";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */


  return (
    <Base>


<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>
<Container><Top_card>Projeto: </Top_card><Down_card>▼</Down_card></Container>


    </Base>
  )
}

export default Home