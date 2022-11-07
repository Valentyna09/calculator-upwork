import React, { useState } from "react";

export default function Calculator(props) {
    let [firstNumber, setFirstNumber] = useState('');
    let [secondNumber, setSecondNumber] = useState('');
    let first = 0.80;
    let second = 0.90;
    let third = 0.95;
    let [unit, setUnit] = useState(`${first}`);
    let usd = props.info;

    function calculatingNumber() {
        let x = firstNumber * unit;
        let y = (x - 1) * 0.98 * usd;
        setSecondNumber(Math.round(y));
        
        // setSecondNumber( ((firstNumber * unit) - 1) * 0.98 * usd );
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
                        <option value={first}>Ні - заробив з ним менше 500 гривень</option>
                        <option value={second}>Так - заробив з ним більше 500 гривень</option>
                        <option value={third}>Заробив шалену купу грошей</option>
                    </select>
                </div>
                <div>
                    <input onChange={event => { setSecondNumber(''); setFirstNumber(event.target.value); }} value={firstNumber} />
                </div>
            </form>
            <p className="hi">
                Вітаю, Дмитро!
            </p>
            <p className="number">
                Ти заробив: <p className="hi">{secondNumber}</p> грн.  
            </p>
        </div>
    );
}