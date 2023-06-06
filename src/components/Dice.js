import React from 'react';
import { useState } from 'react';

function Dice() {
    const [dice, setDice] = useState("/dice3.png")
    const aleaIactaEst = async () => {
        setDice("/dice-Empty.png");
        await new Promise(resolve => setTimeout(resolve, 1000));

        const rolledDice = getRandomDice();
        setDice(rolledDice);
    }

    const getRandomDice = () => {
        const getRandomDice = ['/dice1.png', '/dice2.png', '/dice3.png',"/dice4.png", "/dice5.png", "/dice6.png"];
        const randomIndex = Math.floor(Math.random() * getRandomDice.length);
        return getRandomDice[randomIndex];
      };
  return (
    <div>
        <img src={dice} onClick={aleaIactaEst} alt="ROLL EM" />
    </div>
  )
}

export default Dice