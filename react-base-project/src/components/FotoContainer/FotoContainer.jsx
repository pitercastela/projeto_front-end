import { FotoBox, Foto } from "./style";

const FotoContainer = (props) => (
    <FotoBox>
        <Foto>
            {props.children}
        </Foto>
    </FotoBox>
)

export default FotoContainer