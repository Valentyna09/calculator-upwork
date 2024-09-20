import React,{useState} from 'react';
import axios from 'axios';
import Calculator from './Calculator';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';

export default function App() {
  let [rates, setRates] = useState({ loaded: false });
  
    function apiUrl() {
    let url = `https://api.monobank.ua/bank/currency`;
    axios.get(url).then(exchangeRates);
  }

 function exchangeRates(response) {
    setRates({
      loaded: true,
      // unitName: response.data[0].ccy,
      unitUsd: response.data[0].rateBuy,
    });
  }

  
if(rates.loaded) {
    return (
      <div className="App">
        <h1>UpWork <br/> Income Calculator</h1>
          <div>
            {/* <p className='unit'>{rates.unitName} зараз коштує:</p>  Comment */}
            <p className='unit'>USD зараз коштує:</p>
            <p className='count'>{rates.unitUsd} UAH</p>
          </div>
          <Calculator info={rates.unitUsd} />
        </div>
    );
  } else {
    apiUrl();
    return ( 
        <div className="Loading">
            <ThreeDots 
            height="100" 
            width="100" 
            radius="9"
            color="green" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
                />
        </div>
    );
  }
}
