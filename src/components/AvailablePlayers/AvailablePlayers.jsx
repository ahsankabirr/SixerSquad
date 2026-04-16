import AllPlayers from "../AllPlayers/AllPlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const AvailablePlayers = ({ handleActiveBtn, isActive,loadData }) => {
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h1 className="font-semibold md:text-2xl">Available Players</h1>
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
            Selected (0)
          </button>
        </div>
      </div>

      <div className="my-6">
        {isActive.status ? (
          <AllPlayers loadData={loadData}></AllPlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
