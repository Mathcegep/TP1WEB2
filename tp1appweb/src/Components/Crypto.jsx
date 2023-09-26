import { Component } from "react";
import CryptoChild from "./CryptoChild";

class Crypto extends Component {
    state = {
        rowState : 0
    }

    getIdOnClick(id) {
        this.setState({rowState : id});
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
                        </tr>
                    </thead>
                    <CryptoChild id="1" cel1="123" cel2="29" modification={this.state.rowState} onClick={(e) => this.getIdOnClick(e)}/>
                    <CryptoChild id="2" cel1="123" cel2="29" modification={this.state.rowState} onClick={(e) => this.getIdOnClick(e)}/>
                    <CryptoChild id="3" cel1="123" cel2="29" modification={this.state.rowState} onClick={(e) => this.getIdOnClick(e)}/>
                    <CryptoChild id="4" cel1="123" cel2="29" modification={this.state.rowState} onClick={(e) => this.getIdOnClick(e)}/>
                </table>
            </div>
        );
    }
}

export default Crypto;