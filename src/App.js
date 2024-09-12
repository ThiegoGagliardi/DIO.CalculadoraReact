import { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';

const App = () => {
  
  const[currentNumber, setCurrentNumber] = useState("0");
  const[firstNumber, setFirstNumber] = useState("0");
  const[operation, setOperation] = useState("");
  const[isResult, setIsResult] = useState(false);

  const handleAddNumber = (num) =>{

    if (isResult){
      setCurrentNumber(prev => num);
      setIsResult(false);      
    } else {
     setCurrentNumber(prev => `${prev === '0'?'':prev}${num}`);
    }
  };

  const handleOnClear = () =>{
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation('');
    setIsResult(false);
  }

  const handleSum = () => {
    setOperation('+');
    setIsResult(true);
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);      
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(sum);
      setCurrentNumber(String(sum));      
    }      
  }

  const handleSub = () => {

    setOperation('-');
    setIsResult(true);

    if (firstNumber === "0") {
      setFirstNumber(currentNumber);      
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setFirstNumber(sub);
      setCurrentNumber(String(sub));      
    }     
  }

  const handleMult = () => {

    setOperation('X');
    setIsResult(true);

    if (firstNumber === "0") {
      setFirstNumber(currentNumber);      
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setFirstNumber(mult);
      setCurrentNumber(String(mult));      
    }     
  } 
  
  const handleDiv = () => {

    setOperation('/');
    setIsResult(true);

    if (firstNumber === "0") {
      setFirstNumber(currentNumber);      
    }else{
      if (currentNumber === "0"){
        alert('Divisão por zero');
        return ;
      }
      const div = Number(firstNumber) / Number(currentNumber);
      setFirstNumber(div);
      setCurrentNumber(String(div));      
    }     
  }   

  const handleEquals = () =>{
    if((firstNumber !== '0')  && (!operation !== '') && (firstNumber !== '0')){

      switch(operation){
        case '+': handleSum(); break;
        case '-': handleSub(); break;
        case 'X': handleMult(); break;
        case '/': handleDiv(); break;
      }
      
    }    
    setFirstNumber(0);
    setOperation('');
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
            <Button label="X" onClick={handleMult}/>
            <Button label="/" onClick={handleDiv}/>
            <Button label="-" onClick={handleSub}/>
            <Button label="+" onClick={handleSum} />
        </Row>         
        <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="C"  onClick={handleOnClear}/>
        </Row>          
        <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="=" onClick={handleEquals}/>
          </Row>        
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />            
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />            
          </Row>
      </Content>
    </Container>
  );
}

export default App;
