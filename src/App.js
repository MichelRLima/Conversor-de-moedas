import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {TbArrowsDownUp } from 'react-icons/tb'
import { RiCoinsLine } from 'react-icons/ri'
import {GiTwoCoins} from 'react-icons/gi'
import Slide from './Slide';
import { format } from 'date-fns';
function App() {
  const dataAtual = new Date();
  const dataFormatada = format(dataAtual, 'dd/MM/yyyy');

  const [moeda, setMoeda] = useState("USD") //Escolher moeda
  const [coins, setCoins] = useState("") //Definir a quantiade de moedas para converter
  const [valorMoeda, setValorMoeda] = useState("") //Valor da moeda selecionada
  const [real, setReal] = useState("") //quantidade em real

  /*******sessao para cotaçao de cada moeda ************/
  const [USD, setUSD]=useState("")
  const [EUR, setEUR]=useState("")
  const [GBP, setGBP]=useState("")
  const [JPY, setJPY]=useState("")
  const [CHF, setCHF]=useState("")
  const [CAD, setCAD]=useState("")
  const [AUD, setAUD]=useState("")
  const [CNY, setCNY]=useState("")

  useEffect( () =>{
    axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(response => {
      const valor = response.data["USDBRL"].bid;  
        setUSD(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    .then(response => {
      const valor = response.data["EURBRL"].bid;  
        setEUR(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/GBP-BRL")
    .then(response => {
      const valor = response.data["GBPBRL"].bid;  
        setGBP(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/JPY-BRL")
    .then(response => {
      const valor = response.data["JPYBRL"].bid;  
        setJPY(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });
    
    axios.get("https://economia.awesomeapi.com.br/json/last/CHF-BRL")
    .then(response => {
      const valor = response.data["CHFBRL"].bid;  
        setCHF(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/CAD-BRL")
    .then(response => {
      const valor = response.data["CADBRL"].bid;  
        setCAD(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/AUD-BRL")
    .then(response => {
      const valor = response.data["AUDBRL"].bid;  
        setAUD(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });

    axios.get("https://economia.awesomeapi.com.br/json/last/CNY-BRL")
    .then(response => {
      const valor = response.data["CNYBRL"].bid;  
        setCNY(parseFloat(valor).toFixed(2));
    })
    .catch(error => {
      console.error(error);
    });


  }, [])
  

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

  const setarCNY = ()=>{
    setMoeda("CNY")
    setReal(0);
    setCoins(0);
  }
  

  /************************slide***************************/
  const [startIndex, setStartIndex] = useState(0);
  const divsMoeda = [
    <div className='divMoeda'>
      <h4>USD</h4>
      <p>Dolár</p>
      
      <div className='slideBandeiraUSA'></div>
      <h4 className='slideCotacao'>$1 = R${USD}</h4></div>,

    <div className='divMoeda'>
      <h4>EUR</h4>
      <p>Euro</p>

      <div className='slideBandeiraEUR'></div>
      <h4 className='slideCotacao'>€1 = R${EUR}</h4></div>,

    <div className='divMoeda'>
      <h4>GBP</h4>
      <p>Libra Esterlina</p>

      <div className='slideBandeiraGBP'></div>
      <h4 className='slideCotacao'>$1 = R${GBP}</h4></div>,
      
    <div className='divMoeda'>
    <h4>JPY</h4>
    <p>Iene</p>

    <div className='slideBandeiraJPY'></div>
    <h4 className='slideCotacao'>$1 = R${JPY}</h4></div>,

    <div className='divMoeda'>
    <h4>CHF</h4>
    <p>Franco suiço</p>

    <div className='slideBandeiraCHF'></div>
    <h4 className='slideCotacao'>$1 = R${CHF}</h4></div>,

    <div className='divMoeda'>
    <h4>CAD</h4>
    <p>Dolár Canadence</p>

    <div className='slideBandeiraCAD'></div>
    <h4 className='slideCotacao'>$1 = R${CAD}</h4></div>,

    <div className='divMoeda'>
    <h4>AUD</h4>
    <p>Dólar australiano</p>

    <div className='slideBandeiraAUD'></div>
    <h4 className='slideCotacao'>$1 = R${AUD}</h4></div>,
    <div className='divMoeda'>
    <h4>CNY</h4>
    <p>Yuan chinês</p>

    <div className='slideBandeiraCNY'></div>
    <h4 className='slideCotacao'>$1 = R${CNY}</h4></div> 
  ];

  const updateStartIndex = () => {
    setStartIndex(prevIndex => prevIndex + 2 >= divsMoeda.length ? 0 : prevIndex + 2);
  };

  useEffect(() => {
    const intervalId = setInterval(updateStartIndex, 3000);
    return () => clearInterval(intervalId);
  },);

/****************************************************************** */
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
        <Dropdown.Item style={{display: 'flex'}} onClick={setarUSD}><span>USD</span><div className='flagUSD'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarEUR}><span>EUR</span><div className='flagEUR'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarGBP}><span>GBP</span><div className='flagGBP'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarJPY}><span>JPY</span><div className='flagJPY'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarCHF}><span>CHF</span><div className='flagCHF'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarCAD}><span>CAD</span><div className='flagCAD'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarAUD}><span>AUD</span><div className='flagAUD'></div></Dropdown.Item>
        <Dropdown.Item style={{display: 'flex'}} onClick={setarCNY}><span>CNY</span><div className='flagCNY'></div></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <input placeholder='0' className='Moeda' type='number' value={coins} onChange={handleInputMoeda}></input>
      

    </div>

    <TbArrowsDownUp className='seta' size={32}/>

    <br/>
    
    <div className='containerReal'>

      <div className='BRL'><p>BRL</p></div>

    <input placeholder='0' className='Real' type='number' value={real} onChange={handleInputReal}></input>
    </div>
   

    <div className='containerReal'>
      
    </div>

    <h3 className='TituloData'>Cotação atual</h3>
    <p>{dataFormatada}</p>
    <div>
    <Slide startIndex={startIndex} divs={divsMoeda} />
  </div>
    </div>
  );
}

export default App;
