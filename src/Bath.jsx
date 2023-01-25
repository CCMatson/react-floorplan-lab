const Bath = (props) => {
  return (
    <>
      <div className={props.size === "Half " ? "half" : "full" }>
      {props.size} {props.name} 
      </div>
    </>

  );
}

export default Bath;