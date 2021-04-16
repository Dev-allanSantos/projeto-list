import React, { useState } from 'react';
import './App.css';

function App() {

  const [item, setitem] = useState('');
  const [itemList, setitemList] = useState([]);
  const addItem = () => {
    setitemList([item].concat(itemList))
    setitem('')
  };

  return (
    <div className="App">

      <h1>Lista de Compras</h1>

      <input type="text" placeholder="item" value={item} name="item" onChange={e => setitem(e.target.value)} />

      <button onClick={addItem}>Adicionar Item</button>

      <ul>
        {itemList.map((item) => (
          <li>{item}</li>
        ))}

      </ul>

    </div>
  );

}

export default App;
