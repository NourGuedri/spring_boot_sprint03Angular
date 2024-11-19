import { Injectable } from '@angular/core';
import { Plante } from '../model/plante.model';
import { Type } from '../model/type.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeWrapper } from '../model/typeWrapped.model';
import { AuthService } from './auth.service';
import { Image } from '../model/image.model';
import { apiURL } from '../../config';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}
@Injectable({
providedIn: 'root'
})
export class PlanteService {
   apiUrl = 'http://localhost:8081/plantes/api';
   apiURLType = 'http://localhost:8081/plantes/api/type';
   apiURL: string = 'http://localhost:8081/plantes/api';
   types!: Type[];
 
   constructor(private http: HttpClient , private authService: AuthService) { }

  //  listePlante(): Observable<Plante[]>{
  //   let jwt = this.authService.getToken();
  //   jwt = "Bearer "+jwt;
  //   let httpHeaders = new HttpHeaders({"Authorization":jwt})
  //   return this.http.get<Plante[]>(this.apiURL+"/all",{headers:httpHeaders});
  //   }
// ajouterPlante( pls: Plante) : Observable<Plante>{
//   return this.http.post<Plante>(this.apiUrl, pls, httpOptions);
// }
// supprimerPlante( id: number){
//   const url = `${this.apiUrl}/${id}`;
//   return this.http.delete(url, httpOptions);
  
//   //ou Bien
//   /* this.plantes.forEach((cur, index) => {
//   if(pls.idPlante === cur.idPlante) {
//   this.plantes.splice(index, 1);
//   }
//   }); */
//   }
// consulterPlante(id:number): Observable <Plante>{
//   const url = `${this.apiUrl}/${id}`;
//   return this.http.get<Plante>(url);
//   }
    
    // trierPlantes(){
    //   this.plantes = this.plantes.sort((n1,n2) => {
    //   if (n1.idPlante! > n2.idPlante!) {
    //   return 1;
    //   }
    //   if (n1.idPlante! < n2.idPlante!) {
    //   return -1;
    //   }
    //   return 0;
    //   });
    //   }
// updatePlante(p:Plante): Observable<Plante>{
//   return this.http.put<Plante>(this.apiUrl, p, httpOptions);
// }
listeTypes(): Observable <TypeWrapper> {
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<TypeWrapper>(this.apiURLType,{headers:httpHeaders}
  );
}
consulterType(id:number): Type{
    return this.types.find(ty => ty.idType == id)!;
    }  

    rechercherParType(idType: number):Observable< Plante[]> {
      const url = `${this.apiURL}/plstype/${idType}`;
      return this.http.get<Plante[]>(url);
      }


      rechercherParNom(nom: string):Observable< Plante[]> {
        const url = `${this.apiURL}/plsByName/${nom}`;
        return this.http.get<Plante[]>(url);
        }
        
        ajouterType( type: Type):Observable<Type>{
          return this.http.post<Type>(this.apiURLType, type, httpOptions);
          }
          
          // listePlante(): Observable<Plante[]> {
          //   return this.http.get<Plante[]>(this.apiUrl);
          // }


          listePlante(): Observable<Plante[]>{
            
            return this.http.get<Plante[]>(this.apiURL+"/all");
            }
            ajouterPlante( pl: Plante):Observable<Plante>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Plante>(this.apiURL+"/addpl", pl, {headers:httpHeaders});
            }
            supprimerPlante(id : number) {
            const url = `${this.apiURL}/delpl/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
            }
            consulterPlante(id: number): Observable<Plante> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Plante>(url,{headers:httpHeaders});
            }
            updatePlante(pl :Plante) : Observable<Plante> {
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Plante>(this.apiURL+"/updatepl", pl, {headers:httpHeaders});
            }
            supprimerType(id: number) {
              const url = `${this.apiURLType}/${id}`;
              let jwt = this.authService.getToken();
              jwt = "Bearer " + jwt;
              let httpHeaders = new HttpHeaders({ "Authorization": jwt, "Content-Type": "application/json" });
              return this.http.delete(url, { headers: httpHeaders });
        }

        uploadImage(file: File, filename: string): Observable<Image>{
          const imageFormData = new FormData();
          imageFormData.append('image', file, filename);
          const url = `${apiURL + '/image/upload'}`;
          return this.http.post<Image>(url, imageFormData);
          }
          loadImage(id: number): Observable<Image> {
          const url = `${this.apiURL + '/image/get/info'}/${id}`;
          return this.http.get<Image>(url);
          }
          uploadImagePl(file: File, filename: string, idPl:number): Observable<any>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${this.apiURL + '/image/uplaodImagePl'}/${idPl}`;
            return this.http.post(url, imageFormData);
            }     

            supprimerImage(id : number) {
              const url = `${this.apiURL}/image/delete/${id}`;
              return this.http.delete(url, httpOptions);
              }

              
}
