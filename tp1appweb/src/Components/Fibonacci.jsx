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
        var n1 = 0, n2 = 1, nextTerm;
        var i = 1;
        var limit = this.state.limit;
        var total = 0;
        this.fibonacciCalc(limit, i, n1, n2, nextTerm, total);
    }
    
    fibonacciCalc(limit, i, n1, n2, nextTerm, total) {
        //console.log(limit+" "+i);
        if(i <= limit) {
            nextTerm = n1 + n2;
            n1 = n2;
            total = total + n1;
            this.fibonacciCalc(limit, i, n1, n2, nextTerm, total);
        } else {
            this.showFinalRes(total);
        }
    }

    render() {
        return (
            <div>
                <h1>Fibonacci</h1>
                <input onChange={(e) => this.changeState(e.target.value)}></input>
                <button  onClick={() => this.fibonaccie()}>Commencer</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Fibonacci;