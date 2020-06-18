import {Adresse} from "../adresse/adresse";

export class Maison {
  constructor(
    public id:number,
    public capacite: number,
    public adresse_id: number,
  ) {
  }
}
