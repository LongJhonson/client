import React from 'react';
import './App.scss';

function App() {
	
  return (
    <div className="app">
		<h1>Sistema de rutas basico</h1>
    </div>
  );
}

function Home(){
	return <h2>Estamos en el componente Home</h2>;
}


function Contact(){

	return <h2>Componente Contact</h2>;
}
export default App;
