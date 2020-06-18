import {Maison} from "../maison/maison";
import {MedecinTraitant} from "../medecin-traitant/medecin-traitant";

export class Client {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public birthday: Date,
    public droitImg: boolean,
    public photo: string,
    private telephone: string,
    private referent: string,
    private caf: string,
    private secuSociale: string,
    private departement: string,
    private caisseRetraite: string,
    private other: string,
    private maison_id: number,
    private medecinTraitant_id: number) {
  }


}
