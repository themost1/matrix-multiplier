import React, { Component } from 'react';

function NumMatBox(props) {
    return(
        <div className='numMatBox'>
            <form onSubmit={props.onSubmit} input="number">
                {props.text}: <sp />
                <input type="number" onChange={props.onChange}
	        max = {props.max} min = {props.min}	/>
            </form> 
        </div>
    );
}


export default NumMatBox;
