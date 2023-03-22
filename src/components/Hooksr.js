import React, { useState } from 'react';

const Hooksr = () => {

    //useState//////////////////////////
    const [count, setCount] = useState(4)
    const [color, setColor] = useState("Blue")
    const [inputValue, newInputValue] = useState('Rosy')

    function incrementCount() {
        setCount(pcount => pcount + 1)
        setColor("Red")
    }

    const changingInput = (val) => {
        const newval = val.target.value;
        newInputValue(newval)
    }
    ////////////////////////////////////

    //useEffect//////////////////////////
    ////////////////////////////////////

    return (
        <>
            {/* //useState////////////////////////// */}
            <div>
                <button onClick={() => setCount(count - 1)}>-</button>
                <span>{count}{color}</span>
                <button onClick={incrementCount} >+</button>
            </div>
            <div>
                <h2>{inputValue}</h2>
                <input type='text' value={inputValue} placeholder='Type something...' onChange={changingInput} />
            </div>
            {/* //////////////////////////////////// */}

            {/* //useEffect////////////////////////// */}
            {/* //////////////////////////////////// */}
        </>

    )
}

export default Hooksr