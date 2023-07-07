import './styles/styles.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import DetailPage from './pages/detailpage';

function App() {
  return (
    <BrowserRouter>
    {/* <header className="header">
          <h1 className="logo">Weather App</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter a city"
                value={""}
                onChange={(e) => {}}
              />
              <Link to={`/weather/Kathmandu`} className="search-button">
                Search
              </Link>
            </div>
        </header> */}
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/weather/:city" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
