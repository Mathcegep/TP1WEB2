 function Enfantconvertisseur(props) {
    return (
        <div>
            <h2>{props.texteAffichage}</h2>
            <input type="number" onChange={ (e) => {
                    let totalCm = e.target.value * props.valeurEnCm;
                    props.callBack(totalCm);
                } }/>
        </div>
    )
}

export default Enfantconvertisseur;