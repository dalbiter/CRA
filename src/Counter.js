import React, { useState } from 'react'; //make sure to import 'useState', it is a named export

const Counter = () => {
    const [count, setCount] = useState(99)
    const clickAdd = () => {
        setCount(count + 1)
    }
    // can set up a separate function like 'clickAdd' above or can write inline like 'Subract' button below
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={clickAdd}>Add</button> 
            <button onClick={() => (setCount(count - 1))}>Subtract</button>
        </div>
        
    )
};

export default Counter;