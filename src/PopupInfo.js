import React from 'react-dom';

const PopupInfo = ({ data }) => (
    <div className='popup-container'>
      <button onClick={()=>{alert("I am clicked")}}>Click Me</button>
    <div className='my-popup'>
      <h1>{data.title}</h1>
      <p>
          {data.description}
      </p>
      
    </div>
  </div>
);

export default PopupInfo;