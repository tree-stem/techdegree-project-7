import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import { Navigate, Routes, Route } from 'react-router-dom';
import PhotoList from './components/PhotoList';
import { useEffect, useState } from 'react';


const App = () => {
  // Assign states to variables
  const [query, setQuery] = useState("");
  const [catPhotos, setCatPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [computerPhotos, setComputerPhotos] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [error, setError] = useState(null);

  // Implement hook to fetch and parse data
  useEffect(() => {
    const fetchData = (query) => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          const data = responseData.photos.photo;

          if (query === "cats") {
            setCatPhotos(data);
          } else if (query === "dogs") {
            setDogPhotos(data);
          } else if (query === "computers") {
            setComputerPhotos(data);
          } else {
            setSearchPhotos(data);
          }
        })
        .catch(error => {
          console.log('Error fetching and parsing data');
          setError(error);
        })
    }

    fetchData('cats');
    fetchData('dogs');
    fetchData('computers');

    if (query) {
      fetchData(query);
    }
  }, [query]);

  // Display friendly message on error
  if (error) {
    return (
      <div>
        <h1>Oops! Something went wrong.</h1>
      </div>
    );
  }

  // Handle query text for user submissions
  const handleQueryText = searchText => {
    setQuery(searchText);
  }

  // Return routes and pass data using props
  return (
    <div>
      <Search changeQuery={handleQueryText} />
      <Nav />

      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList data={catPhotos} pageTitle="cats" />} />
        <Route path="/dogs" element={<PhotoList data={dogPhotos} pageTitle="dogs" />} />
        <Route path="/computers" element={<PhotoList data={computerPhotos} pageTitle="computers" />} />
        <Route path="/search/:query" element={<PhotoList data={searchPhotos} pageTitle={query} />} />
      </Routes>
    </div>
  )
};

export default App;

