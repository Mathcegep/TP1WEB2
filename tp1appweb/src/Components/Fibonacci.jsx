import { Component } from "react";

class Fibonacci extends Component {

    //worker = new Worker("worker.js");

    handleClick = (e) => {
        this.worker.postMessage()
    }

    render() {
        return (
            <div>
                <h1>Fibonacci</h1>
                <textarea></textarea>
                <button onClick={this.handleClick} >Commencer</button>
            </div>
        );
    }
}

export default Fibonacci;