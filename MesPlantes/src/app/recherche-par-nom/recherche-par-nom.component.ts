import { Component } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  allPlantes! : Plante[];
  searchTerm!: string;
  nomPlante!: string;
  plantes!: Plante[];
  nom!:string;
  constructor(private planteService: PlanteService , public authService : AuthService) { }


ngOnInit(): void {
  this.planteService.listePlante().subscribe(pls => {
  console.log(pls);
  this.allPlantes = pls;
  });
  }
  onKeyUp(filterText : string){
  this.plantes = this.allPlantes.filter(item =>item.nomPlante.toLowerCase().includes(filterText));
  }

  rechercherPls(){
    this.planteService.rechercherParNom(this.nomPlante).subscribe(pls => {
    this.plantes = pls;
    console.log(pls)});
    }

    supprimerPlante(p: Plante)
    {
    // console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
    this.planteService.supprimerPlante(p.idPlante).subscribe(()=>{
    console.log("plante supprimé");
    this.chargerPlantes();
    });
     } }
     chargerPlantes(){
      this.planteService.listePlante().subscribe(pls => {
        console.log(pls);
        this.plantes = pls;
        });
    }

}
