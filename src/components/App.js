import { useState } from "react";
import React from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Neutella", price: 30 },
    { id: 4, name: "Razor", price: 5 },
    { id: 5, name: "CornFlakes", price: 15 },
    { id: 6, name: "Sound Bar", price: 50 },
    { id: 7, name: "Iphone", price: 80 },
  ]);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInput(value);
  };

  return (
    <div>
      <h3>Enter your budget to check available items:</h3>

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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td
                style={{
                  color: item.price <= input ? "green" : "red",
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
