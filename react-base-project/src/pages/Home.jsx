import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Container } from "../components/GridContainer/style";
import Flex from "../components/Flex/Flex";

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
      <h1>
     Aplicação React Base
      </h1>

<Container>1</Container>
<Container>1</Container>



    </Base>
  )
}

export default Home