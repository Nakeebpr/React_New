import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Nakeeb" />
      <div className="container my-13">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
