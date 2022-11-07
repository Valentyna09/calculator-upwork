import React, { useState } from "react";

export default function Calculator(props) {
    let [firstNumber, setFirstNumber] = useState('');
    let [secondNumber, setSecondNumber] = useState('');
    let [firstUnit, setFirstUnit] = useState('');
    let first = 0.80;
    let second = 0.90;
    let third = 0.95;
    let usd = props.info;

    function calculatingNumber() {
        setSecondNumber( ((firstNumber * firstUnit) - 1) * 0.98 * usd);
    }
        function changeFirstUnit(event) {
        event.preventDefault();
        setFirstNumber('');
        setFirstUnit(event.target.value );
    } 
    return (
        <div className="Calculator">
            <p className="text">Гайда рахувати скільки ти заробив!</p>
            <form onSubmit={event => { event.preventDefault(); calculatingNumber(); }}>
                <legend>Чи добре ти знайом з клієнтом?</legend>
                <div>
                    <select name="first unit" value={firstUnit} onChange={changeFirstUnit}>
                        <option value={first}>Ні - заробив з ним менше 500 гривень</option>
                        <option value={second}>Так - заробив з ним більше 500 гривень</option>
                        <option value={third}>Заробив шалену купу грошей</option>
                    </select>
                </div>
                <div>
                    <input onChange={event => { setFirstNumber(event.target.value); }} value={firstNumber} />
                </div>
            </form>
            <p className="hi">
                Вітаю, Дмитро!
            </p>
            <p className="number">
                Ти заробив: <p className="hi">{secondNumber}</p> гривень   
            </p>
        </div>
    );
}