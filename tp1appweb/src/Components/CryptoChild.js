import { Component } from "react";
import CryptoTmpRow from "./CryptoTmpRow";
import { propTypes } from "react-bootstrap/esm/Image";

function CryptoChild({update, id, cel1, cel2, modification, onClick}) {

    Component.propTypes = {
        id: propTypes.string,
        cel1: propTypes.string,
        cel2: propTypes.string
    }

    var handleClick = () => {
        onClick(id);
    };

    var updateCel = (xcel1, xcel2) => {
        update(id, xcel1, xcel2);
    }
    
    if(modification !== id){
        return (
            <tr>
                <td> <p>{cel1}</p></td>
                <td> <p>{cel2}</p></td>
                <td> <p>{cel1 * cel2}</p></td>
                <button onClick={handleClick}>Edit</button>
            </tr>
            );
    }
    else
    {
        return (
            <>
            <tr>
            {console.log(modification)}
            <td> <p>{cel1}</p></td>
            <td> <p>{cel2}</p></td>
            <td> <p>{cel1 * cel2}</p></td>
            <td></td>
        </tr>
        <CryptoTmpRow updatevalues={updateCel}/>
        </>
        );
    }
}

export default CryptoChild;