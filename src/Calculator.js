import React, { useState } from "react";

export default function Calculator(props) {
    let [firstNumber, setFirstNumber] = useState('');
    // let [secondNumber, setSecondNumber] = useState('');
    let first = 0.80;
    let second = 0.90;
    let third = 0.95;
    let [unit, setUnit] = useState(`${first}`);
    let usd = props.info;
    let [moneyUpwork, setmoneyUpwork] = useState('');
    let [moneyPayoneer, setmoneyPayoneer] = useState('');
    let [moneyUah, setMoneyUah] = useState('');

    function calculatingNumber() {
        setmoneyUpwork(firstNumber * unit);
        setmoneyPayoneer(moneyUpwork - 1);
        setMoneyUah(Math.round(moneyPayoneer * 0.98 * usd));
    }

    function changeUnit(event) {
        event.preventDefault();
        setFirstNumber('');
        setUnit(event.target.value );
    } 
    return (
        <div className="Calculator">
            <p className="text">Гайда рахувати скільки ти заробив!</p>
            <form onSubmit={event => { event.preventDefault(); calculatingNumber(); }}>
                <legend>Чи добре ти знайом з клієнтом?</legend>
                <div>
                    <select name="first unit" value={unit} onChange={changeUnit}>
                        <option value={first}>Ні - заробив з ним менше 500 $</option>
                        <option value={second}>Так - заробив з ним більше 500 $</option>
                        <option value={third}>Заробив шалену купу грошей</option>
                    </select>
                </div>
                <div>
                    <input type="text" onChange={event => { setmoneyUpwork(''); setmoneyPayoneer(''); setMoneyUah(''); setFirstNumber(event.target.value); }} value={firstNumber} />
                </div>
                <div>
                    <input type = "submit" value="Порахувати" onSubmit={event => { event.preventDefault(); calculatingNumber(); }}/>
                </div>
            </form>
            <p className="hi">
                Вітаю, Дмитро!
            </p>
            <p className="number">
                Ти заробив на UpWork: <p className="hi">{moneyUpwork} $</p>  
            </p>
            <p className="number">
                На Payoneer ти отримаєш: <p className="hi">{moneyPayoneer} $</p> 
            </p>
            <p className="number">
                На PrivatBank тобі прийде: <p className="hi">{moneyUah} ₴</p> 
            </p>            
        </div>
    );
}