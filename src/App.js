import logo from "./logo.svg";
import "./App.css";
import PrintMyName from "./component/PrintMyName";
import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const data = await axios.get("/http://192.168.0.14:5000/user");
    setUsers(data);
  };
  // const postUser = async ()=>{
  //   const data = await axios.get("/http://192.168.0.14:5000/user");
  //   setUsers(data)
  // }
  return (
    <div className="App">
      <h2>linux</h2>
      <button
        onClick={() => {
          getUser();
        }}
      >
        getUsers
      </button>
      {users.map((el) => {
        <PrintMyName name={el.name}></PrintMyName>;
      })}
    </div>
  );
}

export default App;
