const AllPlayers = ({ loadData }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loadData.map(
          (p) => (
            console.log(p),
            (
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img src={p.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <span className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 rounded-xl text-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h2 className="card-title pl-2 text-gray-800">{p.name}</h2>
                  </span>

                  <span className="flex justify-between items-center">
                    <div>
                      <span className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6 text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="pl-2 text-gray-400">{p.country}</p>
                      </span>
                    </div>
                    <div>
                      <p className="bg-gray-200 px-5 py-2 rounded-xl font-semibold text-gray-500 text-end">
                        {p.role}
                      </p>
                    </div>
                  </span>
                  <hr className="border-gray-200" />

                  <h3 className="font-semibold text-gray-800">Rating</h3>

                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-800">
                        {p.battingStyle}
                      </h3>
                      <h3 className=" text-gray-400">{p.battingStyle}</h3>
                    </div>
                    <div className="flex justify-between mt-5 items-center">
                      <h3 className="font-semibold text-gray-800">
                        €{p.price} 
                      </h3>
                      <button className="btn btn-outline border-gray-300 text-gray-500">Choose Player</button>
                    </div>
                  </div>

                 
                </div>
              </div>
            )
          ),
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
