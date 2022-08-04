const NavListElement = (props) => {
  return (
    <li className="nav-item">
      {props.data.active ?
        (
          <a className="nav-link active" aria-current="page" href="#">
          <span data-feather={props.data.icon}></span>
          {props.data.text}
          </a>
        )
        :
        (
          <a className="nav-link" aria-current="page" href="#" >
          <span data-feather={props.data.icon}></span>
          {props.data.text}
          </a>
        )
      }      
    </li>
  )
}

const NavList = () => {
  const NavListElementList = [
    { text: "Dashboard" , icon: "home" , active: true},
    { text: "Orders" , icon: "file", active: false},
    { text: "Products" , icon: "shopping-cart", active: false},
    { text: "Customers" , icon: "users", active: false},
    { text: "Reports", icon: "bar-chart-2", active: false },
    { text: "Integrations", icon: "layers", active: false }
  ]
    return (
         <ul className="nav flex-column">
          {NavListElementList.map(elem => (<NavListElement data={elem} />))}
        </ul>
    )
}

const NavHeading = () => {
  return (
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
    </h6>
  )
        
}

const NavReportsElement = (props) => {
  return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span data-feather="file-text"></span>
            {props.data.text}
        </a>
      </li>
  )
}

const NavReports = () => {
  const NavReportsElementList = [
    { text: "Current month" },
    { text: "Last quarter" },
    { text: "Social engagement" },
    { text: "Year-end sale" }
  ]
    return (   
        <ul className="nav flex-column mb-2">
          {NavReportsElementList.map(elem =>(<NavReportsElement data= {elem}/>))} 
        </ul>
    )
}

export const Sidebar = () => {
    return (
        <div className="position-sticky pt-3">
            <NavList />
            <NavHeading />
            <NavReports />
        </div>
    )
}
