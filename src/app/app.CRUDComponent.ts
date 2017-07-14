import { Component } from "@angular/core"; // to enable component decorator


import { IProduct } from "./products";
import { ProductService } from "./product.service";

import { Http , Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';


@Component({
    selector:'get-request',
    templateUrl:'app/html/app.crud.html',
    providers:[ProductService]
})



export class CRUDComponent{

    iproduct:IProduct[];

    //inject Service  in constructor
    constructor(private _product : ProductService){} 

    ngOnInit():void{

        this._product.getProducts()
            .subscribe(iproducts=>this.iproduct=iproducts); 
                //subscribe option which is used to listen to the Observable getproducts() 
                //function to listen for data from the data source.
    }

}