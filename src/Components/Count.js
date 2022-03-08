import React, { useState } from 'react';

function Counts() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    function incCount() {
        setCount(count + 1)
    }
    function decCount() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
    return (
        <div className='innerWrapper'>
            <h1>Counter {count}</h1>
            <button onClick={incCount}>+</button>
            <button onClick={decCount}>-</button>
            <button onClick={reset}>reset</button>
        </div >
    );
}

export default Counts