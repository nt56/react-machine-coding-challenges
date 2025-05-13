import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    //api calling
    const res = await axios.get("https://dummyjson.com/users");
    setData(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (data.length === 0) return <h1>No user found</h1>;

  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl">Users</h1>

      {data.length > 0 &&
        data.map((user) => (
          <div
            key={user.id}
            className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 flex items-center space-x-6 gap-5 mt-5"
          >
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={user.image}
              alt="User Avatar"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.firstName}
                <span className="font-semibold text-gray-800">
                  {" "}
                  {user.lastName}
                </span>
              </h2>
              <p className="text-gray-500">Email - {user.email}</p>
              <p className="text-gray-500">Age - {user.age}</p>
              <p className="text-gray-500">Gender - {user.gender}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
