import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const json = await res.json();
      setData(json);
      // console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="5">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Offical name</th>
            <th>continent</th>
            <th>curreny symbol</th>
            <th>currency name</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 &&
            data.map((country, index) => (
              <tr key={index}>
                <td>
                  <img
                    alt={country?.flags?.alt}
                    src={country?.flags?.png}
                    width="100px"
                  />
                </td>
                <td>{country?.name?.official}</td>
                <td>{country?.continents[0]}</td>
                <td>
                  {country?.currencies &&
                  Object.keys(country?.currencies).length > 0
                    ? Object.keys(country?.currencies).map((key, i) => (
                        <span key={i}>{country?.currencies[key]?.symbol}</span>
                      ))
                    : ""}
                </td>
                <td>
                  {country?.currencies &&
                  Object.keys(country?.currencies).length > 0
                    ? Object.keys(country?.currencies).map((key, i) => (
                        <span key={i}>{country?.currencies[key]?.name}</span>
                      ))
                    : ""}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
