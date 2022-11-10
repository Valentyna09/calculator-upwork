import React, { useState } from "react";

export default function Calculator(props) {
    let first = 0.80;
    let second = 0.90;
    let third = 0.95;
    let usd = props.info;
    let [unit, setUnit] = useState(`${first}`);
    let [firstNumber, setFirstNumber] = useState('');
    let [secondNumber, setSecondNumber] = useState('');
    let [thirdNumber, setThirdNumber] = useState('');
    let [moneyUpwork, setmoneyUpwork] = useState('');
    let [moneyPayoneer, setmoneyPayoneer] = useState('');
    let [moneyUah, setMoneyUah] = useState('');

    return (
        <div className="Calculator">
            <p className="text">Гайда рахувати скільки ти заробив!</p>
            <form onSubmit={event => { event.preventDefault(); setmoneyUpwork((firstNumber * unit).toFixed(2)); }}>
                <legend>Чи добре ти знайом з клієнтом?</legend>
                <div>
                     <select name="first unit" value={unit} onChange={event => { event.preventDefault(); setFirstNumber(''); setUnit(event.target.value ); }}>
                        <option value={first}>Ні - заробив з ним менше 500 $</option>
                        <option value={second}>Так - заробив з ним більше 500 $</option>
                        <option value={third}>Заробив шалену купу грошей</option>
                    </select>
                </div>
                <div>
                    <input type="text" onChange={event => { setmoneyUpwork(''); setFirstNumber(event.target.value); }} value={firstNumber} />
                </div>
                <div>
                    <input type = "submit" value="Порахувати" onSubmit={event => { event.preventDefault(); setmoneyUpwork((firstNumber * unit).toFixed(2)); }}/>
                </div>
            </form>
            <p className="hi">
                Вітаю, Дмитро!
            </p>
            <p className="number">
                Ти заробив на UpWork: <p className="hi">{moneyUpwork} $</p>  
            </p>

            <form onSubmit={event => { event.preventDefault(); setmoneyPayoneer(secondNumber - 1); }}>
                <div>
                    <input type="text"  onChange={event => { setmoneyPayoneer(''); setSecondNumber(event.target.value); }} value={secondNumber}/>
                </div>
                <div>
                    <input type = "submit" value="Порахувати" onSubmit={event => { event.preventDefault(); setmoneyPayoneer(secondNumber - 1);}} />
                </div>
            </form>
            <p className="number">
                На Payoneer ти отримаєш: <p className="hi">{moneyPayoneer} $</p> 
            </p>

            <form onSubmit={event => { event.preventDefault(); setMoneyUah((thirdNumber * 0.98 * usd).toFixed(2));}}>
                <div>
                    <input type="text"  onChange={event => { setMoneyUah(''); setThirdNumber(event.target.value); }} value={thirdNumber}/>
                </div>
                <div>
                    <input type = "submit" value="Порахувати" onSubmit={event => { event.preventDefault(); setMoneyUah((thirdNumber * 0.98 * usd).toFixed);}}/>
                </div>
            </form>
            <p className="number">
                На PrivatBank тобі прийде: <p className="hi">{moneyUah} ₴</p> 
            </p>            
        </div>
    );
}