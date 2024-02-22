import React from 'react'

const Banner = (props) => {
    return (
        <>
            <div className="mx-auto max-w-1xl py-2 text-center sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        {props.text}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Banner