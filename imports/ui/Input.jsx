import React from "react";

// No need to use a class here since no state is needed.
export default ( props ) =>
(
    <div>
        <label>{ props.label } </label>
        <input
            name={ props.name }
            onChange={ props.onChange }
            type="text"
            placeholder={ props.placeholder }
        />
    </div>
);
