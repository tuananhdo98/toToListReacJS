import React, {Component} from "react";

class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ["Red", "Green", "Blue", "#ccc"]
        };
    }

    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    setActiceColor(color){
        this.props.onReceiveColor(color)
    }

    render() {
        const elementColor = this.state.colors.map((color, index) => {
            return <span
                key={index} style={this.showColor(color)}
                className={this.props.color === color ? "active" : ""}
                onClick={() => this.setActiceColor(color)}
            >

            </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color</h3>
                    </div>
                    <div className="panel-body">
                        {elementColor}
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Color