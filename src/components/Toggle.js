import React, {useState} from "react";

function Toggle() {

  const [isOn, setOn] = useState(false)

  function handleClick(){
    return setOn(!isOn)
  }

  return <button style={isOn ? { background: "red" } : { background: "white"}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
