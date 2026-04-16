import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
function App() {
  // Credit Add
  const [credit, setCredit] = useState();

  const ClaimFreeCredit = () => {
    if (credit >= 1) {
      toast.warning("Your coin is not empty");
    } else {
      setCredit(500);
      toast.success("Congratulation 500 Credit Added");
    }
  };

  // Active BTN

  const [isActive, setIsActive] = useState({
    select: "available",
    status: true,
  });

  const handleActiveBtn = (select) => {
    if (select === "available") {
      {
        setIsActive({
          select: "available",
          status: true,
        });
      }
    } else {
      setIsActive({
        select: "selected",
        status: false,
      });
    }
  };

  // Data Loading
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  return (
    <>
      <div className="w-11/12 md:w-9/12 mx-auto">
        <Header ClaimFreeCredit={ClaimFreeCredit} credit={credit}></Header>

        <AvailablePlayers
          loadData={loadData}
          handleActiveBtn={handleActiveBtn}
          isActive={isActive}
        ></AvailablePlayers>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
