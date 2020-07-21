import React, {Component} from "react";
import TaskForm from "./componentPro/TaskForm";
import SerachSort from "./componentPro/SearchSort";
import TaskList from "./componentPro/TaskList";
import "./App.css"

class TaskPro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisPlayForm: false,
            taskEdit: null,
            filter: {
                name: "",
                status: 1
            },
            keyword : ""
        }
    }

    componentDidMount() {
        if (localStorage && localStorage.getItem("tasks")) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            this.setState({
                tasks: tasks
            })
        }
    }


    randomPro() {
        return Math.floor((Math.random() * Math.pow(2, 50)));
    }

    renderRanDom() {
        return this.randomPro()
            + "" + this.randomPro()
    }

    onAddForm = () => {
        if (this.state.isDisPlayForm && this.taskEdit !== null) {
            console.log("1")
        } else {
            this.setState({
                isDisPlayForm: !this.state.isDisPlayForm,
                taskEdit: null
            });
        }
    };

    onCloseForm = () => {
        this.setState({
            isDisPlayForm: false
        })
    };

    onSubmit = (data) => {
        const {tasks} = this.state;
        if (data.id === "") {
            data.id = this.renderRanDom();
            tasks.push(data);
        } else {
            const index = this.findById(data.id);
            tasks[index] = data;
        }

        this.setState({
            tasks: tasks,
            taskEdit: null
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    findById = (id) => {
        const {tasks} = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    };
    onUpdateStatus = (id) => {
        console.log(id);
        const {tasks} = this.state;
        const index = this.findById(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    };

    onDelete = (id) => {
        const {tasks} = this.state;
        const index = this.findById(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        this.onCloseForm();

    };

    onUpdateId = (id) => {
        console.log(this.state.taskEdit);
        const {tasks} = this.state;
        const index = this.findById(id);
        const taskEdit = tasks[index];
        this.setState({
            taskEdit: taskEdit
        });
        this.onShowForm();
    };

    onShowForm = () => {
        this.setState({
            isDisPlayForm: true
        })
    };

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })

    };

    onSearch=(keyword)=>{
        this.setState({
            keyword : keyword
        });
    };

    render() {
        let {tasks, isDisPlayForm, taskEdit, filter,keyword} = this.state;
        if (filter.name) {
            tasks = tasks.filter((tasks) => {
                return tasks.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }
        tasks = tasks.filter((tasks) => {
            if (filter.status === 1) {
                return tasks;
            } else {
                return tasks.status === (filter.status === -1);
            }
        });
        if (keyword){
            tasks = tasks.filter((tasks) => {
                return tasks.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        const elementTaskForm = isDisPlayForm ?

            <TaskForm onSubmit={this.onSubmit}
                      onCloseForm={this.onCloseForm} task={taskEdit}/> : "";
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisPlayForm ? "col-xs- col-sm-4 col-md-4 col-lg-4" : ""}>
                        {/*From */}
                        {elementTaskForm}
                    </div>
                    <div
                        className={isDisPlayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.onAddForm}>
                            Thêm Công Việc
                        </button>
                        &ensp;

                        {/*Search - Sort*/}
                        <div className="row mt-15">
                            <SerachSort onSearch={this.onSearch}/>
                        </div>
                        {/*List*/}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks} onDelete={this.onDelete}
                                          onUpdateStatus={this.onUpdateStatus} onUpdateId={this.onUpdateId}
                                          onFilter={this.onFilter}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPro