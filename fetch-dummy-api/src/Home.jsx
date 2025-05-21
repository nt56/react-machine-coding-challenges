import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://api.postalpincode.in/postoffice/New");
    const json = await res.json();
    // console(json[0].PostOffice);
    setData(json[0].PostOffice);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Names</h1>
      <select className="mx-auto w-[500px] ">
        {data.length > 0 &&
          data.map((user, index) => (
            <option value={user.Name} key={index}>
              {user.Name}
            </option>
          ))}
      </select>
    </div>
  );
}
