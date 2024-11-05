import Header from "../components/Header/Header";
import brutos from "../data/computadores.json";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </>
)

export default Base;