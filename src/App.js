import './App.css';

function App() {
  const myName = "hossam"
  const profilelink = 'https://google.com'

  function greeting(my){ 
    return <h2 class="name-title"> hii, <a href={profilelink}> {my} </a>  </h2>
  }
  return (
    <div className="App">
      <h1> my name andrew </h1>
      { greeting(myName , profilelink) }
      </div>
  );
}

export default App;
