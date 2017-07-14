import { NgModule }      from '@angular/core'; //responsible for angular2
import { BrowserModule } from '@angular/platform-browser'; //*ngIf,*ngFor


//Inject Component
import { AppComponent }  from './app.component';
import { FirstPage } from './app.firstPage';
import { ForeachComponent } from './app.ForeachComponent';
import { CRUDComponent } from './app.CRUDComponent';
import { EventHandlingComponent } from "./app.eventHandling";
//end of component

//Inject extra Module
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
//end extra Module



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, FirstPage, ForeachComponent, CRUDComponent, EventHandlingComponent ],
  bootstrap:    [ AppComponent,FirstPage ]
})
export class AppModule { 


}
