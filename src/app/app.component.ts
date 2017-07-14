import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{Firstname}}</h1>`,
})
export class AppComponent  
{ 
  public  Firstname:string = 'Sunny Vohra and Nitin';

 }
