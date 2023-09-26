import CryptoTmpRow from "./CryptoTmpRow";

function CryptoChild(props) {

    var handleClick = () => {
        props.onClick(props.id);
    }
    
    if(props.modification !== props.id){
        return (
            <tr>
                <td> <p>{props.cel1}</p></td>
                <td> <p>{props.cel2}</p></td>
                <td> <p>{props.cel1 * props.cel2}</p></td>
                <button onClick={handleClick}>Edit</button>
            </tr>
            );
    }
    else
    {
        return (
            <>
            <tr>
            {console.log(props.modification)}
            <td> <p>{props.cel1}</p></td>
            <td> <p>{props.cel2}</p></td>
            <td> <p>{props.cel1 * props.cel2}</p></td>
            <td></td>
        </tr>
        <CryptoTmpRow />
        </>
            );
    }
}

export default CryptoChild;