import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=c12adecb5029de9c655f6a1bf9788a6e`
      );
      const json = await data.json();
      console.log(json);

      if (json) {
        setWeatherData(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //by default fetch pune data
  useEffect(() => {
    fetchWeatherData("pune");
  }, []);

  const handleSearch = () => {
    fetchWeatherData(searchText);
    setSearchText("");
  };

  return (
    <div className="flex flex-col w-full m-10">
      <div className="flex items-center justify-center gap-5 m-10 w-full">
        <input
          type="text"
          placeholder="Enter City or State"
          className="w-[50%] rounded-xl border border-black p-3 "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-black text-white font bold rounded-lg p-3 w-[20%]"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <WeatherInfo data={weatherData} />
    </div>
  );
};

export default Search;
