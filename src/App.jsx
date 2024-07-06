import Stats from "./components/Stats";
import DownloadButtons from "./components/DownloadButtons";
import Cryptocurrencies from "./components/Cryptocurrencies";

function App() {
  return (
    <section className="bg-black dark min-h-screen h-auto pb-8">
      <div className="px-4 max-w-screen-xl py-8 mx-auto flex justify-center items-start lg:gap-8 xl:gap-0 lg:py-16">
        <div className="flex flex-col place-self-center lg:col-span-7">
          <h1 className="mb-4 text-4xl font-bold uppercase font-teko text-center sm:text-left tracking-tight md:text-6xl xl:text-7xl dark:text-white">
            Do you want to Learn more About cryptocurrencies{" "}
            <span className="gradient-text">quickly and easily?</span>
          </h1>
          <p className="max-w-2xl mb-6 font-regular text-3xl md:text-4xl text-center sm:text-left font-teko text-customColorText lg:mb-8 lg:text-x">
            Subscribe to our channel to learn more
          </p>
          <Stats />
          <a
            href="#"
            className="inline-flex items-center text-xl xl:text-2xl justify-center px-5 py-3 flex-auto max-w-[532px] font-teko font-medium text-center text-black rounded-2xl shadow-custom bg-custom-gradient"
          >
            Join Whatsapp
          </a>
          <DownloadButtons />
        </div>
        <Cryptocurrencies />
      </div>
    </section>
  );
}

export default App;
