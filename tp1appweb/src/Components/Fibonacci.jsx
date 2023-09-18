import { Component } from "react";

class Fibonacci extends Component {

    //worker = new Worker("worker.js");
    render() {
        return (
            <div>
                <h1>Fibonacci</h1>
                <textarea></textarea>
                <button >Commencer</button>
            </div>
        );
    }
}

export default Fibonacci;