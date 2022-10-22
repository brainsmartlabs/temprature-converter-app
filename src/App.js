import './App.css';
import { useEffect, useState } from 'react';
import Child from './Child';

function App() {

  const [tempObj, setTempObj] = useState({
    scale: 'celsius',
    temprature: 0,
  });

  const celsius = (tempObj.scale === 'faranhiet' || tempObj.scale == 'kelvin') ?
    (tempObj.scale == 'faranhiet') ? f2c(tempObj.temprature) : k2c(tempObj.temprature)
    : tempObj.temprature;


  const faranhiet = (tempObj.scale === 'celsius' || tempObj.scale == 'kelvin') ?
    (tempObj.scale == 'celsius') ? c2f(tempObj.temprature) : k2f(tempObj.temprature)
    : tempObj.temprature;


  const kelvin = (tempObj.scale === 'celsius' || tempObj.scale == 'faranhiet') ?
    (tempObj.scale == 'celsius') ? c2k(tempObj.temprature) : f2k(tempObj.temprature)
    : tempObj.temprature;

  function f2c(value) {
    return ((value - 32) * 5) / 9;
  }

  function k2c(value) {
    return value - 273;
  }

  function c2f(value) {
    return (value * 1.8) + 32;
  }

  function k2f(value) {
    return ((value - 273) * 1.8) + 32;
  }

  function c2k(value) {
    return value + 273;
  }

  function f2k(value) {
    return (((value - 32) * 5) / 9) + 273
  }

  function onCelsiusChange(tempValue) {
    setTempObj({
      scale: 'celsius',
      temprature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  function onFaranhietChange(tempValue) {
    setTempObj({
      scale: 'faranhiet',
      temprature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  function onKelvinChange(tempValue) {
    setTempObj({
      scale: 'kelvin',
      temprature: isNaN(tempValue) ? 0 : tempValue,
    });
  }


  return (
    <div style={{ "textAlign": "center" }}>
      <h2>Celcius: <Child temprature={celsius} onTempratureChange={onCelsiusChange} /></h2>
      <h2>Faranhiet: <Child temprature={faranhiet} onTempratureChange={onFaranhietChange} /></h2>
      <h2>Kelvin: <Child temprature={kelvin} onTempratureChange={onKelvinChange} /></h2>
    </div>
  );
}

export default App;


