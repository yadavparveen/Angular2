import { Component } from "@angular/core";

@Component({
    selector:'first-page',
    templateUrl:'app/html/app.FirstPage.html'
})

export class FirstPage{
  FirstName:string='Parveen';
  LastName:string='Kumar';
  PageStatus:boolean=false;
}

