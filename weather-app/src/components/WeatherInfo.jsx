const WeatherInfo = ({ data }) => {
  const currentDate = new Date().toDateString();

  return (
    <div>
      {data && (
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <h2 className="font-extrabold text-2xl">{data?.name}</h2>
          <p>{currentDate}</p>
          <h1 className="font-bold text-xl">{data?.main.temp} °C</h1>
          <h3 className="font-bold">{data?.weather[0].description}</h3>
          <div className="flex justify-between gap-52">
            <div className="flex flex-col items-center">
              <p>{data?.wind.speed}</p>
              <p>wind Speed</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{data?.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
