import logo from '../logo.svg';
import '../App.css';
import {AuthProvider} from "../contexts/AuthContext";
import Signup from "./signup";
import Realtimedatabase from "./realtimedatabase";
import Alumni from "./alumni";
import School from "./school";



function App() {
  return (
    <>
     <Signup />
      <Realtimedatabase />
        <Alumni />
        <School />
    </>
  );
}

export default App;
