import {useState} from 'react';

export default function useBoard (){
    const [score, _setScore] = useState({
        playerScore: 0,
        botScore: 0
    });
    function setScore(newScore) {
        _setScore(oldScore => {
            return {
                ...oldScore,
                ...newScore
            }
        })
    }
    const [gameState, setGameState] = useState(1);
    return {gameState, setGameState, score, setScore}
}