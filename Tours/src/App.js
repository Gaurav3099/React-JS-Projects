import './App.css';
import react, {useState, useEffect} from 'react';
import Tours from './tours';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true)

  const Loading = () => {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours);
    }catch (error){
      setLoading(true)
      console.log(error);
    }
  }

  if(tours.length === 0){
    return(
        <div className='no-tours'>
          <h2>No Tours Left</h2>
          <button className='refresh-btn' onClick={() => fetchTours()}>refresh</button>
        </div>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
