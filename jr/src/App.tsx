import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

type ResData = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [data, setDate] = useState([]);
  const [title, setTitle] = useState("");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setDate(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {
    // axios
    //   .post("https://dummy.com/create/todo", {
    //     title: title,
    //     completed: false,
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //   });
    console.log("送信");
    console.log("title", title);
    setTitle("");
  };

  if (!data) return <p>Error!</p>;

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='todo追加'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>todo追加</button>
      <input
        type='text'
        placeholder='titleから探す'
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      <ul>
        {data
          .filter((data: ResData) => {
            if (searchName === "") {
              return data;
            }
            if (data.title.includes(searchName)) {
              return data;
            }
          })
          .map((v: ResData) => (
            <li key={v.id}>
              <p>
                {v.title}
                <br />
                status: {v.completed ? "done" : "doing"}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
