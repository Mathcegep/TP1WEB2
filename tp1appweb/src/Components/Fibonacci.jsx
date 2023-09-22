import { Component } from "react";

class Fibonacci extends Component {

    state = {
        limit: 0,
        result: 0
    }

    changeState = (st) => {
        this.setState({limit: st})
    }

    showFinalRes = (res) => {
        this.setState({result: res})
    }

    fibonaccie = () => {
        const fib = [0, 1];
        var i = 2;
        this.showFinalRes(this.fibonacciCalc(this.state.limit, fib, i));
    }
    
    fibonacciCalc(limit, fib, i) {
        if(i < limit) {
            fib[i] = fib[i - 1] + fib[i - 2];
            i = i + 1;
            this.fibonacciCalc(limit, fib, i);
        } else {

        }
    }

    render() {
        return (
            <div>
                <h1>Fibonacci</h1>
                <textarea onChange={() => this.changeState()}></textarea>
                <button  onClick={() => this.fibonaccie()}>Commencer</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Fibonacci;