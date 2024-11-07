import { BottomContainer } from "./style";

const BottomBox = (props) => (
    <BottomContainer>
        <h2>Sobre Nós</h2>
        {props.children}
    </BottomContainer>
)

export default BottomBox;