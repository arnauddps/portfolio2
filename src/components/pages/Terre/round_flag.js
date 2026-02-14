import React from 'react';
import "./round-flag.css";

function Roundflag(props) {
  return (
    <>
    
<div className='flag_banner'>
    <div className='flag_container'>
       <div className='left_flag' style={{backgroundColor: props.left }} ></div>
       <div className='middle_flag' style={{backgroundColor: props.middle}}></div>
       <div className='right_flag' style={{backgroundColor: props.right}}></div>
    </div>
</div>

    </>
  );
}

export default Roundflag;
