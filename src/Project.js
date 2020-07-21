import React,{Component} from "react";
import "./App.css"
import Color from "./component/Color";
import Reset from "./component/Reset";
import Result from "./component/Result";
import Size from "./component/Size";

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {
            color : "Red",
            size : 15
        };
    }

    onSetColor = (color) => {
        this.setState({
            color : color
        });
    };

    onChageSize = (value) =>{
            this.setState({
                size : this.state.size +value
            });

    };

    onSetTingDefault =(value)=> {
        if (value) {
            this.setState({
                color: "Red",
                size: 10
            });
        }
    };
    render() {
        return (
            <div>
                <div className="container mt-50">
                    <div className="row">
                        <Color color ={this.state.color} onReceiveColor={this.onSetColor}/>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Size
                                size={this.state.size} onChangeSize ={this.onChageSize} />
                            <Reset onSetTinggDefault={this.onSetTingDefault}/>
                        </div>
                        <Result color ={this.state.color} size = {this.state.size}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project