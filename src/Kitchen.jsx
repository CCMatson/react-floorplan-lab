import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <>
      <div className="kitchen">{props.name}
        <div className="oven" ><Oven name="Oven"/></div>
        <div className="sink"><Sink name="Sink"/></div>
      </div>
    </>
  );
}

export default Kitchen;