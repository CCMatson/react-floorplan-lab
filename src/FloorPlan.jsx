import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  const bedNum = ['1', '2', '3']

  return (
    <>
      {props.name}
      < Kitchen name="Kitchen" />
      < LivingRoom name="Living Room" />
      < BedRoom name="Bed Room" bedNum={bedNum[0]} />
      < Bath name="Bath" size="Half " />
      < BedRoom name="Bed Room" bedNum={bedNum[1]} />
      < Bath name="Bath" size="Full " />
      < BedRoom name="Bed Room" bedNum={bedNum[2]} />

    </>
  );
}

export default FloorPlan;