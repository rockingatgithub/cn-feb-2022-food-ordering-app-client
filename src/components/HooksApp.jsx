import React, { useEffect, useState } from 'react';

function HooksApp(props) {

    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(true)


    useEffect(() => {
     console.log('Component Mounted!')
    }, [])

    useEffect(() => {
        console.log('Component counter props changed!')
       }, [counter, toggle])

    useEffect(() => {
        return () => {
            console.log("component will unmount!")
        }
    })


    return (
        <div>

            <div> { counter }  </div>
            <button onClick={() => setCounter(counter+1)}  > + </button>
            <button onClick={() => setCounter(counter-1)}  > - </button>
            <div>{toggle ? 'true' : 'false'}</div>
            <button onClick={() => setToggle(!toggle)} > Set Toggle  </button>

            
        </div>
    );
}

export default HooksApp;