import logo from "./logo.png"

const Navbar = ({onLogin,onSignUp}) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light shadow">
            <div className="container">
                <a className="navbar-brand ms-1 " href="/">
                    <img src = {logo}></img>
                </a>
                <div className="d-none d-lg-inline-block me-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item m-2">
                        <a className="nav-link active" aria-current="page" href="/">How It Works</a>
                        </li>
                        <li className="nav-item m-2">
                        <a className="nav-link active" href="/">Browse Jobs</a>
                        </li>
                    </ul>  
                </div>
                <div>
                    <ul className="navbar-nav ms-lg-auto ">
                        <li className="nav-item">
                            <button onClick={onLogin} className="btn nav-link m-2" >Log In</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={onSignUp} className="btn nav-link m-2" >Sign Up</button>
                        </li>
                    </ul>  
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
