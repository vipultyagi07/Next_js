"use client"
import React, { useState } from 'react'


const Page = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {

        return setCount(count + 1);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col space-y-4">
                <button onClick={handleClick}>
                    Tap to increase the count
                </button>
                <div>
                    {count}
                </div>
            </div>
        </div>
    );


}

export default Page