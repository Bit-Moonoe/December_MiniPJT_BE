import React from 'react'

const Input = (props) => {
    return (
        <div className={props.divClassName}>
            <label htmlFor={props.htmlFor} className={props.labelClassName}>{props.labelText}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                autoComplete='given-name'
                className={props.inputClassName}
                />
            <p>{props.validationMessage}</p>
        </div>
    )
}

export default Input