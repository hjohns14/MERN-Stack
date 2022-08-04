import React, {useState} from 'react'

const SyntheticEvents = () => {
    const [count, setCount] = useState(5)
    return (
        <div>
        {count > 0 &&
            <button onClick={() => setCount(count - 1)}>Click me</button>
        }
            

        
        <p>You have {count} clicks left</p>
        </div>
    )
}

export default SyntheticEvents