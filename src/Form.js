import React, {Component} from "react";
import "./App.css"

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            area: "",
            gender: 1,
            radio : "code",
            checkbox : false
        };
    }

    onChange = (event) => {
        const target = event.target;
        const username = target.name;
        const value = target.type === "checkbox" ? target.type.checked : target.type.value;
        this.setState({
            [username]: value
        });

    };

    onHeandlerSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <div className="container mt-30">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Panel title</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.onHeandlerSubmit}>
                                        <div className="form-group">
                                            <label>User name :</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="username" onChange={this.onChange}
                                                   value={this.state.username}

                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Password :</label>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password"
                                                   onChange={this.onChange}
                                                   value={this.state.password}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Mo Ta De !! :</label>
                                            <textarea name="area" className="form-control"
                                                      cols="30"
                                                      rows="3" onChange={this.onChange}
                                                        value={this.state.area}
                                            />

                                        </div>

                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="radio" value="code"
                                                       onChange={this.onChange}
                                                        checked={this.state.radio === "code"}
                                                />
                                                Lap trinh
                                            </label>&nbsp;

                                            <label>
                                                <input type="radio" name="radio" value="sport"
                                                       onChange={this.onChange}
                                                        checked={this.state.radio === "sport"}
                                                />
                                                The Thao
                                            </label>

                                        </div>

                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"
                                                       value={true}
                                                       onChange={this.onChange}
                                                        checked={this.state.checkbox === true}
                                                />
                                                    Chap thuan
                                            </label>
                                        </div>

                                        <label>Gender</label>
                                        <select className="form-control"
                                                name="gender" onChange={this.onChange}
                                                value={this.state.gender}
                                        >
                                            <option value={1}>Nam</option>
                                            <option value={0}>Nu</option>
                                        </select>
                                        <hr/>


                                        <button type="submit" className="btn btn-primary">Save de !!</button>
                                        &nbsp;
                                        <button type="reset" className="btn btn-default">Xoa trang de !!</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form