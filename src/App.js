import { useEffect, useRef, useState } from 'react';
import './App.css';
import ComponentHistory from './components/history/History';
function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }
  const [ secondNumber, setSecondNumber ]  = useState (null);
  
  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber:", secondNumber);
    }
  )
//Cuando cambia el valor del input se ejecuta la funcion changeFirstNumberHandler
// la funcion changeFirstNumberHandler ejecuta el useState y cambia el valor de 
//firstNumber
//useEffect contiene una funcion flecha que se ejecuta al cambiar el firstNumber.

//Funciones para  + - * /
const [result, setResult]= useState(null)
function sumeOnClickHandler (){
  setResult (parseInt(firstNumber)+parseInt(secondNumber));
 }
 function restOnClickHandler (){
  setResult (parseInt(firstNumber) - parseInt(secondNumber));
}
function multiplyOnClickHandler (){
  setResult (parseInt(firstNumber) * parseInt(secondNumber));
}
function divideOnClickHandler () {
  setResult (parseInt(firstNumber) / parseInt(secondNumber));
}
//Borrar campos
function eraseOnClickHandler(){
  setResult("");
  setFirstNumber("");
  setSecondNumber("");
}
//Memoria
const memory = useRef()
function saveNumber(){
    memory.current = result
}
//Copia valor de memoria en firstNumber
function memoryCopy (){
  setFirstNumber (memory.current)
}
//Historial
const [resultHistory, setResultHistory] = useState([]);

//Importa el componente `History` en el componente principal 
//e incorpólo en su salida, proporcionando como prop `results` 
//el contenido de `resultsHistory`.
const firstRender = useRef(true);
useEffect (
  ()=>{
    if (firstRender.current === true){
      firstRender.current=false} else {
      if (result !=""){setResultHistory([...resultHistory,result]);}
    }
  },
  [result]
)
return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <input type="button" value="+" onClick={sumeOnClickHandler}/>
      <input type="button" value="-" onClick={restOnClickHandler}/>
      <input type="button" value="*" onClick={multiplyOnClickHandler}/>
      <input type="button" value="/" onClick={divideOnClickHandler}/>
      <input type="button" value="C" onClick={eraseOnClickHandler}/>
      <input type="button" value="M+" onClick={saveNumber}/>
      <input type="button" value="MR" onClick={memoryCopy}/>
      <h1>Resultado:</h1><p>{result}</p>
      <ComponentHistory historial={resultHistory}/>     
    </>
  );
}

export default App;
