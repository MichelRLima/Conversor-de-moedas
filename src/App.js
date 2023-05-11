import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DolarCotacao from './DolarCotacao';
import Dropdown from 'react-bootstrap/Dropdown';
import {TbArrowsDownUp } from 'react-icons/tb'
import { RiCoinsLine } from 'react-icons/ri'
import {GiTwoCoins} from 'react-icons/gi'
function App() {
    const [usd, setUsd] = useState("")
  useEffect(() =>{
    axios.get(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
    .then(response =>{
      const usd = response.data[`USDBRL`].bid
      setUsd(usd)
    })

  }, [])

  const [moeda, setMoeda] = useState("USD") //Escolher moeda
  const [coins, setCoins] = useState("0") //Definir a quantiade em R$ para converter
  const [valorMoeda, setValorMoeda] = useState("") //Valor da moeda selecionada
  const [conversao, setConversao] = useState("0") //mostrar valor do conversai de real para a moeda
  const [real, setReal] = useState("0")


  useEffect(() => {
    axios.get(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`)
      .then(response => {
        const valor = response.data[`${moeda}BRL`].bid; //é usada para acessar a propriedade bid do objeto correspondente ao par de moedas USDBRL. A propriedade bid é a cotação atual do dólar americano para compra em reais brasileiros.
        setValorMoeda(valor);
        
      })
      .catch(error => {
        console.error(error);
      });
      
      
  }, [moeda, coins]);



  const handleInputMoeda = (event) => {
    setCoins(event.target.value);
    setReal((event.target.value * valorMoeda).toFixed(2)); // atualiza o valor do input2 com o dobro do valor do input1
  };

  const handleInputReal = (event) => {
    setReal(event.target.value);
    setCoins((event.target.value / valorMoeda).toFixed(2)); // atualiza o valor do input1 com a metade do valor do input2
  };


  const setarUSD = ()=>{
    setMoeda("USD")
    setReal(0);
    setCoins(0);
  }

  const setarEUR = ()=>{
    setMoeda("EUR")
    setReal(0);
    setCoins(0);
  }

  const setarGBP = ()=>{
    setMoeda("GBP")
    setReal(0);
    setCoins(0);
  }

  const setarJPY = ()=>{
    setMoeda("JPY")
    setReal(0);
    setCoins(0);
  }

  const setarCHF = ()=>{
    setMoeda("CHF")
    setReal(0);
    setCoins(0);
  }

  const setarCAD = ()=>{
    setMoeda("CAD")
    setReal(0);
    setCoins(0);
  }

  const setarAUD = ()=>{
    setMoeda("AUD")
    setReal(0);
    setCoins(0);
  }




  return (
    <div className="App">

      <div className='containerTitulo'> 
     <GiTwoCoins className='moedaSVG' size={32}/>
      <h1 className='titulo'>Coin to Real</h1>
      <RiCoinsLine className='moedaSVG' size={32}/>
      </div>
      
      
      <div className='containerMoeda'>
      <Dropdown> 
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {moeda}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item style={{display: 'flex'}} onClick={setarUSD}>USD<div className='flagUSD'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarEUR}>EUR<div className='flagEUR'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarGBP}>GBP<div className='flagGBP'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarJPY}>JPY<div className='flagJPY'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarCHF}>CHF<div className='flagCHF'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarCAD}>CAD<div className='flagCAD'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarAUD}>AUD<div className='flagAUD'></div></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <input className='Moeda' type='number' value={coins} onChange={handleInputMoeda}></input>
      

    </div>

    <TbArrowsDownUp className='seta' size={32}/>

    <br/>
    <div className='containerReal'>

      <div className='BRL'><p>BRL</p></div>

    <input className='Real' type='number' value={real} onChange={handleInputReal}></input>
    </div>
   

    <div className='containerReal'>
      
    </div>
    </div>
  );
}

export default App;
