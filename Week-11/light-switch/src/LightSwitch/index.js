import { useState } from 'react';

export const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    return <>
    <div>
        <h3>
        The room is {isOn ? 'lit' : 'dark'}
        </h3>
        <button onClick={() => setIsOn(!isOn)}> 
            flip
        </button>
    </div>
    <div className={`room-${isOn ? 'lit' : 'dark'}`}>
    </div>
    </>
}