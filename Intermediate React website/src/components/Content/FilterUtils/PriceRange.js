import React from 'react'

const PriceRange = () => {
  return (
      <div className='container-fluid p-0 mb-3'>
          <div className="row">
              <div className="col-5">
                  <input type="text" className="form-control border-square" placeholder="Min" />
              </div>
              <div className="col-2 d-flex flex-column justify-content-center"><p className='m-0'> to </p></div>
              <div className="col-5">
                  <input type="text" className="form-control border-square" placeholder="Max" />
              </div>
          </div>
      </div>
  )
}

export default PriceRange