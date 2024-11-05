import { BottomContainer } from "./style";

const BottomBox = (props) => (
    <BottomContainer>
        <><h1>Sobre Nós</h1></>
        {props.children}
    </BottomContainer>
)

export default BottomBox;