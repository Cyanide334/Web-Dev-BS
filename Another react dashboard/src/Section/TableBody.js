import React from 'react'
import { TableRows } from './TableRows'

export const TableBody = () => {
    const data = [
        {
            index: "1,001",
            Header1: "random",
            Header2: "data",
            Header3: "placeholder",
            Header4: "text"
        },
        {
            index: "1,002",
            Header1: "placeholder",
            Header2: "irrelevant",
            Header3: "visual",
            Header4: "layout"
        },
        {
            index: "1,003",
            Header1: "data",
            Header2: "rich",
            Header3: "dashboard",
            Header4: "tabular"
        },
        {
            index: "1,003",
            Header1: "information",
            Header2: "placeholder",
            Header3: "illustrative",
            Header4: "data"
        },
        {
            index: "1,004",
            Header1: "text",
            Header2: "random",
            Header3: "layout",
            Header4: "dashboard"
        },
        {
            index: "1,005",
            Header1: "dashboard",
            Header2: "irrelevant",
            Header3: "text",
            Header4: "placeholder"
        },
        {
            index: "1,006",
            Header1: "dashboard",
            Header2: "illustrative",
            Header3: "rich",
            Header4: "data"
        },
        {
            index: "1,007",
            Header1: "placeholder",
            Header2: "tabular",
            Header3: "information",
            Header4: "irrelevant"
        },
        {
            index: "1,008",
            Header1: "random",
            Header2: "data",
            Header3: "placeholder",
            Header4: "text"
        },
        {
            index: "1,009",
            Header1: "placeholder",
            Header2: "irrelevant",
            Header3: "visual",
            Header4: "layout"
        },
        {
            index: "1,010",
            Header1: "data",
            Header2: "rich",
            Header3: "dashboard",
            Header4: "tabular"
        },
        {
            index: "1,011",
            Header1: "information",
            Header2: "placeholder",
            Header3: "illustrative",
            Header4: "data"
        },
        {
            index: "1,012",
            Header1: "text",
            Header2: "placeholder",
            Header3: "layout",
            Header4: "dashboard"
        },
        {
            index: "1,013",
            Header1: "dashboard",
            Header2: "irrelevant",
            Header3: "text",
            Header4: "visual"
        },
        {
            index: "1,014",
            Header1: "dashboard",
            Header2: "illustrative",
            Header3: "rich",
            Header4: "data"
        },
        {
            index: "1,015",
            Header1: "random",
            Header2: "tabular",
            Header3: "information",
            Header4: "text"
        }
    ]
    return (
        <tbody>
            {data.map((element, index) => {
                return <TableRows element={element} key={index} />
            })}
        </tbody>

    )
}
