import { useState } from "react";
import React from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([
    { name: "Apple", price: 20, enable: false },
    { name: "Banana", price: 10, enable: false },
    { name: "Neutella", price: 30, enable: false },
    { name: "Razor", price: 5, enable: false },
    { name: "CornFlakes", price: 15, enable: false },
    { name: "Sound Bar", price: 50, enable: false },
    { name: "Iphone", price: 80, enable: false },
  ]);
  const [input, setInput] = useState();
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInput(value);

    const updatedData = data.map((item) => ({
      ...item,
      enable: item.price <= value,
    }));
    setData(updatedData);
  };

  return (
    <div>
      <lable for="input">Enter your budget to check available items:</lable>
      <input type="Number" id="input" value={input} onChange={handleChange} />
      <h2>Items you can buy are in green color</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td
                style={{
                  color: item.enable ? "rgb(0, 128, 0)" : "rgb(255, 0, 0)",
                }}
              >
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
