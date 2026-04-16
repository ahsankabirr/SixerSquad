import AllPlayers from "../AllPlayers/AllPlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const AvailablePlayers = ({
  handleActiveBtn,
  isActive,
  loadData,
  chooseSelectPlayer,
  player,
}) => {
  return (
    <div className="my-10">
      <div className="flex justify-end">
        
        <div className="join">
          <button
            onClick={() => handleActiveBtn("available")}
            className={`${isActive.status ? "btn rounded-l-xl bg-[#E7FE29]" : "btn rounded-l-xl "}`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveBtn("selected")}
            className={`${isActive.status ? "btn rounded-r-xl " : "btn rounded-r-xl bg-[#E7FE29]"}`}
          >
            Selected ({player.length}/6)
          </button>
        </div>
      </div>

      <div className="my-6">
        {isActive.status ? (
          <AllPlayers
            loadData={loadData}
            chooseSelectPlayer={chooseSelectPlayer}
          ></AllPlayers>
        ) : (
          <SelectedPlayers player={player} isActive={isActive} handleActiveBtn={handleActiveBtn}></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
