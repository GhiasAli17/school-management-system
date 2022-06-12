import logo from '../logo.svg';
import '../App.css';
import {AuthProvider} from "../contexts/AuthContext";
import Signup from "./signup";
import Realtimedatabase from "./realtimedatabase";


function App() {
  return (
    <>
     <Signup />
      <Realtimedatabase />
    </>
  );
}

export default App;
