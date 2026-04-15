import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [credit, setCredit] = useState();

  const ClaimFreeCredit = () => {
    setCredit(500);
    toast.success("Congratulation 500 Credit Added");
  };
  return (
    <>
      <div className="w-9/12 mx-auto">
        <Header ClaimFreeCredit={ClaimFreeCredit} credit={credit}></Header>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
