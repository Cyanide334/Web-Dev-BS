import { Modal } from "react-bootstrap"

import logo from "../Header/logo.png"

const Login = ({show,onHide}) => {
    return (
        <Modal show={show} onHide={onHide}>
                <Modal.Header>
                <div className="row text-center">
                    <button type="button" className="btn-close float-end me-2" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                        <div className="col-12 mb-4">
                                <img src={logo} height="70"></img>
                        </div>
                        <div className="col-12 mb-4">
                            <Modal.Title>Welcome Back</Modal.Title>
                        </div>
                        
                        <div className="col-12">
                        <button onClick={onHide} type="button" className="btn btn-primary w-100">
                            <h5>
                                <i className="fa fa-brands fa-facebook me-2"></i>
                                Login with Facebook
                            </h5>
                        </button>
                        </div>
                    </div>  
                </Modal.Header>
                <Modal.Body className="mb-4">
                        <div className="row w-100 text-center px-4 pe-1">
                            <input type="text" className="form-control mb-4" placeholder="Email or Username"></input>
                            <input type="password" className="form-control mb-4" placeholder="Password"></input>
                            <div className="col-12 mb-4">
                                <div className="form-check text-start">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe"></input>
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                    <button  className="btn link-info float-end">Forgot Password?</button>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <button type="button" className="btn btn-primary w-100 " ><h5>Login</h5></button>
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center mb-4">
                     <p className="text-muted">Don't have an account? <a href="#" className="link-primary">Sign Up</a></p>
                </Modal.Footer>
            </Modal>
    )
}


export default Login