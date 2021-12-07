import { useState, useEffect } from 'react';
import './App.css';
import { getRestaurants } from './services/restaurants';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      console.log(data);
      setRestaurants(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Restaurant List</h1>
      {restaurants.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}

export default App;
