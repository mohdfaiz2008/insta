import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import SignUp from "./Signup/Singup";
import Dashboard from "./Dashboard/Dashboard";


function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center app">
      <Routes >
        {/* <Route path={"/"} element={<Login/>}/> */}
        {/* <Route path={"/signup"} element={<SignUp/>}/> */}
        <Route path={"/"} element={<Dashboard/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
