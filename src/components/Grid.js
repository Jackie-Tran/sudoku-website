import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

export class Grid extends Component {

    constructor(props) {
        super(props);
        this.cells = [];
        this.cellId = 0;
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
                            <Cell ref={(cell) => { this.cells[0] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={0} />
                            <Cell ref={(cell) => { this.cells[1] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={1} />
                            <Cell ref={(cell) => { this.cells[2] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={2} />
                            <Cell ref={(cell) => { this.cells[3] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={3} />
                            <Cell ref={(cell) => { this.cells[4] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={4} />
                            <Cell ref={(cell) => { this.cells[5] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={5} />
                            <Cell ref={(cell) => { this.cells[6] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={6} />
                            <Cell ref={(cell) => { this.cells[7] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={7} />
                            <Cell ref={(cell) => { this.cells[8] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={0} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[9] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={0} />
                            <Cell ref={(cell) => { this.cells[10] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={1} />
                            <Cell ref={(cell) => { this.cells[11] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={2} />
                            <Cell ref={(cell) => { this.cells[12] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={3} />
                            <Cell ref={(cell) => { this.cells[13] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={4} />
                            <Cell ref={(cell) => { this.cells[14] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={5} />
                            <Cell ref={(cell) => { this.cells[15] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={6} />
                            <Cell ref={(cell) => { this.cells[16] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={7} />
                            <Cell ref={(cell) => { this.cells[17] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={1} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[18] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={0} />
                            <Cell ref={(cell) => { this.cells[19] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={1} />
                            <Cell ref={(cell) => { this.cells[20] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={2} />
                            <Cell ref={(cell) => { this.cells[21] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={3} />
                            <Cell ref={(cell) => { this.cells[22] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={4} />
                            <Cell ref={(cell) => { this.cells[23] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={5} />
                            <Cell ref={(cell) => { this.cells[24] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={6} />
                            <Cell ref={(cell) => { this.cells[25] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={7} />
                            <Cell ref={(cell) => { this.cells[26] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={2} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[27] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={0} />
                            <Cell ref={(cell) => { this.cells[28] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={1} />
                            <Cell ref={(cell) => { this.cells[29] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={2} />
                            <Cell ref={(cell) => { this.cells[30] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={3} />
                            <Cell ref={(cell) => { this.cells[31] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={4} />
                            <Cell ref={(cell) => { this.cells[32] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={5} />
                            <Cell ref={(cell) => { this.cells[33] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={6} />
                            <Cell ref={(cell) => { this.cells[34] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={7} />
                            <Cell ref={(cell) => { this.cells[35] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={3} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[36] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={0} />
                            <Cell ref={(cell) => { this.cells[37] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={1} />
                            <Cell ref={(cell) => { this.cells[38] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={2} />
                            <Cell ref={(cell) => { this.cells[39] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={3} />
                            <Cell ref={(cell) => { this.cells[40] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={4} />
                            <Cell ref={(cell) => { this.cells[41] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={5} />
                            <Cell ref={(cell) => { this.cells[42] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={6} />
                            <Cell ref={(cell) => { this.cells[43] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={7} />
                            <Cell ref={(cell) => { this.cells[44] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={4} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[45] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={0} />
                            <Cell ref={(cell) => { this.cells[46] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={1} />
                            <Cell ref={(cell) => { this.cells[47] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={2} />
                            <Cell ref={(cell) => { this.cells[48] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={3} />
                            <Cell ref={(cell) => { this.cells[49] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={4} />
                            <Cell ref={(cell) => { this.cells[50] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={5} />
                            <Cell ref={(cell) => { this.cells[51] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={6} />
                            <Cell ref={(cell) => { this.cells[52] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={7} />
                            <Cell ref={(cell) => { this.cells[53] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={5} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[54] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={0} />
                            <Cell ref={(cell) => { this.cells[55] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={1} />
                            <Cell ref={(cell) => { this.cells[56] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={2} />
                            <Cell ref={(cell) => { this.cells[57] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={3} />
                            <Cell ref={(cell) => { this.cells[58] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={4} />
                            <Cell ref={(cell) => { this.cells[59] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={5} />
                            <Cell ref={(cell) => { this.cells[60] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={6} />
                            <Cell ref={(cell) => { this.cells[61] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={7} />
                            <Cell ref={(cell) => { this.cells[62] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={6} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[63] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={0} />
                            <Cell ref={(cell) => { this.cells[64] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={1} />
                            <Cell ref={(cell) => { this.cells[65] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={2} />
                            <Cell ref={(cell) => { this.cells[66] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={3} />
                            <Cell ref={(cell) => { this.cells[67] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={4} />
                            <Cell ref={(cell) => { this.cells[68] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={5} />
                            <Cell ref={(cell) => { this.cells[69] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={6} />
                            <Cell ref={(cell) => { this.cells[70] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={7} />
                            <Cell ref={(cell) => { this.cells[71] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={7} col={8} />
                        </tr>
                        <tr>
                            <Cell ref={(cell) => { this.cells[72] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={0} />
                            <Cell ref={(cell) => { this.cells[73] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={1} />
                            <Cell ref={(cell) => { this.cells[74] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={2} />
                            <Cell ref={(cell) => { this.cells[75] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={3} />
                            <Cell ref={(cell) => { this.cells[76] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={4} />
                            <Cell ref={(cell) => { this.cells[77] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={5} />
                            <Cell ref={(cell) => { this.cells[78] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={6} />
                            <Cell ref={(cell) => { this.cells[79] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={7} />
                            <Cell ref={(cell) => { this.cells[80] = cell }} onCellChange={this.props.onCellChange} getCellValue={this.props.getCellValue} row={8} col={8} />
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Grid
