import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Nav from "./components/Nav/Nav";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
function App() {
  // Credit Add
  const [credit, setCredit] = useState(0);

  const ClaimFreeCredit = () => {
    setCredit(credit + 10000);
    toast.success("Congratulation 10000 Credit Added");
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

  // Select player
  const [player, setPlayer] = useState([]);
  const chooseSelectPlayer = (players) => {
    const isExist = player.find((p) => players.id === p.id);

    if (isExist) {
      toast.error(`${players.name} is already selected`);
    } else {
      if (player.length >= 6) {
        toast.error("You can't select more then 6 players each time");
      } else {
        if (credit > players.price) {
          const playerPrice = credit - players.price;
          setCredit(playerPrice);
          const newPlayers = [...player, players];
          toast.success(`Congrates!! ${players.name} is now in your squad`);
          setPlayer(newPlayers);
        } else {
          toast.error("You Don't have enough balance");
        }
      }
    }
  };

  // Delete player
  const deletePlayer = (id) => {
    const isExist = player.filter((p) => id != p.id);
    setPlayer(isExist);
  };
  return (
    <>
      <div className="w-11/12 md:w-9/12 mx-auto">
        <Nav credit={credit}></Nav>
        <Header ClaimFreeCredit={ClaimFreeCredit}></Header>

        <AvailablePlayers
          chooseSelectPlayer={chooseSelectPlayer}
          loadData={loadData}
          handleActiveBtn={handleActiveBtn}
          isActive={isActive}
          setIsActive={setIsActive}
          player={player}
          deletePlayer={deletePlayer}
        ></AvailablePlayers>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
