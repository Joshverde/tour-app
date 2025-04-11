import React, { useState} from 'react';
import Gallery from './components/Gallery.jsx'
import './styles/styles.css'

function App(){
  const [tours,setTours] = useState([])
  
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main> 
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />

    </main>
  )
}

export default App