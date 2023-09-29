import { Component } from "react";

function CryptoTmpRow({updatevalues}) {

    var newVal1 = 0;
    var newVal2 = 0;
    var setNewCel1 = (e) => {
        newVal1 = e;
    }
    var setNewCel2 = (e) => {
        newVal2 = e;
    }
    var updateCurrent = () => {
        updatevalues(newVal1, newVal2);
    }

    return (
        <tr>
            <td> <input onChange={(e) => setNewCel1(e.target.value)}></input></td>
            <td> <input onChange={(e) => setNewCel2(e.target.value)}></input></td>
            <button onClick={() => updateCurrent()}>Modifier</button>
            <td></td>
        </tr>
    );
}

export default CryptoTmpRow;