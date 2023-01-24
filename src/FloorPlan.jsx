import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  const bedNum = ['1' , '2', '3']
  
  return (
    <>
      <div>{props.name}
        < Kitchen name="Kitchen" />
        < LivingRoom name="Living Room"/>
        < BedRoom name="Bed Room" bedNum={bedNum[0]}/>
        < BedRoom name="Bed Room" bedNum={bedNum[1]}/>
        < BedRoom name="Bed Room" bedNum={bedNum[2]}/>
        < Bath name="Bath" size="Half "/>
        < Bath name="Bath" size="Full "/>
      </div>
    </>
  );
}

export default FloorPlan;