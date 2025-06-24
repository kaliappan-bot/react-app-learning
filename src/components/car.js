import React from "react";
import './Car.css';
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Aluminium",
            year: "1967"
        };
    }
    render() {
        return (
            <div
            className="car-container">
                <h1>My {this.state.brand}</h1>
                <p>This is {this.state.color} {this.state.model} from {this.state.year}.</p>
                
            </div>
        );
    }
}
export default Car;