import React, {Component} from 'react';
import Header from "./components/Header";
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Apple",
                    price: 160000,
                    image: "https://organicfood.vn/image/catalog/Anhblog/rau-cu-qua-tuoi-1.jpg",
                    status: true
                },
                {
                    id: 2,
                    name: "Apple2",
                    price: 1600003111,
                    image: "https://greenfieldseeds.com/wp-content/uploads/2018/09/vegetable-seeds.jpg",
                    status: true
                },
                {
                    id: 3,
                    name: "Apple3",
                    price: 160000213,
                    image: "https://suanonalphalipid.com.vn/wp-content/uploads/2017/01/rau-cu-qua.jpg",
                    status: false
                }
            ],
            isActive: true
        };
    }

    onSetState= () => {
       this.setState({
            isActive : !this.state.isActive
       })
    };

    render() {
        const element = this.state.products.map((product, index) => {
            return <tr key={product.id}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>
                    <span className="label label-success">{product.price}</span>
                </td>

            </tr>
        });
        return (
            <div>
                <Header/>
                <nav className="navbar navbar-inverse">
                    <div className="navbar-brand">Even Ref</div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {element}
                                </tbody>
                                <button type="button"
                                        className="btn btn-warning" onClick={this.onSetState}>
                                    Active {this.state.isActive === true ? "true" : "false"}
                                </button>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
