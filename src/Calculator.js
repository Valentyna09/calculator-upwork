import React, { useState } from "react";

export default function Calculator(props) {
    // let first = 0.80;
    // let second = 0.90;
    // let third = 0.95;
    let usd = props.info;
    // let [unit, setUnit] = useState(`${first}`);
    let [firstNumber, setFirstNumber] = useState('');
     let [moneyUpwork, setmoneyUpwork] = useState('');
    let [secondNumber, setSecondNumber] = useState(`${moneyUpwork}`);
    let [thirdNumber, setThirdNumber] = useState('');
   
    let [moneyPayoneer, setmoneyPayoneer] = useState('');
    let [moneyUah, setMoneyUah] = useState('');

    return (
        <div className="Calculator">
            <form onSubmit={event => { event.preventDefault(); setmoneyUpwork((firstNumber * 0.88).toFixed(2)); setSecondNumber(moneyUpwork); }}>
                <h2>Загальна сума заробітку:</h2>
                <div>
                    <input type="text" onChange={event => { setmoneyUpwork(''); setFirstNumber(event.target.value); }} value={firstNumber} />
                </div>
                <div>
                    <input type = "submit" value="Порахувати"/>
                </div>
            </form>
            <div className="number">
                <h2>Cума заробітку після сплати комісії UpWork:</h2>
                <p className="hi">{moneyUpwork} $</p>
            </div>

            <form onSubmit={event => { event.preventDefault(); setmoneyPayoneer((secondNumber - 1)); setThirdNumber(moneyPayoneer); }}>
                <div>
                    <input type="text"  onChange={event => { setmoneyPayoneer(''); setSecondNumber(event.target.value); }} value={secondNumber}/>
                </div>
                <div>
                    <input type = "submit" value="Порахувати"/>
                </div>
            </form>
            <div className="number">
               <h2>На Payoneer ти отримаєш:</h2>
                <p className="hi">{moneyPayoneer} $</p> 
            </div>

            <form onSubmit={event => { event.preventDefault(); setMoneyUah(((thirdNumber * 0.98 * usd).toFixed(2)) + " ₴");}}>
                <div>
                    <input type="text"  onChange={event => { setMoneyUah(''); setThirdNumber(event.target.value); }} value={thirdNumber}/>
                </div>
                <div>
                    <input type = "submit" value="Порахувати" onSubmit={event => { event.preventDefault(); setMoneyUah((thirdNumber * 0.98 * usd).toFixed);}}/>
                </div>
            </form>
            <div className="number">
                <h2>На PrivatBank тобі прийде:</h2> 
                <p className="hi">{moneyUah} </p> 
            </div>            
        </div>
    );
}
