import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const customButton = styled.button`
    width: 10px;
    height: 10px;
    background-color: aliceblue;
  `

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a practice project!
        </p>
        <customButton>click me</customButton>
      </header>
    </div>
  );
}

export default App;
