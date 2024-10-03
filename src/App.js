import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('no data yet');
  async function fetchData() {
    const url = process.env.REACT_APP_API_URL + 'test/';
    const response = await fetch(url);
    setData(await response.json());
  }

  return (
    <div>
      <button onClick={fetchData}>fetch</button>
      <div>data:<br/>{data}</div>
      <img src={logo} className='App-logo'></img>
    </div>
  );
}

export default App;
