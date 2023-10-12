import LuckyNumber from './components/LuckyNumbers';
import Greeting from './components/Greeting';
import PastResults from './components/PastResults';
import './style/App.css';

function App() {
  return (
    <div>
      <Greeting person={ { firstName: 'Chapolin', lastName: 'Colorado' } } />
      <LuckyNumber />
      <PastResults />
    </div>
  );
}

export default App;
