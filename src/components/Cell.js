import React, { Component } from 'react'

export class Cell extends Component {

    render() {
        const { row, col } = this.props;
        return (
            <input style={cellStyle} type="text" maxLength="1" onChange={this.props.onCellChange.bind(this, row, col)} ></input>
        )
    }
}

const cellStyle = {
    width: "5%",
    padding: "1.5% 0",
    
    textAlign: 'center',
}

export default Cell
