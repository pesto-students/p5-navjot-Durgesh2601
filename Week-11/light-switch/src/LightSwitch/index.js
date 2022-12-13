import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const state = useSelector((state) => state);
    const { background, textContent } = state;
    const dispatch = useDispatch();
    console.log(background, textContent)
    const handleFlip = () => {
        dispatch({type:'TOGGLE'});
    }
    return <>
    <div>
        <h3>
        The room is {textContent}
        </h3>
        <button onClick={handleFlip}> 
            flip
        </button>
    </div>
    <div className={`room-${textContent}`}>
    </div>
    </>
}