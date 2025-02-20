import { Routes, Route, Navigate } from 'react-router-dom'

// App components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Search />

      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  )
};

export default App;
