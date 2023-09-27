import CryptoTmpRow from "./CryptoTmpRow";

function CryptoChild(props) {

    var handleClick = () => {
        props.onClick(props.id);
    };

    var updateCel = (cel1, cel2) => {
        props.update(props.id, cel1, cel2);
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
        <CryptoTmpRow cell1={props.cel1} cell2={props.cel2} updatevalues={updateCel}/>
        </>
        );
    }
}

export default CryptoChild;