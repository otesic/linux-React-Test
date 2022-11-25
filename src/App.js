import logo from "./logo.svg";
import "./App.css";
import PrintMyName from "./component/PrintMyName";

function App() {
  return (
    <div className="App">
      <h2>linux</h2>
      <PrintMyName name="박철련"></PrintMyName>
      <PrintMyName name="박철련2"></PrintMyName>
    </div>
  );
}

export default App;
