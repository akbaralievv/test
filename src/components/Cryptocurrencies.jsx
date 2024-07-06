import Ethereum from "../assets/images/Ethereum.png";
import Litecoin from "../assets/images/Litecoin.png";
import Bitcoin from "../assets/images/Bitcoin.png";

import UserFeedbacks from "./UserFeedbacks";

function Cryptocurrencies() {
  return (
    <div className="hidden w-3/4 lg:col-span-2 lg:flex relative">
      <img
        src={Bitcoin}
        alt="Bitcoin"
        className="absolute top-[4px] z-0 right-[12px] w-[189px]"
      />
      <img
        src={Litecoin}
        alt="Litecoin"
        className="absolute top-[185px] z-0 right-[145px] w-[189px]"
      />
      <img
        src={Ethereum}
        alt="Ethereum"
        className="absolute bottom-0 z-0 right-[12px] w-[189px]"
      />
      <UserFeedbacks />
    </div>
  );
}

export default Cryptocurrencies;
