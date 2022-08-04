import React from 'react'
import { useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const Signup = ({ setUser }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const signup = async (name, email, password) => {
        let response = await axios
            .post('http://localhost:8080/users/signup', {
                name,
                email,
                password,
            })
            .catch((error) => {
                setError(error.response.data)
                return false;
            });
            console.log(response)
            if(response.status===201){setUser(response.data)}
            
            
        return response.status===201;
    };
    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        setError(false);
        setLoading(true);
       

        signup(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
        ).then((success)=>{
            if(success ){
                history.push('/');
            }
        });
        

        setLoading(false);
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row min-vh-100 flex-center g-0'>
                    <div className='col-lg-8 py-3 position-relative'>
                        <img
                            className='bg-auth-circle-shape'
                            src='../../../assets/img/icons/spot-illustrations/bg-shape.png'
                            alt=''
                            width={250}
                        />
                        <img
                            className='bg-auth-circle-shape-2'
                            src='../../../assets/img/icons/spot-illustrations/shape-1.png'
                            alt=''
                            width={150}
                        />
                        <div className='card overflow-hidden z-index-1'>
                            <div className='card-body p-0'>
                                <div className='row g-0 h-100'>
                                    <div className='col-md-5 text-center bg-card-gradient'>
                                        <div className='position-relative p-4 pt-md-5 pb-md-7 light'>
                                            <div
                                                className='bg-holder bg-auth-card-shape'
                                                style={{
                                                    backgroundImage:
                                                        'url(../../../assets/img/icons/spot-illustrations/half-circle.png)',
                                                }}
                                            ></div>
                                            {/*/.bg-holder*/}
                                            <div className='z-index-1 position-relative'>
                                                <a
                                                    className='link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder'
                                                    href='/'
                                                >
                                                    The Blog
                                                </a>
                                                <p className='opacity-75 text-white'>
                                                    Its a blog
                                                </p>
                                            </div>
                                        </div>
                                        <div className='mt-3 mb-4 mt-md-4 mb-md-5 light'>
                                            <p className='pt-3 text-white'>
                                                Have an account?
                                                <br />
                                                <a
                                                    className='btn btn-outline-light mt-2 px-4'
                                                    href='login'
                                                >
                                                    Log In
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-7 d-flex flex-center'>
                                        <div className='p-4 p-md-5 flex-grow-1'>
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            <h3>Register</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className='mb-3'>
                                                    <label
                                                        className='form-label'
                                                        htmlFor='card-name'
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        type='text'
                                                        autoComplete='on'
                                                        id='card-name'
                                                        ref={nameRef}
                                                    />
                                                </div>
                                                <div className='mb-3'>
                                                    <label
                                                        className='form-label'
                                                        htmlFor='card-email'
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        type='email'
                                                        autoComplete='on'
                                                        id='card-email'
                                                        ref={emailRef}
                                                    />
                                                </div>
                                                <div className='row gx-2'>
                                                    <div className='mb-3 col-sm-6 col-md-12 col-lg-6'>
                                                        <label
                                                            className='form-label'
                                                            htmlFor='card-password'
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            className='form-control'
                                                            type='password'
                                                            autoComplete='on'
                                                            id='card-password'
                                                            ref={passwordRef}
                                                        />
                                                    </div>
                                                    <div className='mb-3 col-sm-6 col-md-12 col-lg-6'>
                                                        <label
                                                            className='form-label'
                                                            htmlFor='card-confirm-password'
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            className='form-control'
                                                            type='password'
                                                            autoComplete='on'
                                                            id='card-confirm-password'
                                                            ref={
                                                                passwordConfirmRef
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                               
                                                <div className='mb-3'>
                                                    <button
                                                        className='btn btn-primary d-block w-100 mt-3'
                                                        type='submit'
                                                        name='submit'
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup