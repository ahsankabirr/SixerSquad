import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

const Header = ({ClaimFreeCredit,credit}) => {
  return (
    <div>
      <Nav credit={credit}></Nav>
      <Hero ClaimFreeCredit={ClaimFreeCredit}></Hero>
    </div>
  );
};

export default Header;
