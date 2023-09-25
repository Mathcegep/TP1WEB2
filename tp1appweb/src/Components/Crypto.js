import { Component } from "react";
import CryptoChild from "./CryptoChild";
import CryptoTmpRow from "./CryptoTmpRow";

class Crypto extends Component {
    state = {
        row1State : 0,
        row2State : 0,
        row3State : 0,
        row4State : 0,
        row5State : 0,
        row6State : 0,
        row7State : 0,
        row8State : 0,
        
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
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row1State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row2State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row3State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row4State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row5State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row6State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row7State}/>
                    <CryptoChild cel1="123" cel2="29" modification={this.state.row8State}/>
                </table>
            </div>
        );
    }
}

export default Crypto;