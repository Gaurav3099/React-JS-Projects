import './App.css';
import React, {useState} from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  let amount=parseInt(count);
  if(count <=0){
    amount = 1;
  }else if(count >8){
    amount = 9;
  }
    setText(data.slice(0,amount));
  }
  return (
    <div className='main-container'>
      <h1>Generate Lorem Ipsum</h1>

    <form className='loremForm' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Paragraphs: </label>
      <input type='number'
          name='amount'
          id='amount'
          value={count}
          className='no-of-para'
          onChange={(e) => setCount(e.target.value)}></input>
          <button className='gen'>Generate</button>
    </form>
    <article class="lorem-text" id="lorem-text">
      {
        text.map((item, index) => {
          return <p key={index}>{item}</p>
        })
      }
    </article>
    </div>
  );
}

export default App;
