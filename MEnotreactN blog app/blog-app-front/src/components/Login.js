import axios from "axios";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Login({ setUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = async (email, password) => {
    let response = await axios
      .post("http://localhost:8080/users/login", {
        email,
        password,
      })
      .catch((error) => {
        setError(error.response.data);
        return false;
      });
    console.log(response);
    if (response.status === 200) {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.status === 200;
  };
  function handleSubmit(e) {
    e.preventDefault();

    setError(false);
    setLoading(true);

    login(emailRef.current.value, passwordRef.current.value).then((success) => {
      if (success) {
        history.push("/");
      }
    });

    setLoading(false);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 flex-center g-0">
          <div className="col-lg-8 col-xxl-6 py-3 position-relative">
            <img
              className="bg-auth-circle-shape"
              src="../../../assets/img/icons/spot-illustrations/bg-shape.png"
              alt=""
              width={250}
            />
            <img
              className="bg-auth-circle-shape-2"
              src="../../../assets/img/icons/spot-illustrations/shape-1.png"
              alt=""
              width={150}
            />
            <div className="card overflow-hidden z-index-1">
              <div className="card-body p-0">
                <div className="row g-0 h-100">
                  <div className="col-md-5 text-center bg-card-gradient">
                    <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                      <div
                        className="bg-holder bg-auth-card-shape"
                        style={{
                          backgroundImage:
                            "url(../../../assets/img/icons/spot-illustrations/half-circle.png)",
                        }}
                      ></div>
                      {/*/.bg-holder*/}
                      <div className="z-index-1 position-relative">
                        <a
                          className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder"
                          href="/"
                        >
                          The Blog
                        </a>
                        <p className="opacity-75 text-light ">Its a blog</p>
                      </div>
                    </div>
                    <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                      <p className="text-white">
                        Don't have an account?
                        <br />
                        <a
                          className="btn btn-outline-light mt-2 px-4"
                          href="/signup "
                        >
                          Sign Up!
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex flex-center">
                    <div className="p-4 p-md-5 flex-grow-1">
                      <div className="row flex-between-center">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="col-auto">
                          <h3>Account Login</h3>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="card-email">
                            Email address
                          </label>
                          <input
                            className="form-control"
                            id="card-email"
                            type="email"
                            ref={emailRef}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-label"
                              htmlFor="card-password"
                            >
                              Password
                            </label>
                          </div>
                          <input
                            className="form-control"
                            id="card-password"
                            type="password"
                            ref={passwordRef}
                          />
                        </div>

                        <div className="mb-3">
                          <button
                            className="btn btn-primary d-block w-100 mt-3"
                            type="submit"
                            name="submit"
                          >
                            Log in
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
}
