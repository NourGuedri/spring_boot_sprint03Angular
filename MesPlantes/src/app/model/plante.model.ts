
import { Type } from './type.model';
import { Image } from './image.model';

export class Plante {
    idPlante! : number;
    nomPlante! : string;
    couleur! : string;
     dateRendezVous! : Date ;
     type!:Type;
     image!:Image ;
     imageStr! : string;
     images!: Image[];

    }