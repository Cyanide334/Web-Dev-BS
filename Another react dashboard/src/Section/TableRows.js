import React from 'react'

export const TableRows = ({element}) => {
    return (
    <tr>
        <td>{element.index}</td>
        <td>{element.Header1}</td>
        <td>{element.Header2}</td>
        <td>{element.Header3}</td>
        <td>{element.Header4}</td>
    </tr>
    )
}
