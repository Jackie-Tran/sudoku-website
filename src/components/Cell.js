import React, { Component } from 'react'

export class Cell extends Component {

    state = {
        value: ""
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
        const { row, col } = this.props;
        this.props.onCellChange(row, col, e.target.value);
    }

    render() {
        return (
            <input style={cellStyle} type="text" maxLength="1" value={this.state.value} onChange={this.onChange} ></input>
        )
    }
}

const cellStyle = {
    width: "5%",
    padding: "1.5% 0",
    
    textAlign: 'center',
}

export default Cell
