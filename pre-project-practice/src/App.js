import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const CustomButton = styled.button`
    width: 4rem;
    height: 4rem;
    background-color: blue;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a practice project!</p>
        <CustomButton>Click me!</CustomButton>
      </header>
    </div>
  );
}

export default App;
