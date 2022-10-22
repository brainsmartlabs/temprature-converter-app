import React from 'react'

function Child(props) {

    function handleChange(e) {
        let num = null;
        if(e.target.value === '') {
            num = 0;
        } else {
            num = parseInt(e.target.value);
        }
        
        props.onTempratureChange(num);
    }

    return (
            <input
                style={{ "padding": "10px" }}
                value={props.temprature}
                onChange={handleChange}
            />
    )
}

export default Child