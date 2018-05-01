import React from 'react';
import './spinner.css';

const Spinner = (props) => {
  if(!props.active) return null
  return(
    <div className="Spinner">
      <span>Loading...</span>
    </div>
  )
}

export default Spinner;