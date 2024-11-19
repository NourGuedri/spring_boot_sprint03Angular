import { Component } from '@angular/core';

import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';

import { OnInit } from '@angular/core';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-plante',
  templateUrl:'./update-plante.component.html',
  styleUrl: './update-plante.component.css'
})
export class UpdatePlanteComponent implements OnInit {

  currentPlante = new Plante();
  types !: Type[];
  updateTypeId!: number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private planteService: PlanteService,
    private activateroute: ActivatedRoute,private router: Router){}

  ngOnInit() {

    this.planteService.listeTypes().subscribe(types => {
      if (Array.isArray(types)) {
        this.types = types;
    } else {
        console.error('Types is undefined or does not contain "types" property');
    }
    });

    this.planteService.consulterPlante(this.activateroute.snapshot.params['id']).subscribe(pls => {
      
      this.currentPlante = pls;
      this.updateTypeId = this.currentPlante.type.idType;
      // this.planteService.loadImage(this.currentPlante.image.idImage).subscribe((img: Image) => {
// this.myImage = 'data:' + img.type + ';base64,' + img.image;

this.updateTypeId = pls.type.idType;
    });
}

  updatePlante()

  {

    this.currentPlante.type = this.types.find(type => type.idType == this.updateTypeId)!;
// //tester si l'image du produit a été modifiée
// if (this.isImageUpdated)
//   {
//   this.planteService.uploadImage(this.uploadedImage, this.uploadedImage.name).subscribe((img: Image) => {
//   this.currentPlante.image = img;
//   this.planteService.updatePlante(this.currentPlante).subscribe((pls) => {
//   this.router.navigate(['plantes']);
//   });
//   });
//   }
//   else{
    this.planteService.updatePlante(this.currentPlante).subscribe(pls => {

      console.log(this.currentPlante);

      this.router.navigate(['plantes']);

}

    );
  
}

  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
    onAddImagePlante() {
      this.planteService.uploadImagePl(this.uploadedImage,
      this.uploadedImage.name,this.currentPlante.idPlante).subscribe( (img : Image) => {
      this.currentPlante.images.push(img);
      });
      }

      supprimerImage(img: Image){
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.planteService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentPlante.images.indexOf(img, 0);
        if (index > -1) {
        this.currentPlante.images.splice(index, 1);
        }
        });}

       
}
