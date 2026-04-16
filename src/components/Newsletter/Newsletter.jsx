import Footer from "../Footer/Footer";

const Newsletter = () => {
  return (
    <div className="mt-0 p-0">
      <div className="bg-white/30 backdrop-blur-none p-4 relative top-32 rounded-xl border-2 border-white w-11/12 md:w-9/12 mx-auto">
        <footer
          style={{
            backgroundImage: "url(../../../public/images/bg-shadow.png)",
          }}
          className="footer bg-white footer-horizontal footer-center text-base-content rounded p-10"
        >
          <div>
            <h1 className="text-4xl font-semibold">
              Subscribe to our Newsletter
            </h1>
            <p className=" text-gray-400 my-2 text-xl">
              Get the latest updates and news right in your inbox!
            </p>
            <aside className=" md:flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-64 py-6 rounded-xl mb-2"
              />{" "}
              <button
                className="
  px-7 py-3 rounded-xl 
  text-black font-bold 
  bg-[radial-gradient(at_left_top,_#f472b6,_#fbbf24)]
  bg-blend-soft-light
  hover:opacity-90 transition-all duration-200 active:scale-95
  border border-white/10 shadow-lg ml-2"
              >
                Subscribe
              </button>
            </aside>
          </div>
        </footer>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Newsletter;
