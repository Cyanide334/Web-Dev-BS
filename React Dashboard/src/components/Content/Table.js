
const TableRow = (props) => {
    return (
        <tr>
              <td>{props.row.col1}</td>
              <td>{props.row.col2}</td>
              <td>{props.row.col3}</td>
              <td>{props.row.col4}</td>
              <td>{props.row.col5}</td>
        </tr>
    )
}

const Table = () => {

 const TableElementList = [
        { col1: "1,001", col2: "random", col3: "data", col4: "palceholder", col5: "text" },
        { col1: "1,002", col2: "random2", col3: "data2", col4: "palceholder2", col5: "text2" },
        { col1: "1003",col2: "data",col3: "rich", col4:"dashboard",col5: "tabular"},
        { col1: "1,003", col2: "information", col3: "placeholder", col4: "illustrative", col5: "data" },
        { col1: "1,004", col2: "text", col3: "random", col4: "layout", col5: "dashboard" },
        { col1: "1,005", col2: "dashboard", col3: "irrelevant", col4: "text", col5: "placeholder" },
        { col1: "1,006", col2: "dashboard", col3: "illustrative", col4: "rich", col5: "data" },
        { col1: "1,007", col2: "placeholder", col3: "tabular", col4: "information", col5: "irrelevant" },
        { col1: "1,008", col2: "random", col3: "data", col4: "placeholder", col5: "text" },
        { col1: "1,009", col2: "placeholder", col3: "irrelevant", col4: "visual", col5: "layout" },
        { col1: "1,010", col2: "data", col3: "rich", col4: "dashboard", col5: "tabular" },
        { col1: "1,011", col2: "information", col3: "placeholder", col4: "illustrative", col5: "data" },
        { col1: "1,012", col2: "text", col3: "placeholder", col4: "layout", col5: "dashboard" },
        { col1: "1,013", col2: "dashboard", col3: "irrelevant", col4: "text", col5: "visual" },
        { col1: "1,014", col2: "dashboard", col3: "illustrative", col4: "rich", col5: "data" },
        { col1: "1,015", col2: "random", col3: "tabular", col4: "information", col5: "text" },
    ]

    let col1 = "#"
    let col2 = "Header"
    let col3 = "Header"
    let col4 = "Header"
    let col5 = "Header"
    return (
         <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">{col1}</th>
              <th scope="col">{col2}</th>
              <th scope="col">{col3}</th>
              <th scope="col">{col4}</th>
              <th scope="col">{col5}</th>
            </tr>
          </thead>
          <tbody>
                {TableElementList.map(TableE => (<TableRow row={TableE} />))}
          </tbody>
        </table>
      </div>
    )
}

export default Table