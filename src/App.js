import { useState, useEffect } from 'react';
import './App.css';
import { getRestaurants } from './services/restaurants';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      console.log(data);
      setRestaurants(data);
    };
    fetchData();
  }, []);

  function filterRestaurants() {
    return restaurants.filter((restaurant) => {
      return (
        restaurant.name.includes(query) && (restaurant.cuisine === cuisine || cuisine === 'All')
      );
    });
  }

  return (
    <div className="App">
      <h1>Restaurant List</h1>
      <input
        placeholder="Search restaurants"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Seafood">Seafood</option>
        <option value="International">International</option>
        <option value="French">French</option>
        <option value="Japanese">Japanese</option>
      </select>
      {filterRestaurants().map((r) => (
        <p key={r.id}>
          {r.name} : {r.cuisine}
        </p>
      ))}
    </div>
  );
}

export default App;
