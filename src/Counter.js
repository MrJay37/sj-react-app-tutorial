// Data can flow into JS components in two ways
// First is, it can come from parent component as props
// Second is, component can maintain it's own state 
// useState is a function that allows you to maintain value within React component
import { useState } from 'react'  

// Counter component does not need props
const Counter = () => {
    // Syntax for useState
    // Provide a variable and a modifier
    // Provie an initial value
    const [count, setCount] = useState(0)

    /**
     * In the definition above
     * count => variable
     * setCount => modifier
     * 0 = intial value
     */

    // Event handler function for +1 button
    const increaseCount = event => {
        // evt object is core HTML information
        // This is useful to get information about
        // the HTML component that was interacted with
        // console.log(event.target.id)
        setCount(count + 1)
    }

    const decreaseCount = evt => setCount(count - 1)

    const resetCount = evt => setCount(0)


    return <div>
        <h1>This is a Counter</h1>
        <div>Count is at {count}</div>
        {/* 
            Button to increase count, use onClick event
            onClick is an HTML property, however, 
            it uses JavaScript
            onClick is not limited to buttons only, you can use
            it in other HTML tags as well
        */}
        <button id='increase' onClick={increaseCount}>+</button>
        <button id='decrease' onClick={decreaseCount}>-</button>
        <button id='reset' onClick={resetCount}>Reset</button>
    </div>
}

export default Counter
