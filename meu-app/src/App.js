// import logo from './logo.svg';
import './App.css';
import logo from "./img/logo.png";

function App() {
  const nome = "Lucas";

  function olaMundo(){
    alert("Olá, Mundo!")
  };

  const onClickBotao = () => {
    alert("Botão foi clicado!")
};

 return (
    <>
      <div className="container">
        <h1>Aprenda React na Labenu!</h1>
        <div>
          <div>
            <img className="Logo" src={logo} alt="logo"/>
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao}> Clique aqui! </button><br></br>
            <button onClick={olaMundo} className="meu-nome">Clique em mim, {nome}!</button>
          </div>
        </div>
      </div>


    </>
  );
}
export default App;




