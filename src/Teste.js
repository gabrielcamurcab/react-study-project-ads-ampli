import './App.css';

function Teste(props) {
  return (
    <div style={
        {
            position: 'absolute',
            color: 'white',
            top: 0,
            fontSize: '2em'
        }
    }>
        {props.mensagem}
    </div>
  );
}

export default Teste;
