import { useState, useEffect } from 'react';
import axios from 'axios';

function DolarCotacao() {
  const [cotacao, setCotacao] = useState('');

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .then(response => {
        const valor = response.data['USDBRL'].bid; //é usada para acessar a propriedade bid do objeto correspondente ao par de moedas USDBRL. A propriedade bid é a cotação atual do dólar americano para compra em reais brasileiros.
        setCotacao(valor);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Cotação do dólar: R$ {cotacao}</h2>
    </div>
  );
}

export default DolarCotacao;
