import React from "react";

const Title = ({ title, expiry, verified }) => {
  return (
    <div className="mb-3">
      <a
        href="/"
        className="link-dark fw-bold text-decoration-none text-underline-hover me-2"
      >
        {title}
      </a>
      <span className="me-2">{expiry}</span>

      {verified === true && (
        <span style={{ color: "#5dc26a" }} className="fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="Icon-image"
            viewBox="0 0 24 24"
            style={{ color: "#5dc26a" }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              style={{ color: "#5dc26a" }}
              d="M20 2a2 2 0 00-2-2H2C.897 0 0 .896 0 2v2h20V2zm-1 12c.34 0 .668.036.99.09.002-.03.01-.06.01-.09V6H0v8c0 1.102.897 2 2 2h12.537c1.1-1.225 2.69-2 4.463-2zM8 13H3v-2h5v2zm2-3H3V8h7v2zm3-2h4v2h-4V8zm9.293 8.293L18 20.587l-2.293-2.294-1.414 1.413L18 23.416l5.707-5.71"
            ></path>
          </svg>
          Verified
        </span>
      )}
    </div>
  );
};

export default Title;
