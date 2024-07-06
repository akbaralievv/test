import googlePlay from "../assets/icons/googlePlay.svg";
import appStore from "../assets/icons/appStore.svg";

function DownloadButtons() {
  return (
    <div className="flex justify-center sm:justify-normal items-center mt-[76px] gap-5 w-full">
      <div className="w-[132px] h-[54px] rounded-xl py-2 px-3 bg-custom-dark-grey flex items-center gap-2 justify-center">
        <img src={googlePlay} alt="Google Play" />
        <div className="text-customColorBtn">
          <span className="text-xs font-teko">get it on</span>
          <p className="font-teko md:text-xs xl:text-xl">Google play</p>
        </div>
      </div>
      <div className="w-[132px] h-[54px] rounded-xl py-2 px-3 bg-custom-dark-grey flex items-center gap-2 justify-center">
        <img src={appStore} alt="App Store" />
        <div className="text-customColorBtn">
          <span className="text-xs font-teko">Available on the</span>
          <p className="md:text-xs xl:text-xl font-teko">App Store</p>
        </div>
      </div>
    </div>
  );
}

export default DownloadButtons;
