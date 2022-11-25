import logo from "./logo.svg";
import "./App.css";
import PrintMyName from "./component/PrintMyName";
import { useState } from "react";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://192.168.0.14:5000";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const getUser = async () => {
    const { data } = await axios.get("/user");
    setUsers(data);
  };
  const postUser = async () => {
    const { status } = await axios.post("/user", { name });
    if (status === 200) {
      alert("ok");
      setName("");
    } else {
      alert("err");
    }
  };

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
      <button onClick={postUser}>postUsers</button>
      <input onChange={(e) => setName(e.target.value)} value={name}></input>
      {users.map((el) => (
        <PrintMyName name={el.name}></PrintMyName>
      ))}
    </div>
  );
}

export default App;
