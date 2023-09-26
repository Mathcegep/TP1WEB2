import { Component } from "react";
import CryptoChild from "./CryptoChild";

class Crypto extends Component {
    state = {
        rowState : 0,
        data : new Map([
            ["1", ["123", "42"]],
            ["2", ["123", "42"]],
            ["3", ["123", "42"]],
            ["4", ["123", "42"]]
        ])
    }

    getIdOnClick = (id) => {
        this.setState({rowState : id});
        console.log(id)
    }

    render()
    {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Modele</th>
                            <th>Marque</th>
                            <th>Prix</th>
                            <th></th>
                        </tr>
                    </thead>
                    <CryptoChild id="1" cel1="123" cel2="29" modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild id="2" cel1="123" cel2="29" modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild id="3" cel1="123" cel2="29" modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild id="4" cel1="123" cel2="29" modification={this.state.rowState} onClick={this.getIdOnClick}/>
                </table>
            </div>
        );
    }
}

export default Crypto;