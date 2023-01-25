const BedRoom = (props) => {

  return ( 
<>
<div className="bedroom" id={`bed-${props.bedNum}`}>
{props.name} {props.bedNum}
</div>
</>
  );
}

export default BedRoom;