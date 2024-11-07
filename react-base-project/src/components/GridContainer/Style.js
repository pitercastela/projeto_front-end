import styled from "styled-components"

const Container = styled.div`
  display: inline-block;

  height: 30vh;
  width: 28vw;
  background-color: var(--primaria);
  margin: 20px;
  border-radius: 5px;
  margin-left: 2.7vw;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

export { Container}




