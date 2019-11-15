import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

export class Grid extends Component {
    render() {
        return (
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={0} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={1} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={2} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={3} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={4} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={5} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={6} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={7} col={8}/>
                        </tr>
                        <tr>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={0}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={1}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={2}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={3}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={4}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={5}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={6}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={7}/>
                            <Cell onCellChange={this.props.onCellChange} row={8} col={8}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Grid
