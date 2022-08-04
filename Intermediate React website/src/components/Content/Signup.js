import { Modal } from "react-bootstrap"
import logo from "../Header/logo.png"

const Signup = ({ show, onHide }) => {
    //style = {!show ?{ display:"none"}: { display: "block" }}
    return (
        <Modal show={show} onHide={onHide}>
                <Modal.Header className="mb-2">
                <div className="row text-center">
                    <button type="button" className="btn-close float-end me-2" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                        <div className="col-12 mb-4">
                                <img src={logo} height="70"></img>
                        </div>
                        <div className="col-12 mb-4">
                            <Modal.Title>Sign Up</Modal.Title>
                        </div>
                        
                        <div className="col-12">
                        <button onClick={onHide} type="button" className="btn btn-primary w-100">
                            <h5>
                                <i className="fa fa-brands fa-facebook me-2"></i>
                                Continue with Facebook
                            </h5>
                        </button>
                        </div>
                    </div>  
                </Modal.Header>
                <Modal.Body className="mb-4">
                        <div className="row w-100 text-center px-4 pe-1">
                            <input type="text" className="form-control mb-4" placeholder="Email Address"></input>
                            <input type="password" className="form-control mb-4" placeholder="Password"></input>
                            
                            <div className="col-12 mb-4">
                                <button type="button" className="btn btn-primary w-100"><h5>Join Freelancer</h5></button>
                            </div>
                            <div className="col-12 mb-4 text-start">
                                <p className="">
                                By registering you confirm that you accept the <a href="#" className="link-info">Terms and Conditions</a> and <a href="#" className="link-info">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center mb-4">
                    <p className="text-muted">Already have an account? <a href="#" className="link-primary">Log In</a></p>
                </Modal.Footer>             
        </Modal>
        
    )
}


export default Signup