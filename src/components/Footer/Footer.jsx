const Footer = () => {
  return (
    <div className="text-white bg-[#06091A]">
      <div className="pt-40  flex justify-center">
        <img src="../../../public/images/logo-footer.png" alt="" />
      </div>
      <footer className="footer sm:footer-horizontal  p-10">
        <nav>
          <h6 className=" font-semibold  text-white">About Us</h6>
          <p className="md:w-4/6 text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="font-semibold  text-white">Quick Links</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">Services</a>
          <a className="link link-hover text-gray-400">About</a>
          <a className="link link-hover text-gray-400">Contact</a>
        </nav>

        <form>
          <h6 className="font-semibold  text-white">Subscribe</h6>
          <fieldset className="w-80">
            <p className="text-gray-500 mb-4 md:w-5/6">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-black rounded-l-xl"
              />
              <button
                className=" bg-[radial-gradient(at_left_top,_#f472b6,_#fbbf24)]
  bg-blend-soft-light
  hover:opacity-90 transition-all duration-200 active:scale-95
  border border-white/10 px-4 md:px-4 rounded-r-xl text-black"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr className="border- border-gray-700" />
      <p className="text-center py-4 text-gray-500">
        &copy; 2026 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
