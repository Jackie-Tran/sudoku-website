import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

export class Grid extends Component {

    constructor(props) {
        super(props);
        this.cells = [];
    }

    updateCells = () => {
        console.log("updating cells");
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].changeValue();
        }
    }

    render() {
        return (
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={0} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={1} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={2} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={3} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={4} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={5} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={6} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={7} />
                            <Cell ref={(cell) => { this.cells.push(cell) }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={8} />
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Grid
