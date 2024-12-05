import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const [User, setUser] = useState([]);
  const [buttonstate, setButtonstate] = useState("add");
  const [userinfo, setUserinfo] = useState({
    id: uuid(),
    Name: "",
    Age: "",
    Email: "",
    Phno: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserinfo((currentinfo) => ({
      ...currentinfo,
      [name]: value,
    }));
  };

  const add = () => {
    setUser((currentinfo) => [...currentinfo, userinfo]);
    cancelbtn();
  };

  const deletebtn = (id) => {
    setUser((currentinfo) => currentinfo.filter((User) => User.id !== id));
  };

  const editbtn = (User) => {
    setUserinfo(User);
    setButtonstate("edit");
  };

  const cancelbtn = () => {
    setUserinfo({
      id: uuid(),
      Name: "",
      Age: "",
      Email: "",
      Phno: "",
    });
    setButtonstate("add");
  };

  const updateData = () => {
    setUser((currentinfo) =>
      currentinfo.map((User) => (User.id === userinfo.id ? userinfo : User))
    );
    cancelbtn();
  };

  return (
    <div >
      <h1 className="flex justify-center items-center mt-0 text-4xl font-semibold">
        CRUD Operations
      </h1>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="bg-gray-200 p-3 text-lg rounded-lg mt-16 w-96"
          placeholder="Enter Your Name"
          value={userinfo.Name}
          name="Name"
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          className="bg-gray-200 p-3 text-lg rounded-lg mt-4 w-96"
          placeholder="Enter Your Age"
          value={userinfo.Age}
          name="Age"
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          className="bg-gray-200 p-3 text-lg rounded-lg mt-4 w-96"
          placeholder="Enter Your Email"
          value={userinfo.Email}
          name="Email"
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          className="bg-gray-200 p-3 text-lg rounded-lg mt-4 w-96"
          placeholder="Enter Your Phone"
          value={userinfo.Phno}
          name="Phno"
          onChange={handlechange}
        />
        {buttonstate === "add" ? (
          <button 
            onClick={add}
            className="px-10 py-2 rounded-xl text-xl text-white bg-gray-800 my-5"
          >
            ADD
          </button>
        ) : (
          <div className="flex gap-10">
            <button
              onClick={updateData}
              className="px-10 py-2 rounded-xl text-xl text-white bg-blue-600 my-5"
            >
              UPDATE
            </button>
            <button
              onClick={cancelbtn}
              className="px-10 py-2 rounded-xl text-xl text-white bg-red-500 my-5"
            >
              CANCEL
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        {User.length > 0 && ( 
          <table className="">
            <thead>
              <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {User.map((User) => (
                <tr key={User.id}>
                  <td>{User.Name}</td>
                  <td>{User.Age}</td>
                  <td>{User.Email}</td>
                  <td>{User.Phno}</td>
                  <td>
                    <button
                      className="px-4 bg-orange-500 py-2 rounded-lg mx-5"
                      onClick={() => editbtn(User)}
                    >
                      EDIT
                    </button>
                    <button
                      className="px-4 bg-red-700 py-2 rounded-lg mx-5 my-3"
                      onClick={() => deletebtn(User.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;
