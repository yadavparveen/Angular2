import { Component } from "@angular/core"; // to enable component decorator

@Component({
selector:'clicked-event',
template:'<div><input type="text" [(ngModel)]="Status"> {{Status}} <button (click)="clickMe(this)"> Click me </button></div>'
})

export class EventHandlingComponent{
   public Status: boolean =true;

   clickMe(event){
       console.log(event);
       if(this.Status){
       this.Status=false;
    }else{
        this.Status=true;
    }

   }
}