import React from 'react'

const Options = ({options}) => {
  return (
      <select class="form-select mb-3 border-square" required>
          {options.map((element,idx)=><option>{element}</option>)}
      </select>  )
}

export default Options