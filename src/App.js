import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'




function App() {
  const [mode,setMode]=useState("light")
  const [nmode,setNmode]=useState("Dark")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      setNmode("Light")
      document.body.style.background="black"
      document.body.style.color="White"
      console.log(mode)
    }else{
      setMode("light")
      setNmode("Dark")
      document.body.style.background="white"
      document.body.style.color="black"
      console.log(mode)
    }
  }
  return (
    <div>
      <Navbar title="Nakeeb" mode={mode} toggleMode={toggleMode} nmode={nmode}/>
      <div className="container my-13">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>
    </div>
  );
}

export default App;
