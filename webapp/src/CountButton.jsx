import { useState } from "react"

export function CountButton( ) {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((count) => count + 1)
    }

    return (
        <button onClick={handleClick}>
          count is {count}
        </button>
    )
}