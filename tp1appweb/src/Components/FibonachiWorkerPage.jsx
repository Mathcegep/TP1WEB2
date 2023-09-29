import { Component } from "react";
import WorkerBuilder from "./workerbuilder,jsx";

class FibonacciWorkerPage extends Component{


    state = {
        limit: 0,
        result: 0
    }

    changeState = (st) => {
        this.setState({limit: st})
    }

    showFinalRes = (res) => {
        console.log(2);
        this.setState({result: res})
    }


    startWorker = () =>
    {
        console.log(6);
        this.worker = new WorkerBuilder(new SharedWorker("./FibonnacieWorker.js"));
        console.log(7);
        this.worker.onMessage = (e) => {
            console.log(1);
            this.showFinalRes(e);
        }
        this.worker.postMessage(0);
    }

    render() 
    {
        return (
            <div>
                <h1>Fibonacci</h1>
                <input onChange={(e) => this.changeState(e.target.value)}></input>
                <button  onClick={ this.startWorker}>Commencer</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default FibonacciWorkerPage