import { Component } from "react";
import CryptoChild from "./CryptoChild";

class Crypto extends Component {
    state = {
        rowState : 0,
        data : new Map([
            ["1", ["254", "13"]],
            ["2", ["123", "54"]],
            ["3", ["73", "5"]],
            ["4", ["343", "19"]]
        ])
    }

    getIdOnClick = (id) => {
        this.setState({rowState : id});
    }

    updateValue = (id, cel1, cel2) => {
        var updData = this.state.data;
        updData.set(id, [cel1, cel2]);
        console.log(updData);
        this.setState({data : updData});
        this.setState({rowState : 0});
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
                    {
                        //Pour optimiser utiliser une foreach
                    }
                    <CryptoChild update={this.updateValue} id="1" cel1={this.state.data.get("1")[0]} cel2={this.state.data.get("1")[1]} modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild update={this.updateValue} id="2" cel1={this.state.data.get("2")[0]} cel2={this.state.data.get("2")[1]} modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild update={this.updateValue} id="3" cel1={this.state.data.get("3")[0]} cel2={this.state.data.get("3")[1]} modification={this.state.rowState} onClick={this.getIdOnClick}/>
                    <CryptoChild update={this.updateValue} id="4" cel1={this.state.data.get("4")[0]} cel2={this.state.data.get("4")[1]} modification={this.state.rowState} onClick={this.getIdOnClick}/>
                </table>
            </div>
        );
    }
}

export default Crypto;