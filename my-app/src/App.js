import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HooksCounterFour from './Components/HooksCounterFour';
import ClassCounterOne from './Components/ClassCounterOne';
import HookCounterOne from './Components/HookCounterOne';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <HookCounterOne />
        <ClassCounterOne />
        <HooksCounterFour />
        <HookCounterThree />
        <ClassCounter />
        <HookCounter />
        <HookCounterTwo />
    </div>
  );
}

export default App;
