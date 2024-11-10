import { memo } from "react";

const Button = ({clickHandler}) => {
  console.log("Button Component rendering");
  return <button onClick={clickHandler}>Increase by 1</button>
}

export default memo(Button);