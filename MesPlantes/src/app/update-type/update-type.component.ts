import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Type } from '../model/type.model';


@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrl: './update-type.component.css'
})
export class UpdateTypeComponent {
  @Input() ajout!: boolean;
  @Output()
  typeUpdated = new EventEmitter<Type>();
  @Input()
  type!: Type ;
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ",this.type);
    }

    saveType(){
      this.typeUpdated.emit(this.type);
      }

}
