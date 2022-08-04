import React from 'react'

const Checkbox = ({text}) => {
  return (
      <div class="form-check mb-3">
          <input className='form-check-input border-square' type="checkbox" name="" id="" />
          <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: "14px" }}>
                {text}
          </label>
      </div>  )
}

export default Checkbox