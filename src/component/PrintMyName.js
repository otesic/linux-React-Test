import { useState } from "react";

const PrintMyName = () => {
  const [name, setName] = useState("park cheol ryeon~!");
  return <p>{name}</p>;
};
export default PrintMyName;
