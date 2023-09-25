import { Component } from "react";
import TableauChild from "./TableauChild";

class Tableau extends Component {

    render()
    {
        return (
            <div>
                <h1>Tableau D'évènements</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Modele</th>
                            <th>Marque</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <TableauChild cel1="123" cel2="29"/>
                    <TableauChild cel1="1000" cel2="54"/>
                    <TableauChild cel1="548" cel2="74"/>
                    <TableauChild cel1="33" cel2="2"/>
                    <TableauChild cel1="458" cel2="2"/>
                </table>
            </div>
        );
    }
}

export default Tableau;