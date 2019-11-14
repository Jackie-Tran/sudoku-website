import React, { Component } from 'react'

export class Cell extends Component {

    

    render() {
        return (
            <input style={cellStyle} type="text" maxLength="1"></input>
        )
    }
}

const cellStyle = {
    width: "5%",
    padding: "1.5% 0",
    
    textAlign: 'center',
}

export default Cell
