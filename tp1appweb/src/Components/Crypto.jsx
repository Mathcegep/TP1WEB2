import { Component } from "react";
import CryptoChild from "./CryptoChild";
import CryptoTmpRow from "./CryptoTmpRow";

class Crypto extends Component {
    state = {
        rowState : 0,
        rowSelected : 0
    }

    getIdOnClick() {

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
                    <CryptoChild id="1" cel1="123" cel2="29" modification={this.state.rowState}/>
                    <CryptoChild id="2" cel1="123" cel2="29" modification={this.state.rowState}/>
                    <CryptoChild id="3" cel1="123" cel2="29" modification={this.state.rowState}/>
                    <CryptoChild id="4" cel1="123" cel2="29" modification={this.state.rowState}/>
                </table>
            </div>
        );
    }
}

export default Crypto;