import React,{Component} from "react";

class Reset extends Component{

    onResetDefault=() =>{
        this.props.onSetTinggDefault(true);
    };
    render() {
        return (
            <button type="button" className="btn btn-success" onClick={this.onResetDefault}>Reset</button>
        );
    }
}
export default Reset