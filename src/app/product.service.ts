import { Injectable } from '@angular/core'; 


//The following statements are used to make use of the Reactive framework
import { Observable } from 'rxjs/Observable'; //create an Observable variable,The Observable framework is used to detect any changes in the http response which can then be sent back to the main application.
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 

//responsible to get response from service or rest api
import { Http , Response } from '@angular/http';  

//interface refrence
import { IProduct } from "./products";

@Injectable() // without this metadata we can't inject service in Component
export class ProductService{

    private _productUrl='app/Service/product.json'; //location of our data source/Web API

    constructor(private _http:Http){ }

//Get request
  
  getProducts() : Observable<IProduct[]>{

      return this._http.get(this._productUrl)
                  .map((response:Response)=> <IProduct[]> response.json() )
                  .do(data=> JSON.stringify(data));
  }



 private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 



}
