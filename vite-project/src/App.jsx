import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

// App components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

// API key
import apiKey from './config';


const App = () => {
  // const [photos, setPhotos] = useState([]);
  const fetchData = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      // .then(responseData => setPhotos(responseData.photos))
      .then(responseData => console.log(responseData.photos))
      .catch(error => console.log("Error fetching and parsing data", error));
  }

  useEffect(() => {
    fetchData('cats');
  //   fetchData('dogs');
  //   fetchData('computers');
  }, []); 

  return (
    <div className="container">
      <Nav />
      <Search />

      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList title={"Cats"} />} />
        <Route path="/dogs" element={<PhotoList title={"Dogs"} />} />
        <Route path="/computers" element={<PhotoList title={"Computers"} />} />
        <Route path="/search/:query" element={<PhotoList title={"Search"} />} />
      </Routes>
    </div>
  )
};

export default App;
