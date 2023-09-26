import { Component } from "react";
import Enfantconvertisseur from "./EnfantConvertisseur";
class Convertisseur extends Component {
    
    state = {
        valeurCm : 0,
        valeurM : 0,
        valeurKm : 0
    }

    conversion(totalCm)
    {
        let totalM = totalCm / 100;
        let totalKm = totalCm  / 100000;
        this.setState(
            {   
                valeurCm : totalCm,
                valeurM : totalM,
                valeurKm : totalKm
            })
    }
    
    render()
    {
        return (
            <div>
                <Enfantconvertisseur inputValue={this.state.valeurCm} valeurEnCm="1" texteAffichage="Saisissez la mesure en Centimètres" callback={(valeurCm) => { this.conversion(valeurCm) }} />
                <Enfantconvertisseur inputValue={this.state.valeurM} valeurEnCm="100" texteAffichage="Saisissez la mesure en Mètres"  callback={(valeurCm) => { this.conversion(valeurCm) }}/>
                <Enfantconvertisseur inputValue={this.state.valeurKm} valeurEnCm="100000" texteAffichage="Saisissez la mesure en Kilomètres"  callback={(valeurCm) => { this.conversion(valeurCm) }}/>
            </div>
        );
    }
}

export default Convertisseur;