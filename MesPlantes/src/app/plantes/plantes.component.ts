import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrl: './plantes.component.css'
})
export class PlantesComponent implements OnInit {
  plantes!: Plante[];
  

  constructor(private planteService: PlanteService, public authService: AuthService) {
    
    
}

  ngOnInit(): void {  
  
   this.chargerPlantes();
      
  }
  // chargerPlantes(){
  //   this.planteService.listePlante().subscribe(pls => {
  //     console.log(pls);
  //     this.plantes = pls;
  //     this.plantes.forEach((pl) => {
  //       this.planteService.loadImage(pl.image.idImage).subscribe((img: Image) => {
  //       pl.imageStr = 'data:' + img.type + ';base64,' + img.image;
  //       });
  //       });
  //       });
  //       }
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
    this.plantes = pls;
    console.log(pls);
    this.plantes.forEach((pl) => {
    pl.imageStr = 'data:' + pl.images[0].type + ';base64,' +
    pl.images[0].image;
    });
    });
    }
}
