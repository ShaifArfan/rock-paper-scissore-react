import {useState} from 'react';

export default function useBoard (){
    const [score, setScore] = useState([0,0]);
    const [state, setState] = useState(1);
    return {state, setState, score, setScore}
}