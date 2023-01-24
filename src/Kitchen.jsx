import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <>
      <div>{props.name}
        <Oven name="Oven"/>
        <Sink name="Sink"/>
      </div>
    </>
  );
}

export default Kitchen;