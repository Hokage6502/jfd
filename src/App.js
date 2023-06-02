import "./styles.css";
import {useState,useEffect} from "react";
import axios from "axios";



export default function App() {
  let [info,setInfo]=useState([]);
  useEffect(()=>async function func(){
    const data=await axios.get('https://jsonplaceholder.typicode.com/todos');
    setInfo(data.data);
    console.log(data);
  },[]
  )
  return (
    <div className="App">
      {
        info.map(item=>
          <li> {item.title}</li>
        )
      }
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
