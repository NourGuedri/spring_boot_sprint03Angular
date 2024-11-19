import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantesComponent } from './plantes/plantes.component';
import { AddPlanteComponent } from './add-plante/add-plante.component';
import { UpdatePlanteComponent } from './update-plante/update-plante.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
 import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
 import { ListeTypesComponent } from './liste-types/liste-types.component';
 import { LoginComponent } from './login/login.component';
 import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlanteGuard } from './plante.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [

  {
    path: 'plantes',component:PlantesComponent
  },
  {path :'add-plante',component:AddPlanteComponent, canActivate:[PlanteGuard]},

  { path: '', redirectTo: 'plantes', pathMatch: 'full' },

{path: "updatePlante/:id", component: UpdatePlanteComponent},
{ path:"rechercheParType", component:RechercheParTypeComponent} ,
{path: 'rechercheParNom', component: RechercheParNomComponent},
{ path:"listeTypes",  component: ListeTypesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path:'register',component:RegisterComponent}, 
{ path: 'verifEmail', component: VerifEmailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PlanteGuard]

})
export class AppRoutingModule { }
