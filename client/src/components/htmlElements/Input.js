import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {placeholder , name , handler } = this.props;
        return (
            <div>
                <input className="form-control"  placeholder={placeholder}  name={name} onChange={handler}/>
            </div>
        )
    }
}
