import LuckyNumber from './components/LuckyNumbers';
import Greeting from './components/greeting';
import './style/App.css';

function App() {
  return (
    <div>
      <Greeting person={ { firstName: 'Chapolin', lastName: 'Colorado' } } />
      <LuckyNumber />
    </div>
  );
}

export default App;
