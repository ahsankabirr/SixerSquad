const Hero = ({ ClaimFreeCredit }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(../../../public/images/bg-shadow.png)",
        }}
        className="hero bg-black md:min-h-[545px] rounded-2xl"
      >
        <div className="hero-content text-center">
          <div className="">
            <h1 className="mx-auto">
              <img
                className="min-w-2/6 mx-auto"
                src="../../../public/images/banner-main.png"
                alt=""
              />
            </h1>
            <h1 className="py-6 md:text-4xl block text-white font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="pb-6 text-gray-500 md:text-2xl">
              Beyond Boundaries Beyond Limits
            </p>
            <span className="">
              <button
                onClick={() => ClaimFreeCredit()}
                className="btn bg-[#E7FE29] border-[#E7FE29]"
              >
                Claim Free Credit
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
