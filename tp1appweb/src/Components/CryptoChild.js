import CryptoTmpRow from "./CryptoTmpRow";

function CryptoChild(props) {
    
    if(props.modification == true){
        return (
            
            <tr>
                <td> <p>{props.cel1}</p></td>
                <td> <p>{props.cel2}</p></td>
                <td> <p>{props.cel1 * props.cel2}</p></td>
                <button onClick={this.props.onClick}></button>
            </tr>
            );
    }
    else
    {
        return (
                <tr>
                    <table>
                        <tr>                    
                            <td> <p>{props.cel1}</p></td>
                            <td> <p>{props.cel2}</p></td>
                            <td> <p>{props.cel1 * props.cel2}</p></td>
                            <button onClick={this.props.onClick}></button>
                        </tr>
                        <CryptoTmpRow/>
                    </table>

                </tr>
                
            );
    }
}

export default CryptoChild;