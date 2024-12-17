
import Calculator from "./components/calculator/Calculator";
import Weather from "./components/weather/Weather.tsx";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App