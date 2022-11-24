import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import Alert from "./components/Alert";

function App() {
  const [mode,setMode]=useState("light");

  const [nmode,setNmode]=useState("Dark");

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      setNmode("Light");
      document.body.style.background="black";
      document.body.style.color="White";
      showAlert("Dark Mode is Enabled","Success");
    }else{
      setMode("light");
      setNmode("Dark");
      document.body.style.background="white";
      document.body.style.color="black";
      showAlert("Light Mode is Enabled","Success");
    }
  }
  return (
    <div>
      <Navbar title="Nakeeb" mode={mode} toggleMode={toggleMode} nmode={nmode}/>
      <Alert alert={alert} />
      <div className="container my-13">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </div>
  );
}

export default App;
