import "./styles.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import Status from "./components/Status";

export default function App() {

  let persons = [
    {
      "first":"Aman",
      "last":"Jain"
    },
    {
      "first":"Anjali",
      "last":"Arya"
    },
    {
      "first":"Himanshu",
      "last":"Sahariya"
    }
  ]

  return (
    <div className="App">
      <Greet name="Aman Jain" numOfUnreadMsg={10} />
      <Person names={persons} />
      <Status status="error" />
    </div> 
  );
}
