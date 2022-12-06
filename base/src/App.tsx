import { useState } from "react";
import "./App.css";

function App() {
  const [hello, setHello] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = () => {
    console.log("name", name);
    console.log("age", age);
    setName("");
    setAge(0);
  };

  return (
    <div className='App'>
      <div>
        <p>{hello ? "Hello Word!" : ""}</p>
        <button onClick={() => setHello(!hello)}>Toggle Hello</button>
      </div>
      <div>
        <p>
          {name && age ? `私の名前は${name}です。私の年齢は${age}歳です。` : ""}
        </p>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
      </div>
      <button disabled={!name || !age} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
