import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">Ты сегодня покормил кота?</h1>
        <div className="cards">
          <Card
            meat={'фуа-гра'}
            portion={10}
            mice={1}
            weight={'0,5'}
            description={'Печень утки разварная с артишоками.'}
            available={true}
          />
          <Card
            meat={'рыбой'}
            portion={40}
            mice={2}
            weight={'2'}
            description={'Головы щучьи с чесноком да свежайшая сёмгушка.'}
            available={true}
          />
          <Card
            meat={'курой'}
            portion={100}
            mice={5}
            weight={'5'}
            description={'Филе из цыплят с трюфелями в бульоне.'}
            available={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
