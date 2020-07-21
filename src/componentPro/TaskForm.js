import React, {Component} from "react";

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            status: false
        }
    }

    componentDidMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
            console.log(this.state)
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
            console.log(this.state)
        }

    }


    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === "status") {
            value = !!target.value
        }
        this.setState({
            [name]: value
        });
    };


    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.dongForm();
    };

    dongForm = () => {
        this.props.onCloseForm();
    };

    onClear = () => {
        this.setState({
            name: "",
            status: false
        })
    };

    render() {
        const {id} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== "" ? "Cập nhật" : "Thêm"}
                        <span
                            className="fa fa-times-circle text-right" onClick={this.dongForm}>Thoat
                            </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.onChange}
                                   className="form-control"/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="status" value={this.state.status}
                                onChange={this.onChange} required="required">
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>
                            &nbsp;
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm