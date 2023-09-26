 function Enfantconvertisseur(props) {
    return (
        <div>
            <h2>{props.texteAffichage}</h2>
            <input type="number" value={props.inputValue} onChange={ (e) => {
                    let totalCm = e.target.value * props.valeurEnCm;
                    props.callback(totalCm);
                } }/>
        </div>
    )
}

export default Enfantconvertisseur;