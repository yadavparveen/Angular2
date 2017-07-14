import { Component } from "@angular/core";


@Component({
    selector:'foreach-tag',
    templateUrl:'app/html/app.FirstPage.html'
})


export class ForeachComponent{
  appList: any[] = [ { 
      "ID": "1", 
      "Name" : "One" 
   }, 

   { 
      "ID": "2", 
      "Name" : "Two"  
   } ];
}