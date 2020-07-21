import React, {Component} from "react";
import Search from "./Search";
import Sort from "./Sort";

class SerachSort extends Component {
    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
                <Sort/>
            </div>
        );
    }
}

export default SerachSort
