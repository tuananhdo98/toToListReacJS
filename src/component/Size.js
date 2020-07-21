

import React, {Component} from "react";

class Size extends Component {

    chageSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.size} px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => {this.chageSize(+1)}}>Tăng </button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-success" onClick={() => {this.chageSize(-1)}}>Giảm</button>
                </div>
            </div>
        );
    }
}

export default Size