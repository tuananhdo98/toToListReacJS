import React, {Component} from "react";

class Reset extends Component {

    setStyle(){
        return {
            color : this.props.color,
            borderColor : this.props.color,
            fontSize : this.props.size
        };

    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - Font - Size : {this.props.size}</p>
                <div id="content" style={this.setStyle()} >
                    Content
                </div>
            </div>
        );
    }
}

export default Reset