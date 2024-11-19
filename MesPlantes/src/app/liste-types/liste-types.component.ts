import { Component } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { Type } from '../model/type.model';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrl: './liste-types.component.css'
})
export class ListeTypesComponent  implements OnInit{
  
  ajout:boolean=true;
  
  updatedType:Type = {"idType":0,"nomType":""};
  types! : Type[];
  constructor(private planteService : PlanteService) { }
  ngOnInit(): void {
  this.planteService.listeTypes().
  subscribe(types => {
    if (Array.isArray(types)) {
      this.types = types;
  } else {
      console.error('Types is undefined or does not contain "types" property');
  }
  });
  }

  typeUpdated(type:Type){
    console.log("Type updated event",type);
    this.planteService.ajouterType(type).
     subscribe( ()=> this.chargerTypes());
    }
    chargerTypes(){
      this.planteService.listeTypes().
      subscribe(types => {
        if (Array.isArray(types)) {
          this.types = types;
          } else {
            console.error('Types is undefined or does not contain "types" property');
            }
            });
            }
  updateType(type:Type) {
      this.updatedType=type;
      this.ajout=false;
      }  
      
      supprimerType(t : Type) {
        let conf = confirm("Etes-vous sûr ?");
           if (conf)
           {
             this.planteService.supprimerType(t.idType).subscribe(() => {
              console.log("type supprimée");
              this.chargerTypes(); }  );
           }
      }
}