import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {

  const traveldata = data.map(item => {
    return <Card key={item.id} {...item}/>
  })

  return (
    <div className="App">
      <Navbar />
      {traveldata}
    </div>
  );
}

export default App;
