import { useState } from "react";
import React from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "Iphone", price: 80 },
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
                  color:
                    item.price <= input ? "rgb(0, 128, 0)" : "rgb(255, 0, 0)",
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
