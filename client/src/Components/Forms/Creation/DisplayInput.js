import React from 'react'

export const DisplayInput = ({ input }) => {
    return (
        <div>
            <p>{input.label}</p>
            <p>{input.description}</p>
            <p>{input.type}</p>
        </div>
    )
}
