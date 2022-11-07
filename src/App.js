import React,{useState} from 'react';
import axios from 'axios';
import Calculator from './Calculator';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';

export default function App() {
  let [rates, setRates] = useState({ loaded: false });
  
  function apiUrl() {
    let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
    axios.get(url).then(exchangeRates);
  }
 function exchangeRates(response) {
    setRates({
      loaded: true,
      unitName: response.data[25].txt,
      unitUsd: response.data[25].rate,
    });
  }
if(rates.loaded) {
    return (
        <div className="App">
          <div>
          <p>{rates.unitName} зараз коштує:</p>
          <p>{rates.unitUsd}</p>
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
