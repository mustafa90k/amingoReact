import React, { useState } from 'react';

const SaveButton = (prop) => {


    const [state, setState] = useState(
        {saved: false}
    )

    const save = () => {
        setState({ ...state, saved: true })
    }

    if(state.saved === false) {
        return (
            <button 
            onClick={save}
            width={prop.width}
            className={"btn btn-primary " + prop.className}>
                {prop.label}
            </button>
        )
    }

    else {
        return (
            <div class="alert alert-success" role="alert">
                Your info has been saved!
            </div>
        )
    }
}

export default SaveButton;