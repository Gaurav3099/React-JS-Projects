// import logo from './logo.svg';
import './App.css';
import './newstyle.css';
import Blogimport from './Blogimport'; //.js is not required in file name added by default

function App() {
  const syt = {
    fontSize:'64px',
    color:'blue'
  }
  const blogObj = {
    title: 'This is title',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
  const blogArr = [
    {
      id: 1,
      title: 'This is title 1',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
      id: 2,
      title: 'This is title 2',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
      id: 3,
      title: 'This is title 3',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
]
const blogItems = blogArr.map((item,pos) =>{
  console.log(item);

  return(
    <div className="newsyt" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.para}</p>
    </div>
  )
})
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>This is React app</p>

        <div>
        <p style={{color: "yellow"}}>Using Object</p>
          <h3>{blogObj.title}</h3>
          <p>{blogObj.para}</p>
        </div>

        <p style={{color: "yellow"}}>Using new CSS file</p>
        <div className="newsyt">
          <h3>{blogObj.title}</h3>
          <p>{blogObj.para}</p>
        </div>

      <p style={{color: "yellow"}}>Using same file</p>
      <div style={syt}>
        <p>This is a paragraph</p>
      </div>

      <p style={{color: "yellow"}}>Using map function</p>
      <div className="newsyt">
        {blogItems}
      </div>

      <p style={{color: "yellow"}}>Import</p>

      <Blogimport/>

      </header>
    </div>
  );
}

export default App;
