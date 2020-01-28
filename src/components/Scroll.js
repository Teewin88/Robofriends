//Children:

import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflow: 'scroll', border: '3px solid black', height: '800px', margin:'5px'}}> 
      {props.children}
    </div>
  )
};

export default Scroll;