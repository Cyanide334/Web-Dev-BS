import React from 'react'

export const TableHeader = () => {
    const data = ["#", "Header", "Header", "Header", "Header"]

    return (
        <thead>
            <tr>
                {data.map( (element,index) => {return <th scope="col" key={index} >{element}</th> })}
            </tr>
        </thead>
    )
}
