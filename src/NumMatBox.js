import React, { Component } from 'react';

function NumMatBox(props) {
    return(
        <div className='numMatBox'>
            <form onSubmit={props.onSubmit} input="number">
                {props.text}: <sp />
                <input type="number" onChange={props.onChange} />
                <input type='submit' value='Submit' />
            </form> 
        </div>
    );
}


export default NumMatBox;