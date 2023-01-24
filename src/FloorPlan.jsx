import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      <div>{props.name}
        < Kitchen name="Kitchen" />
        < LivingRoom name="LivingRoom"/>
      </div>
    </>
  );
}

export default FloorPlan;