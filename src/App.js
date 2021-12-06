import { useState, useEffect } from 'react';
import './App.css';
import { getRestaurants } from './services/restaurants';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Restaurant List</h1>
    </div>
  );
}

export default App;
