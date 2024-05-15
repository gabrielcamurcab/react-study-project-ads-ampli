import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header nome={props.nome}/>
      <Main nome={props.nome}/>
      <Footer nome={props.nome}/>
    </div>
  );
}

export default App;
