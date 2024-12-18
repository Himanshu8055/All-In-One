import { useEffect, useState } from 'react'

function Weather() {
  const [area, setArea] = useState('New York');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState('')
  const [result, setResult] = useState(null);

  const api_key = 'c5e154a884e5fc3c4bf456e5d90f2729'

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${area}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'text/plain'
        }
      };

      try {
        const response = await fetch(url, options)
        const data = await response.json();
        console.log(data);
        setResult(data)
      } catch (error) {
        console.log(error);

      }
    }
    fetchData();

  }, [area])

  const location = (e: any) => {
    e.preventDefault();
    setArea(weather)
  }
  return (
    <>
      <h1>Weather</h1>
      <div>
        <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} />
        <button onClick={location}>Go</button>
        {result && {}}
      </div>

    </>
  )
}

export default Weather