import React from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/home/Home';

const url = 'https://raw.githubusercontent.com/phenixBolseChemTree/dataForLayout/main/layoutReact_data.json';

const { data } = await axios.get(url)
  .then((response) => response)
  .catch((error) => {
    console.error('Ошибка при получении данных', error);
  });

function App() {
  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
